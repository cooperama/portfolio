import React from "react";
import resume from "../assets/JiaCooper_2020.pdf";
import teach from "../assets/images/teach1.jpg";
import teach2 from "../assets/images/teach2.jpeg";
import monkey from "../assets/images/monkey3.jpg";

export const About = (props) => {
  return (
    <div className="about-container" id="about">
      <div ref={props.aboutArrowRef} className="arrow">
        <h4>About Me</h4>
      </div>
      <div className="personal-blurb">
        <p className="blurb-heading">
          Teacher-turned-developer, traveler-turned-hermit.
        </p>
        <div className="blurb-div">
          <img src={teach} alt="teaching" />
          <div>
            <p>
              My background as a teacher instilled me with the patience,
              empathy, and tact to effectively communicate with a diverse range
              of people. The grit, compassion, and growth-mindset I taught to
              and employed with my students are qualities that enable me to
              develop software that is impactful, meaningful, and functional.
            </p>
          </div>
        </div>
        <div className="blurb-div">
          <div>
            <p>
              My experience living and working abroad has inspired me to be
              resourceful, adaptive, and persistent. Meeting and learning about
              people from backgrounds so different from my own impressed upon me
              the importance of being open-minded and humble. Result-oriented,
              dedicated, and proactive, I'm always ready to take initiative.
            </p>
          </div>
          <img src={monkey} alt="monkey" />
        </div>
        <div className="blurb-div">
          <img src={teach2} alt="teaching" />
          <div>
            <p>
              I strive to develop software that has a meaningful impact on the
              way people live, interact with, and understand each other. I
              strive to use my skills to build bridges, close divides, and
              improve the lived experiences of people through technological
              advancement and carefully crafted software.
            </p>
          </div>
        </div>
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
