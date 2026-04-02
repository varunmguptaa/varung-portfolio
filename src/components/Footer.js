import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copyright">
          <h3 style={{ textAlign: "center" }}>
            Copyright &copy; {new Date().getFullYear()}
          </h3>
        </Col>
        <Col md="6" className="footer-copyright">
          <h3 style={{ textAlign: "center" }}>
            Designed And Developed by Varun Gupta
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
