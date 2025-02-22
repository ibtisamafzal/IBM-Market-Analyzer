from flask import Blueprint, request, jsonify
import requests
import os
import json
import re
from dotenv import load_dotenv

load_dotenv()
bp = Blueprint('news', __name__)

BING_API_KEY = os.getenv("BING_API_KEY")
IBM_CLOUD_KEY = os.getenv("IBM_CLOUD_KEY")
# Update the IBM Watsonx deployment URL
IBM_WATSONX_URL = "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/b2a8ca4b-e920-40a1-8b6a-86c82a78566c/text/generation?version=2021-05-01"

def get_ibm_access_token():
    """Fetches an IBM Cloud IAM access token using API Key."""
    url = "https://iam.cloud.ibm.com/identity/token"
    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    data = f"grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey={IBM_CLOUD_KEY}"

    try:
        response = requests.post(url, headers=headers, data=data)
        response.raise_for_status()
        return response.json().get("access_token")
    except requests.exceptions.RequestException as e:
        print(f"Error fetching IBM access token: {str(e)}")
        return None

def analyze_sentiment(news_articles):
    """Sends text to IBM Watsonx for sentiment analysis and detailed recommendations."""
    access_token = get_ibm_access_token()
    
    if not access_token:
        return None, ["Error: Failed to retrieve IBM access token"]

    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    
    # Prepare the prompt variables for each article
    prompt_variables = {}
    for i, article in enumerate(news_articles[:3], start=1):  # Limit to 3 articles
        prompt_variables[f"title_{i}"] = article.get("title", "")
        prompt_variables[f"source_{i}"] = article.get("source", "")
        prompt_variables[f"summary_{i}"] = article.get("description", "")

    # Construct the payload
    payload = {
        "parameters": {
            "prompt_variables": prompt_variables
        }
    }

    try:
        print("🔹 Sending request to IBM Watsonx API...")
        print("Headers:", headers)
        print("Payload:", json.dumps(payload, indent=2))
        
        response = requests.post(IBM_WATSONX_URL, headers=headers, json=payload)
        
        print("📡 API Response Status:", response.status_code)
        print("📡 API Response:", response.text)
        
        response.raise_for_status()
        result = response.json()

        # Extract the generated text
        generated_text = result.get("results", [{}])[0].get("generated_text", "")
        
        try:
            # Find the JSON object in the response
            json_start = generated_text.find("{")
            json_end = generated_text.rfind("}") + 1
            json_str = generated_text[json_start:json_end]
            
            parsed_result = json.loads(json_str)
            sentiment_scores = parsed_result.get("sentiment_scores", [])
            recommendation = parsed_result.get("recommendation", "No recommendation available")
            
            return sentiment_scores, [recommendation]
            
        except (json.JSONDecodeError, ValueError):
            # If JSON parsing fails, try to parse the plain text response
            print("⚠️ API response is not in JSON format. Attempting to parse plain text...")
            
            # Extract sentiment score and recommendation from plain text
            sentiment_score = 0.0
            recommendation = "No recommendation available"
            
            # Look for sentiment score in the response
            sentiment_match = re.search(r"Sentiment score: ([\d.-]+)", generated_text)
            if sentiment_match:
                sentiment_score = float(sentiment_match.group(1))
            
            # Look for recommendation in the response
            recommendation_match = re.search(r"recommendation (is|should be) (.+)", generated_text, re.IGNORECASE)
            if recommendation_match:
                recommendation = recommendation_match.group(2).strip()
            
            # Return default sentiment scores and recommendation
            return [{"title": article["title"], "sentiment_score": sentiment_score} for article in news_articles[:3]], [recommendation]

    except requests.exceptions.RequestException as e:
        print(f"❌ Error with IBM Watsonx API: {str(e)}")
        error_details = str(e)
        if hasattr(e, 'response') and hasattr(e.response, 'text'):
            error_details += f"\nResponse: {e.response.text}"
        return None, [f"Error analyzing sentiment: {error_details}"]

@bp.route('/fetch-news', methods=['GET'])
def fetch_news():
    query = request.args.get('query', 'AI Startups')

    if not BING_API_KEY:
        return jsonify({"error": "Missing Bing API key"}), 500

    url = f"https://api.bing.microsoft.com/v7.0/news/search?q={query}&count=5"
    headers = {"Ocp-Apim-Subscription-Key": BING_API_KEY}

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        data = response.json()

        news_articles = []
        for article in data.get("value", []):
            news_articles.append({
                "title": article.get("name"),
                "description": article.get("description"),
                "url": article.get("url"),
                "source": article.get("provider")[0]["name"] if "provider" in article else "Unknown",
                "image": article["image"]["thumbnail"]["contentUrl"] if "image" in article else None,
                "published_date": article.get("datePublished")
            })

        # Analyze sentiment using IBM Watsonx
        sentiment_scores, recommendations = analyze_sentiment(news_articles)

        return jsonify({
            "query": query,
            "articles": news_articles,
            "sentiment_scores": sentiment_scores,
            "recommendations": recommendations
        })

    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500