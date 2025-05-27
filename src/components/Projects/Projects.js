import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Touch from "./Touch";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Let's <strong className="purple">Connect</strong>
        </h1>
        <p style={{ color: "white" }}>
          Feel free to reach out to me using the form below.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} />
      </Container>

      <div>
        <Touch />
      </div>

    </Container>
  );
}

export default Projects;

