import React from "react";
import { Card, Button } from "react-bootstrap";

const NewsCard = ({ title, description, url, source, image, published_date }) => {
    return (
        <Card className="mb-4 shadow-lg">
            {image && (
                <Card.Img 
                    variant="top" 
                    src={image} 
                    style={{ borderRadius: '15px 15px 0 0' }}
                />
            )}
            <Card.Body>
                <Card.Title className="mb-3">{title}</Card.Title>
                <Card.Text className="mb-4">{description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <Card.Text className="text-muted small mb-1">
                            Published: {new Date(published_date).toLocaleDateString()}
                        </Card.Text>
                        <Card.Text className="text-muted small">
                            Source: {source}
                        </Card.Text>
                    </div>
                    <Button variant="primary" href={url} target="_blank">
                        Read More
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default NewsCard;