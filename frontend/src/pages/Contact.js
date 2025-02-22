// src/pages/Contact.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
        <h1>Contact Us</h1>
        <Form>
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
            <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
            Submit
            </Button>
        </Form>
        </div>
        );
};

export default Contact;
