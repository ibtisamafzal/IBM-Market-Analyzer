import React, { useState } from "react";
import { fetchNewsWithSentiment } from "../services/api";
import NewsCard from "../components/NewsCard";
import { Container, Form, Button, Row, Col, Spinner, Alert } from "react-bootstrap";
import SentimentMeter from "../components/SentimentMeter";

const Home = () => {
    const [query, setQuery] = useState("");
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [sentimentScore, setSentimentScore] = useState(null);
    const [recommendations, setRecommendations] = useState([]);

    const handleSearch = async () => {
        if (!query.trim()) {
            setError("Please enter a keyword.");
            return;
        }

        setLoading(true);
        setError("");

        const data = await fetchNewsWithSentiment(query);
        setNews(data.articles);
        setSentimentScore(data.sentiment_score);
        setRecommendations(data.recommendations);

        setLoading(false);
    };

    return (
        <Container className="mt-4 text-center main-container">
            <h1 className="text-white fw-bold mb-4">AI-Powered Market Insights: Trends & Sentiment in Real-Time</h1>
            <p className="text-white mb-4">
                🚀 Stay ahead of market shifts with real-time sentiment analysis, data-driven decisions, mitigate risks, and capitalize on emerging opportunities.
            </p>

            {/* Search Bar */}
            <Form className="d-flex search-bar mt-5 mb-4 justify-content-center">
                <Form.Control
                    type="text"
                    placeholder="🔍 Search for trends (e.g., AI, Finance, Stocks)..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input rounded-pill px-3"
                />
                <Button variant="warning" onClick={handleSearch} className="search-button ms-2 rounded-pill px-4">
                    Analyze
                </Button>
            </Form>

            {error && <Alert variant="danger" className="text-center">{error}</Alert>}
            {loading && <div className="text-center"><Spinner animation="border" variant="light" /></div>}

            {/* Display Sentiment Analysis */}
            {sentimentScore !== null && (
                <div className="text-center  mt-5">
                    <h5 className="text-white">Overall Sentiment</h5>
                    <SentimentMeter score={sentimentScore} />
                    <p className="mt-4 mb-5 text-light">{recommendations[0]}</p>
                </div>
            )}

            {/* News Cards */}
            <Row>
                {news.length > 0 ? (
                    news.map((article, index) => (
                        <Col key={index} sm={12} md={6} lg={4} className="mb-3">
                            <NewsCard {...article} sentiment={sentimentScore} />
                        </Col>
                    ))
                ) : (
                    !loading && <p className="text-center text-muted">No news found. Try another keyword.</p>
                )}
            </Row>
        </Container>
    );
};

export default Home;