import React from "react";
import { Name } from "./Name";
import { navRotation } from "../utils";

export const Navbar = (props) => {
  const navClickHandler = (e) => {
    props.setSection(e.target.id);
  };
  return (
    <nav className="nav-container">
      <Name />
      <div className="nav-div">
        <p className="back-arrow">
          <span>>>></span>
        </p>
        <a
          className="nav"
          ref={props.homeRef}
          id="home-nav"
          href="#home"
          onClick={(navRotation, navClickHandler)}
        >
          Home
        </a>
        <a
          className="nav"
          id="about-nav"
          href="#about"
          ref={props.aboutRef}
          onClick={(navRotation, navClickHandler)}
        >
          About Me
        </a>
        <a
          className="nav"
          id="projects-nav"
          href="#projects"
          ref={props.projectsRef}
          onClick={(navRotation, navClickHandler)}
        >
          My Projects
        </a>
        <a
          className="nav"
          id="contact-nav"
          href="#contact"
          ref={props.contactRef}
          onClick={(navRotation, navClickHandler)}
        >
          Contact Me
        </a>
      </div>
      <div className="burger-menu"></div>
    </nav>
  );
};
