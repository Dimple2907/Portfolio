import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="8" className="footer-copywright" style={{ textAlign: "center", width: "100%" }}>
          <h3>Thanks for visiting <span role="img" aria-label="heart">❤️</span></h3>
        </Col>
        <Col md="4" className="footer-body">
          {/* Social icons removed as requested */}
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
