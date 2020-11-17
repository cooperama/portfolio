import React from "react";
import { Name } from "./Name";

export const Navbar = (props) => {
  // Rotate nav and name containers
  const navClickHandler = (e) => {
    const container = e.target.parentElement;
    // Unrotate rotated navs
    for (let child of container.children) {
      child.classList.remove("selectedLink");
    }
    // Handle Home button click
    if (e.target.innerText === "Home") {
      container.classList.remove("rotatedRight");
      container.parentElement.children[0].classList.remove("rotatedLeft");
      container.parentElement.children[0].children[1].classList.remove(
        "centered"
      );
      return;
    }
    // Handle other Nav clicks
    container.classList.add("rotatedRight");
    e.target.classList.add("selectedLink");
    container.parentElement.children[0].classList.add("rotatedLeft");
    container.parentElement.children[0].children[1].classList.add("centered");
  };
  return (
    <nav className="nav-container">
      {/* <div className="burger-menu"></div> */}
      <Name />
      <div className="nav-div">
        <a className="nav" href="#home" onClick={navClickHandler}>
          Home
        </a>
        <a className="nav" href="#about" onClick={navClickHandler}>
          About Me
        </a>
        <a className="nav" href="#projects" onClick={navClickHandler}>
          My Projects
        </a>
        <a className="nav" href="#contact" onClick={navClickHandler}>
          Contact Me
        </a>
      </div>
    </nav>
  );
};
