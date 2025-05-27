import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

function Touch() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Sending your message...");
    const formData = new FormData(event.target);

    formData.append("access_key", "6fa4304d-4d85-4250-81cd-5b9b79b772ad");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you for your message! I'll get back to you soon.");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Unable to send message. Please check your network connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="contact-form-container py-4">
      <Form onSubmit={onSubmit} className="contact-form">
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            minLength={2}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            pattern="[0-9]*"
            title="Please enter numbers only"
          />
          <Form.Text className="text-muted">
            Format: numbers only, no spaces or special characters
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={4}
            placeholder="Type your message here..."
            required
            minLength={10}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={isLoading}
          className="submit-button"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </Button>

        {result && (
          <Alert
            variant={result.includes("thank you") ? "success" : "danger"}
            className="mt-3"
          >
            {result}
          </Alert>
        )}
      </Form>
    </Container>
  );
}

export default Touch;