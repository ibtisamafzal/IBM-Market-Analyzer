import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

const SentimentMeter = ({ score, debug = false }) => {
    let normalizedScore = Math.max(-1, Math.min(1, Number(score) || 0));

    // Increase sensitivity by adding a random factor (only for testing)
    if (debug) {
        const randomFactor = (Math.random() - 0.5) * 0.4;  // Adds variance (-0.2 to 0.2)
        normalizedScore = Math.max(-1, Math.min(1, normalizedScore + randomFactor));
    }

    // Convert sentiment score (-1 to 1) to a 0-100 scale
    const percentage = ((normalizedScore + 1) * 50).toFixed(1);

    // Define a more fragile color scale for better differentiation
    const getColor = (value) => {
        if (value >= 90) return "#006400";  
        if (value >= 80) return "#28a745";  
        if (value >= 70) return "#40c057";  
        if (value >= 60) return "#87d068";  
        if (value >= 50) return "#2596be";  
        if (value >= 40) return "#ffd700";  
        if (value >= 30) return "#ff8c00";  
        if (value >= 20) return "#e28743";  
        if (value >= 10) return "#ff6347";  
        return "#dc3545";  
    };

    const data = [{ value: percentage, fill: getColor(percentage) }];

    return (
        <div className="sentiment-meter text-center">
            <RadialBarChart 
                width={250} 
                height={150} 
                cx={125} 
                cy={150} 
                innerRadius={50} 
                outerRadius={100} 
                startAngle={180} 
                endAngle={0} 
                barSize={15} 
                data={data}
            >
                <PolarAngleAxis 
                    type="number" 
                    domain={[0, 100]} 
                    angleAxisId={0} 
                    tick={false} 
                />
                <RadialBar 
                    background={{ fill: "#ddd" }} 
                    dataKey="value" 
                />
            </RadialBarChart>
            <h6 className="mt-2" style={{ color: getColor(percentage) }}>
                {normalizedScore > 0.3 ? "Positive" : normalizedScore < -0.3 ? "Negative" : "Neutral"}
            </h6>
        </div>
    );
};

export default SentimentMeter;