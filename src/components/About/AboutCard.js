import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Clyde Charles Coelho </span>
            from <span className="purple"> Mangalore, India.</span>
            <br />
            I am currently pursuing MCA at St. Joseph Engineering College Mangalore. 
            I have completed my BCA degree in at St. Aloysius College
            Mangalore.
            I am a dedicated and passionate Full-Stack Developer with a strong background in building and maintaining modern web applications. With a solid foundation in the MERN stack (MongoDB, Express.js, React, and Node.js), I specialize in creating scalable, high-performance web applications that deliver exceptional user experiences. From crafting intuitive front-end interfaces to developing robust back-end systems, I enjoy the challenge of bringing innovative solutions to life
            My skill set includes designing responsive user interfaces, optimizing database performance, and building secure, RESTful APIs. I’m always seeking to enhance my knowledge, stay current with emerging technologies, and refine my coding practices.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports (Cricket and Football)
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
