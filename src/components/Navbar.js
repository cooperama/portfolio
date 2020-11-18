import React from "react";
import { Name } from "./Name";
import { navClickHandler } from "../utils";

export const Navbar = (props) => {
  return (
    <nav className="nav-container">
      <Name />
      <div className="nav-div">
        <a className="nav" id="home-nav" href="#home" onClick={navClickHandler}>
          Home
        </a>
        <a
          className="nav"
          id="about-nav"
          href="#about"
          onClick={navClickHandler}
        >
          About Me
        </a>
        <a
          className="nav"
          id="projects-nav"
          href="#projects"
          onClick={navClickHandler}
        >
          My Projects
        </a>
        <a
          className="nav"
          id="contact-nav"
          href="#contact"
          onClick={navClickHandler}
        >
          Contact Me
        </a>
      </div>
      <div className="burger-menu"></div>
    </nav>
  );
};
