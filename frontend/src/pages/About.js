import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../custom.css';

const FeatureCard = ({ icon, title, description }) => (
    <div className="feature-card">
        <div className="feature-content">
        <div className="feature-icon">{icon}</div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
        </div>
    </div>
);

const About = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const features = [
        {
        icon: "🧠",
        title: "AI-Powered Analysis",
        description: "Leveraging IBM Granite AI models for advanced sentiment analysis and market trend predictions"
        },
        {
        icon: "📈",
        title: "Real-Time Insights",
        description: "Stay updated with live market news and sentiment analysis through our visual temperature meter"
        },
        {
        icon: "⚡",
        title: "Smart Decisions",
        description: "Make data-driven business decisions with our AI-powered recommendations and insights"
        },
        {
        icon: "👥",
        title: "Multiple Use Cases",
        description: "Perfect for analysts, startup founders, business owners, and VC firms seeking market intelligence"
        }
    ];

    return (
        <div className="about-page">
        {/* Hero Section */}
        <div className="hero-section">
            <h1 className="hero-title">Market Intelligence Reimagined</h1>
            <p className="hero-description">
            Welcome to the future of market analysis. Our AI-powered platform transforms complex market data into actionable insights.
            </p>
            <button 
                className="primary-button"
                onClick={() => navigate('/')} // Navigate to the home page
            >
            Get Started
            <span className="button-arrow">→</span>
            </button>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
            {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
            ))}
        </div>

        {/* Technology Stack */}
        <div className="tech-stack">
            <h2 className="section-title">Powered by Leading Technology</h2>
            <div className="tech-grid">
            {[
                "React Frontend",
                "Flask Backend",
                "IBM Granite AI",
                "Bing News API"
            ].map((tech, index) => (
                <div key={index} className="tech-card">
                <p>{tech}</p>
                </div>
            ))}
            </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
            <h2 className="cta-title">Ready to Transform Your Market Analysis?</h2>
            <p className="cta-description">
            Join industry leaders who trust our platform for their market intelligence needs.
            </p>
            <button className="secondary-button">Learn More</button>
        </div>
        </div>
    );
};

export default About;