import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nike from "../../Assets/Projects/shoe.png";
import vrs from "../../Assets/Projects/vrs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My<strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of my Projects which i have created and working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nike}
              isBlog={false}
              title="Nike Clone Webiste"
              description="Nike Shoes Clone Website using HTML CSS. Just Created for Fun 😗"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vrs}
              isBlog={false}
              title="Vehicle Rental System"
              description="A Vehicle Rental System is a web-based application designed to facilitate the process of renting vehicles such as cars, bikes, or vans. This system allows users to browse available vehicles, book rentals, manage reservations, and process payments. Admins can manage the vehicle fleet, monitor rental activities, and handle customer inquiries. The system aims to streamline the vehicle rental process, providing an efficient and user-friendly platform for both customers and service providers. The project typically includes user authentication, booking management, vehicle inventory tracking, and payment integration."
              ghLink="#"
              demoLink="#"
            />
          </Col>


        

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
