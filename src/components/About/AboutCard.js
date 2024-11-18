import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karmadi Adham </span>
            from <span className="purple"> Salé, Morocco.</span>
            <br />
            I am currently in my final year as Software Engineer student at ENSET Mohammedia.
            <br />
            My academic journay started with FST Mohammedia where i obtained my Bac+2 degree which allowed to integret ENSET Mohammedia to pursue my engineering studies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> BodyBuilding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Adham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
