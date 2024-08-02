import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Martin Ezequiel Williner </span>
            from <span className="purple"> Buenos Aires, Argentina.</span>
            <br />
            I am currently employed as a software developer at IBM.
            <br />
            I completed my studies as a Full Stack web Developer at Digital House Coding School
            and I am currently studying a degree in Cybersecurity at Universidad Nacional Scalabrini Ortiz (UNSO).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Go to the Gym and Crossfit Training
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
