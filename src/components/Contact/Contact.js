import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <Particle />
      <Container fluid style={{ color: "white" }} className="contact-section">
        <h1 style={{ textAlign: "center" }}>
          Contact <strong className="orange">Me</strong>
        </h1>
        <Row className="form-section">
          <Col className="form-left">
            <ContactForm />
          </Col>
          <Col className="form-right">
            <ContactDetails />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
