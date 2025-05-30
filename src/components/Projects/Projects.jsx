import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ebirth from "../../Assets/Projects/online-e-bieth.jpg";
import meanStack from "../../Assets/Projects/mean-stack.png";
import airbnbClone from "../../Assets/Projects/airbnb-clone.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

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

         

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
