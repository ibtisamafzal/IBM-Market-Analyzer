from flask import Blueprint, request, jsonify
import requests
import os
import json
from dotenv import load_dotenv

load_dotenv()
bp = Blueprint('news', __name__)

BING_API_KEY = os.getenv("BING_API_KEY")
IBM_CLOUD_KEY = os.getenv("IBM_CLOUD_KEY")
# Update the IBM Watsonx deployment URL
IBM_WATSONX_URL = "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/2ca64f94-4748-4b25-b5ba-017a4a631a9e/text/generation?version=2021-05-01"

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

def analyze_sentiment(texts):
    """Sends text to IBM Watsonx for sentiment analysis using the deployed prompt."""
    access_token = get_ibm_access_token()
    
    if not access_token:
        return None, ["Error: Failed to retrieve IBM access token"]

    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    
    # Create a concise summary of all articles
    news_summary = " ".join([text[:200] + "..." for text in texts])
    
    # Define the payload for the Watsonx deployment
    payload = {
        "parameters": {
            "prompt_variables": {
                "news_summary": news_summary,
                "sentiment_score": "0.00", 
                "recommendation": ""
            }
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
            # Find all JSON objects in the response
            json_objects = []
            start = 0
            while True:
                start = generated_text.find("{", start)
                if start == -1:
                    break
                end = generated_text.find("}", start) + 1
                if end == 0:
                    break
                json_str = generated_text[start:end]
                try:
                    json_obj = json.loads(json_str)
                    if "sentiment_score" in json_obj and "recommendation" in json_obj:
                        json_objects.append(json_obj)
                except json.JSONDecodeError:
                    pass
                start = end

            if json_objects:
                # Use the last valid JSON object
                parsed_result = json_objects[-1]
                sentiment_score = float(parsed_result.get("sentiment_score", 0))
                recommendation = parsed_result.get("recommendation", "No recommendation available")
                
                return sentiment_score, [recommendation]
            else:
                raise ValueError("No valid JSON object found in the response")
            
        except (json.JSONDecodeError, ValueError) as e:
            print(f"❌ Error parsing model response: {str(e)}")
            print("Raw response:", generated_text)
            return 0, ["Unable to analyze sentiment due to parsing error"]

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
        sentiment_score, recommendations = analyze_sentiment([article["description"] for article in news_articles])

        return jsonify({
            "query": query,
            "articles": news_articles,
            "sentiment_score": sentiment_score,
            "recommendations": recommendations
        })

    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500