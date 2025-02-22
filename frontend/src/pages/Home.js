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
        <Container className="mt-5">
            <h1 className="text-center text-white mb-4">Market Trend News</h1>

            {/* Search Bar */}
            <Form className="d-flex mb-4 justify-content-center">
                <Form.Control
                    type="text"
                    placeholder="Enter a topic (e.g. AI, Finance, Stocks)..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-50 me-2"
                />
                <Button variant="primary" onClick={handleSearch}>
                    Search
                </Button>
            </Form>

            {error && <Alert variant="danger" className="text-center">{error}</Alert>}
            {loading && <div className="text-center"><Spinner animation="border" /></div>}

            {/* Display Sentiment Analysis */}
            {sentimentScore !== null && (
                <div className="text-center mb-4">
                    <h5>Overall Sentiment</h5>
                    <SentimentMeter score={sentimentScore} />
                    <p className="mt-2">{recommendations[0]}</p>
                </div>
            )}

            {/* News Cards */}
            <Row>
                {news.length > 0 ? (
                    news.map((article, index) => (
                        <Col key={index} sm={12} md={6} lg={6}> {/* Two cards per row */}
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
