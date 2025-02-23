// src/pages/Contact.js
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../custom.css';

const Contact = () => {
    return (
        <Container className="contact-container">
            <h1 className="text-center mb-4">Contact Us</h1>
            <Form className="contact-form">
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Type your message here" />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 w-100">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Contact;
