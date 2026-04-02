import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Particle from "../Particle";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React, Bootstrap and EmailJS to showcase skills, services and contact info.",
    tech: ["React", "Bootstrap", "EmailJS", "React Router"],
    github: "https://github.com/varun2068/varung-portfolio",
    live: "https://varun2068.github.io/varung-portfolio",
  },
  {
    title: "Web Application",
    description:
      "A full-stack MERN web application with user authentication, REST API and MongoDB database integration.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/varun2068",
    live: null,
  },
  {
    title: "Python AI Project",
    description:
      "Machine learning project exploring deep learning techniques with PyTorch for image classification.",
    tech: ["Python", "PyTorch", "Jupyter", "NumPy"],
    github: "https://github.com/varun2068",
    live: null,
  },
];

function ProjectCard({ project }) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title className="project-card-title">{project.title}</Card.Title>
        <Card.Text className="project-card-desc">{project.description}</Card.Text>
        <div className="project-tech-badges">
          {project.tech.map((t) => (
            <Badge key={t} className="tech-badge">
              {t}
            </Badge>
          ))}
        </div>
      </Card.Body>
      <Card.Footer className="project-card-footer">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          aria-label={`View ${project.title} on GitHub`}
        >
          <FaGithub /> GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View ${project.title} live`}
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </Card.Footer>
    </Card>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          My Recent <strong className="orange">Works</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
