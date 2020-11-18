import React from "react";
import { navScrollHandler } from "../utils";

export const Projects = (props) => {
  return (
    <div className="projects-container" ref={props.projectsRef} id="projects">
      <h1>My Projects</h1>
    </div>
  );
};
