import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Dimple_Resume-1 (1).pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const styles = {
  documentWrapper: {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  },
  document: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Dimple_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <div style={styles.documentWrapper}>
          <Row className="resume" style={styles.document}>
            <Document file={pdf} className="d-flex justify-content-center">
              <Page
                pageNumber={1}
                scale={width > 786 ? 1.0 : 0.6}
                renderTextLayer={false}
              />
            </Document>
          </Row>
        </div>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "20px",
          }}
        >
          <Button
            variant="primary"
            onClick={handleDownload}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
