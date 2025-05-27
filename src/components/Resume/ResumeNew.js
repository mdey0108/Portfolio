import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/MaheshKumarResume2.0.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section">

      <Row className="resume">
        <Document
          file={pdf}
          className="d-flex justify-content-center"
          loading="Loading Resume..."
          error="Failed to load resume. Please try again."
        >
          <Page
            pageNumber={1}
            scale={width > 786 ? 1.7 : 0.6}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </Row>
      <Row style={{ justifyContent: "center", marginTop: "2rem" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          className="resume-btn"
          style={{
            maxWidth: "250px",
            padding: "0.75rem 1.5rem",
            fontSize: "1.1rem",
            fontWeight: "600",
          }}
        >
          <AiOutlineDownload size={20} />
          &nbsp;Download Resume
        </Button>
      </Row>
      <Particle />
    </Container>
  );
}

export default ResumeNew;
