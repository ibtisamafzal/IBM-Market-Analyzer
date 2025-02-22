import React from "react";
import { ProgressBar } from "react-bootstrap";

const SentimentMeter = ({ score }) => {
    // Ensure score is a number and within bounds
    const normalizedScore = Math.max(-1, Math.min(1, Number(score) || 0));
    
    // Determine the variant (color) based on the score
    const getVariant = (value) => {
        if (value > 0.3) return "success";  // Positive
        if (value < -0.3) return "danger";  // Negative
        return "warning";  // Neutral
    };

    // Calculate the percentage for the progress bar
    const getPercentage = (value) => {
        return ((value + 1) * 50).toFixed(1);
    };

    // Get the label for the progress bar
    const getLabel = (value) => {
        return `${getPercentage(value)}%`;
    };

    // Get the trend label (Positive, Negative, Neutral)
    const getTrendLabel = (value) => {
        if (value > 0.3) return "Positive Trend";
        if (value < -0.3) return "Negative Trend";
        return "Neutral Trend";
    };

    return (
        <div className="sentiment-meter">
            <ProgressBar 
                now={getPercentage(normalizedScore)}
                variant={getVariant(normalizedScore)}
                animated
                striped
                label={getLabel(normalizedScore)}
                style={{ height: '25px' }}
            />
            <div className="text-center mt-2">
                {getTrendLabel(normalizedScore)}
            </div>
        </div>
    );
};

export default SentimentMeter;