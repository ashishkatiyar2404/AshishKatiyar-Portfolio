import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VL from "../../Assets/Projects/VL.png";
import Ecom from "../../Assets/Projects/Ecom.png";
import notes from "../../Assets/Projects/notes.png";
import extension from "../../Assets/Projects/extension.png";
import cl2 from "../../Assets/Projects/cl2.png";

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
              imgPath={VL}
              isBlog={false}
              title="Video Library - WaveLib"
              description="A frontEnd Naruto video library is created with an intention to provide Naruto video resources at one point. Features: Authentication, filter video by categories, like/dislike video, add to watch later, history, create palylist and playlist management."
              ghLink="https://github.com/ashishkatiyar2404/react-video-lib"
              demoLink="https://anime-stream-lib.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecom}
              isBlog={false}
              title="E-Commerce Website"
              description="WaveDeal is an online store to Music instruments. Maintaining global state using context and reducers. It has wide range of categories from Piano to drum.features: authentication, filter on basis of rating,categories,price, add to wishlist,add to cart. "
              ghLink="https://github.com/ashishkatiyar2404/Music-ECom-React"
              demoLink="https://wavedeal-e-com.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Notes Taking App"
              description="Built a Notes Taking application to help in your daily task. Single platform to track the progress of all the notes, status of each notes with due dates. Making user's work
              easier. Stack: ReactJS, React Router v6, React Hooks.
              "
              ghLink="https://github.com/ashishkatiyar2404/notes-taking-app-react"
              demoLink="https://wave-notes.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={extension}
              isBlog={false}
              title="Chrome Extension"
              description="Built a Extension application to help taking to-do List and
              help in your daily task. Achieve your goals faster and more consistently with your
              own personal dashboard. Featuring to-do"
              ghLink="https://github.com/ashishkatiyar2404/extension-react"
              demoLink="https://extensionwave.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cl2}
              isBlog={false}
              title="WaveUI - Component Library"
              description="This component library provides you styled component which are fully responsive .If you have used bootstrap or tailwind before this component library will seems very much comfortable ."
              ghLink="https://github.com/ashishkatiyar2404/CL-UI"
              demoLink="https://u-eye-kit.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
