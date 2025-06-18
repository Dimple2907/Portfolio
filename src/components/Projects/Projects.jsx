import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ebirth from "../../Assets/Projects/online-e-bieth.jpg";
import meanStack from "../../Assets/Projects/mean-stack.png";
import airbnbClone from "../../Assets/Projects/airbnb-clone.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <Row style={{ justifyContent: "center" }} className="project-row">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnbClone}
              isBlog={false}
              title="Airbnb Clone"
              description="A full-featured Airbnb clone application showcasing property listings, booking management, and user interactions. Implemented features include user authentication, property search with filters, interactive maps integration, image upload functionality, booking system with real-time availability, and user reviews. Built using Node.js, Express.js, MongoDB, and EJS templating for dynamic content rendering."
              ghLink="https://github.com/Dimple2907/Airbnb"
              demoLink="https://airbnb-project-rvpt.onrender.com/listings"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebirth}
              isBlog={false}
              title="Online-E-Birth"
              description="A comprehensive web application for digital birth registration and certificate management. Features include secure user authentication, digital form submission for birth registration, admin dashboard for verification processes, and automated certificate generation. Built using PHP Technology"
              ghLink="https://github.com/Dimple2907/Online-E-Birth"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meanStack}
              isBlog={false}
              title="MEAN Stack Application"
              description="A full-stack web application leveraging the MEAN stack (MongoDB, Express.js, Angular, and Node.js). Features include robust user authentication, complete CRUD operations, responsive design for all devices, real-time data updates, and RESTful API architecture. Implemented with best practices for scalability and maintainability."
              ghLink="https://github.com/Dimple2907/MEAN"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
