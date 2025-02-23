# IBM Market Analyzer

## Project Description

IBM Market Analyzer is an AI-powered platform that provides advanced sentiment analysis and market trend predictions. Leveraging IBM Granite AI models and Bing News Search API, this project aims to transform complex market data into actionable insights. It is designed for analysts, startup founders, business owners, and VC firms seeking market intelligence.

## Features

- **AI-Powered Analysis**: Utilizes IBM Granite AI models for sentiment analysis.
- **Real-Time Insights**: Provides live market news and sentiment analysis.
- **Smart Decisions**: Offers data-driven business recommendations.
- **Multiple Use Cases**: Suitable for various market intelligence needs.


## Setup Instructions

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ibtisamafzal/IBM-Market-Analyzer.git
   cd IBM-Market-Analyzer/backend
   ```

2. **Create a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**:
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   BING_API_KEY=your_bing_api_key
   IBM_CLOUD_KEY=your_ibm_watson_api_key
   ```

5. **Run the backend server**:
   ```bash
   python run.py
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the frontend server**:
   ```bash
   npm start
   ```

## API Keys

### Bing News Search API Key

1. Go to the [Bing News Search API](https://www.microsoft.com/en-us/bing/apis/bing-news-search-api-v7) page.
2. Sign in or create an account.
3. Subscribe to the API to get your API key.
4. Add the API key to your `.env` file as `BING_API_KEY`.

### IBM Watson API Key

1. Go to the [IBM Cloud](https://cloud.ibm.com/) page.
2. Sign in or create an account.
3. Navigate to the IBM Watson services and create an instance.
4. Obtain the API key from the service credentials.
5. Add the API key to your `.env` file as `IBM_CLOUD_KEY`.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the search bar to enter keywords and get real-time market insights and sentiment analysis.

