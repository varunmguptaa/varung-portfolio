import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCards";
import Particle from "../Particle";

import webDesign from "../../Assets/Services/web-design.jpg";
import editing from "../../Assets/Services/editing.png";
import programmer from "../../Assets/Services/Programmer.png";
import webDev from "../../Assets/Services/web-development.png";
import poster from "../../Assets/Services/pos.png";
import videoediting from "../../Assets/Services/videoediting.png";

function Services() {
  return (
    <Container fluid className="service-section" >
      <Particle />
      <Container>
        <h1 className="service-heading" style={{textAlign: "center"}}>
          What can I <strong className="orange">Do </strong> for <span className="orange">You </span>?
        </h1>
        <p style={{ color: "white" }}>
          Here are a few <strong className="blue">Services</strong> I can provide You
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="service-card">
            <ServiceCard
              imgPath={webDesign}
              title="Web Design"
              description="I have tried my hands on Figma and Adobe XD to design websites"
            />
          </Col>
          <Col md={4} className="service-card">
            <ServiceCard
              imgPath={webDev}
              title="Web Development"
              description="Building responsive, performant web applications using the MERN stack — MongoDB, Express, React and Node.js."
            />
          </Col>
          <Col md={4} className="service-card">
            <ServiceCard
              imgPath={programmer}
              title="Programming"
              description="Good at problem solving and logical reasoning. Complete Knowledge of programming languages like Java, C++ and Python."
              
            />
          </Col>

          <Col md={4} className="service-card">
            <ServiceCard
              imgPath={videoediting}
              title="Video Editing"
              description="I sometimes use DaVinci Resolve and VN Video Editor to edit videos. "
            />
          </Col>

          <Col md={4} className="service-card">
            <ServiceCard
              imgPath={poster}
              title="Posters"
              description="I enjoy designing and creating posters for various events. " 
            />
          </Col>

          <Col md={4} className="service-card">
            <ServiceCard
              imgPath={editing}
              title="Photo Editing"
              description="I also enjoy editing photographs using software such as Adobe Lightroom, Adobe Photoshop and many more. "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
