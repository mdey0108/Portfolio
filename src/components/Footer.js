import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="footer-copywright">
          <h3>Crafted with ☕ by a Professional Meeting Attender</h3>
        </Col>
        <Col md={4} className="footer-copywright">
          <h3>© {year} | Surviving Sprints Since 2021</h3>
        </Col>
        <Col md={4} className="footer-copywright">
          <h3>Dedicated to Fellow Deadline Warriors</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
