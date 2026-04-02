import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  function validate(name, email, message) {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required.";
    if (!email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!message.trim()) errs.message = "Message is required.";
    return errs;
  }

  function sendEmail(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const errs = validate(name, email, message);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        form.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  }

  return (
    <Form style={{ textAlign: "left" }} onSubmit={sendEmail} noValidate>
      <Form.Group className="mb-3 fc">
        <Form.Control
          className="sub-fc"
          placeholder="Name"
          name="name"
          isInvalid={!!errors.name}
        />
        {errors.name && (
          <div className="form-error">{errors.name}</div>
        )}
      </Form.Group>

      <Form.Group controlId="formGridEmail" className="mb-3 fc">
        <Form.Control
          className="sub-fc"
          type="email"
          placeholder="Enter email"
          name="email"
          isInvalid={!!errors.email}
        />
        {errors.email && (
          <div className="form-error">{errors.email}</div>
        )}
      </Form.Group>

      <Form.Group className="mb-3 fc">
        <Form.Control
          className="sub-fc"
          as="textarea"
          rows={4}
          placeholder="Message..."
          name="message"
          isInvalid={!!errors.message}
        />
        {errors.message && (
          <div className="form-error">{errors.message}</div>
        )}
      </Form.Group>

      <Form.Group className="mb-4">
        <Button
          className="primary mt-3"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>
      </Form.Group>

      {status === "success" && (
        <div className="form-feedback success">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      {status === "error" && (
        <div className="form-feedback error">
          Something went wrong. Please try again or email me directly.
        </div>
      )}
    </Form>
  );
}

export default ContactForm;
