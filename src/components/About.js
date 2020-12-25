import React from "react";
import resume from "../assets/JiaCooper_Resume.pdf";

export const About = (props) => {
  return (
    <div className="about-container" id="about">
      <div ref={props.aboutArrowRef} className="arrow">
        <h4>About Me</h4>
      </div>
      <div className="personal-blurb">
        <p>
          Result-oriented, dedicated, and proactive software developer, with
          extensive overseas working experience as an educator in two foreign
          countries. Effective communication skills combined with patience,
          empathy, and tact allow for fluid collaboration and fast resolution of
          tasks and problems. Utilizes grit, compassion, and a growth-mindset to
          develop software that is impactful, meaningful, and functional.
        </p>
        <p>
          <a className="resume" href={resume} rel="noreferrer" target="_blank">
            My Resume
          </a>
        </p>
      </div>
      <div className="skills-container">
        <h3>Hard Skills</h3>
        <div>
          <ul>
            <li>HTML5/CSS3</li>
            <li>JavaScript</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
          <ul>
            <li>Mongoose</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>CRUD</li>
            <li>MVC</li>
            <li>RESTful Routing</li>
            <li>APIs</li>
          </ul>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>SASS</li>
            <li>APIs</li>
            <li>OOP</li>
          </ul>
        </div>
      </div>
      <div className="skills-container">
        <h3>Soft Skills</h3>
        <div>
          <ul>
            <li>Result-oriented</li>
            <li>Analytical</li>
            <li>Leadership</li>
            <li>Detail-oriented</li>
            <li>Innovative</li>
          </ul>
          <ul>
            <li>Cooperative</li>
            <li>Collaborative</li>
            <li>Resourceful</li>
            <li>Dependable</li>
            <li>Responsible</li>
          </ul>
          <ul>
            <li>Flexible</li>
            <li>Patient</li>
            <li>Empathetic</li>
            <li>Compassionate</li>
            <li>Growth-oriented</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
