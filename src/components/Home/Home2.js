import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
              LET ME <span className="orange"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I love programming and I think I might solve some Problems at least.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="blue">Web Designs & Developing</b> 
              </i> them.
              <br />
              <br />
              Whenever possible, I also read about<b className="blue"> Artificial Intelligence</b> and
              <i>
                <b className="blue">
                  {" "}
                  Deep Learning
                </b>
              </i>
              &nbsp; and sometimes
              <i>
                <b className="blue"> Crypto Currency and Stocks </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{textAlign: "center"}}><span className="orange">CONNECT </span> WITH ME ON</h1>
            <p>
              Feel free to Drop the <span className="blue">Message</span>
            </p>
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
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
