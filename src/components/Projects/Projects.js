import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import biblio from "../../Assets/Projects/biblio.png";
import pi from "../../Assets/Projects/PI.png";
import parkinson from "../../Assets/Projects/parkinsons.jpg";
import powerBi from "../../Assets/Projects/powerbi.png";
import pnsm from "../../Assets/Projects/pnsm.png";

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
              imgPath={biblio}
              isBlog={true}
              GitHub={true}
              title="Library Management System"
              description="
The project consists of the design and implementation of a computerized library management system for ONEE BO, allowing employees to borrow or reserve books via a user-friendly interface. Librarians and administrators have a centralized dashboard to efficiently manage loans, books, categories, and comments. A key feature is the daily automatic check of loans, which identifies overdue books at noon and places the employees concerned on a blacklist, preventing them from borrowing new books until the overdue books are returned.              "
              ghLink="https://github.com/adhamkar/IntershipPFA.git"
              demoLink="https://docs.google.com/document/d/1AAoIHmh646K7tH3ICGgCbB8EeN6oXWXJ/edit?usp=sharing&ouid=114691271996189662815&rtpof=true&sd=true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pi}
              isBlog={true}
              GitHub={true}
              title="MindBoost"
              description="
              Design and create a web platform, named 'MindBoost', dedicated to psychological support for people in difficulty, adapting to the diversity of human needs. This platform offers various services, such as a conversational agent for instant interaction, an anonymous or identified sharing space to exchange experiences, booking therapeutic sessions with a professional, a notepad for personal expression with backup, and a To-Do List to organize daily, weekly or monthly tasks, in order to provide comprehensive and quality support.
              "
              ghLink="https://github.com/adhamkar/MindBoost_PI.git"
             demoLink="https://drive.google.com/file/d/1oEsOL3qNZkiOH5OzeZREVeY_kKlF47ly/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkinson}
              isBlog={true}
              GitHub={true}
              title="Parkinson's Predection"
              description="
              Dvelop a powerful machine learning model for the early detection of Parkinson's disease from biomedical data, particularly from wearable sensors and traditional medical examinations. The project aims to identify the most relevant features, design and train robust models (neural networks and supervised algorithms), and evaluate their performance with advanced metrics such as F-score and ROC curve. It also seeks to understand the discriminatory biomarkers identified, while providing a user-friendly interface for healthcare professionals, with the aim of facilitating early diagnosis and improving patient care.              "
              ghLink="https://github.com/adhamkar/Machine-learning-project.git"
              demoLink="https://drive.google.com/file/d/1kvkzf8lWYRdXSON1xYf7HBf9BOGW_p6t/view?usp=sharing"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powerBi}
              Bi={true}
              title="Sales Performance"
              description="
              A project to visualize sales performance across different regions of the world using a Kaggle dataset, exploring trends, sales figures, and regional performance based on products sold              "
             demoLink="https://drive.google.com/file/d/1hOPbeFVO6DkjGomSqaFe_QlE3oJoHVRq/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pnsm}
              isBlog={true}
              GitHub={true}
              title="PNSM"
              description="
              The National Mobile Health Platform (PNSM) project aims to optimize and improve the provision of care in rural areas by enabling strategic planning and collaborative reporting between the various health stakeholders (Health Centers, Provincial and Regional Directorates and the Population Directorate). Intended for the staff of the Ministry of Health, this digital platform complies with established standards and allows users to authenticate, enter, modify or delete patient data, and generate PDF reports. The main objective is to facilitate the collection and sharing of information in real time to ensure equitable and effective care in these regions.              "
              ghLink="https://github.com/adhamkar/intership-pnsm.git"
              demoLink="
              https://drive.google.com/file/d/1z-C50Vqha787grfudU60Qx6hO1KvYByW/view?usp=sharing"
            />
          </Col>

     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
