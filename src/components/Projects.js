import React from "react";
import { navScrollHandler } from "../utils";

export const Projects = (props) => {
  return (
    <div className="projects-container" id="projects">
      <h1>My Projects</h1>
      <div className="project">
        <img src="https://www.unsplash.it/300" alt="project" />
        <h4>Project Name</h4>
        <p>
          Project description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptas voluptatem cum consequuntur dolorem sunt laudantium
          deleniti vitae modi. Dolorum, impedit.
        </p>
      </div>
      <div className="project">
        <img src="https://www.unsplash.it/300" alt="project" />
        <h4>Project Name</h4>
        <p>
          Project description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptas voluptatem cum consequuntur dolorem sunt laudantium
          deleniti vitae modi. Dolorum, impedit.
        </p>
      </div>
    </div>
  );
};
