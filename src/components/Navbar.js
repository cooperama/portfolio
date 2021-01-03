import React, { useRef } from "react";
import { Name } from "./Name";
import { navRotation } from "../utils";

export const Navbar = (props) => {
  const navRef = useRef();
  const burgerRef = useRef();

  const navClickHandler = (e) => {
    props.setSection(e.target.id);
  };
  const burgerClickHandler = () => {
    navRef.current.classList.toggle("burger-nav-toggle");
  };
  return (
    <nav className="nav-container">
      <Name nameRef={props.nameRef} />
      <h1 className="name-mobile">
        Amanda <span>Jia</span> Cooper
      </h1>
      <div className="nav-div">
        <a
          className="nav fade-in"
          ref={props.homeRef}
          id="home-nav"
          href="#home"
          onClick={(navRotation, navClickHandler)}
        >
          Home
        </a>
        <a
          className="nav fade-in"
          id="projects-nav"
          href="#projects"
          ref={props.projectsRef}
          onClick={(navRotation, navClickHandler)}
        >
          My Projects
        </a>
        <a
          className="nav fade-in"
          id="about-nav"
          href="#about"
          ref={props.aboutRef}
          onClick={(navRotation, navClickHandler)}
        >
          About Me
        </a>
        <a
          className="nav fade-in"
          id="contact-nav"
          href="#contact"
          ref={props.contactRef}
          onClick={(navRotation, navClickHandler)}
        >
          Contact Me
        </a>
      </div>
      <div className="burger-container" onClick={burgerClickHandler}>
        <div ref={burgerRef} className="burger-menu"></div>
      </div>
      <div onClick={burgerClickHandler} ref={navRef} className="burger-nav">
        <div className="burger-menu-back"></div>
        <a onClick={burgerClickHandler} href="#home" id="home-nav">
          Home
        </a>
        <a onClick={burgerClickHandler} href="#about" id="about-nav">
          About Me
        </a>
        <a onClick={burgerClickHandler} href="#projects" id="projects-nav">
          My Projects
        </a>
        <a onClick={burgerClickHandler} href="#contact" id="contact-nav">
          Contact Me
        </a>
      </div>
      <div ref={props.navBGRef} className="nav-background nav-animation"></div>
    </nav>
  );
};
