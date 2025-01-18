import React from "react";
import Card from "react-bootstrap/Card";
import { VscDebugBreakpointFunctionUnverified } from "react-icons/vsc";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahsan Farooq </span>
            from <span className="purple"> London, United Kingdom.</span>
            <br />I am a Software Engineer with 3 years of Professional Experience.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <VscDebugBreakpointFunctionUnverified /> Games
            </li>
            <li className="about-activity">
              <VscDebugBreakpointFunctionUnverified /> Movies
            </li>
            <li className="about-activity">
              <VscDebugBreakpointFunctionUnverified /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Ahsan Farooq</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
