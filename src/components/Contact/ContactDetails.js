import React from "react";
import Container from "react-bootstrap/Container";
import { FiMail } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephoneInboundFill } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";
function ContactDetails() {
  return (
    <Container>
      <h1>Get In Touch</h1>
      <p>
        Feels Free to <strong className="blue">Drop Message</strong>.
      </p>
      <br />
      <h3>
        My <span className="orange">Address</span>
      </h3>
      <div className="my-cont" style={{ textAlign: "left" }}>
        <p>
          <MdOutlineLocationOn /> Paonta Sahib, Himachal Pradesh, India
        </p>
        <p>
          <BsTelephoneInboundFill /> 8260153381
        </p>
        <p>
          <FiMail /> varungupta1002@gmail.com
        </p>
      </div>
      <div className="contact-social-links" style={{ textAlign: "left" }}>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/varunmguptaa"
              target="_blank"
              rel="noreferrer"
              className="icon-colour icon-github home-social-icons"
            >
              <FaGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/er-varungupta/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  icon-linkedin home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/varunmguptaa"
              target="_blank"
              rel="noreferrer"
              className="icon-colour icon-insta home-social-icons "
            >
              <FaInstagram />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.facebook.com/varun.gupta.583671/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour icon-fb home-social-icons "
            >
              <FaFacebookF />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default ContactDetails;
