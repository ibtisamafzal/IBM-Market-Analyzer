// src/pages/About.js
import React from 'react';
import '../custom.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                Welcome to <strong>IBM Analyzer</strong> – your go-to platform for the latest 
                market trends, insights, and data-driven analysis. Our mission is to 
                provide <strong>real-time updates</strong> and <strong>expert insights</strong> to help you stay ahead 
                in the fast-paced financial world.
            </p>

            <div className="about-section">
                <h2 className="about-subtitle">Our Mission</h2>
                <p className="about-text">
                    In today's ever-changing market, keeping up with trends can be overwhelming. 
                    Our goal is to <strong>simplify market insights</strong> and present you with the most 
                    relevant information in an <strong>easy-to-digest</strong> manner.
                </p>
            </div>

            <div className="about-section">
                <h2 className="about-subtitle">Why Choose Us?</h2>
                <ul className="about-list">
                    <li>✅ AI-powered <strong>data analysis</strong> and trend predictions.</li>
                    <li>✅ <strong>Real-time updates</strong> on stock performance and market shifts.</li>
                    <li>✅ User-friendly interface for a <strong>seamless experience</strong>.</li>
                    <li>✅ <strong>Trusted sources</strong> and <strong>accurate information</strong>.</li>
                </ul>
            </div>

            <div className="about-section">
                <h2 className="about-subtitle">Join Us!</h2>
                <p className="about-text">
                    Stay ahead of the market with <strong>IBM Analyzer</strong>. Whether you are an investor, 
                    analyst, or just a market enthusiast, we provide <strong>cutting-edge insights</strong> to 
                    keep you informed.  
                </p>
            </div>

            <p className="about-footer">🚀 Explore the future of market analysis with us!</p>
        </div>
    );
};

export default About;