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
          Full stack developer with a background in ESL education over five
          years and in two foreign countries.
        </p>
        <p>
          My student-focused method of teaching translates into a
          client-centered approach, where my soft skills of patience, care, and
          diplomacy are interleaved with my hard skills of software engineering
          and web development in order to create an end product that matches the
          vision of my clients.
        </p>
        <p>
          It is my objective to create professional, engaging, and fluid
          applications that inspire the user and communicate the product through
          seamless function and thoughtful form.
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
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>ReactJS</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
          <ul>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>CRUD</li>
            <li>RESTful Routing</li>
          </ul>
          <ul>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>SASS</li>
            <li>APIs</li>
          </ul>
        </div>
      </div>
      <div className="skills-container">
        <h3>Soft Skills</h3>
        <div>
          <ul>
            <li>Teamwork</li>
            <li>Leadership</li>
            <li>Detail-oriented</li>
            <li>Dependable</li>
            <li>Growth-mindset</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
