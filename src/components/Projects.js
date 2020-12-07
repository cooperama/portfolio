import React from "react";
import { navScrollHandler } from "../utils";
import flixr from "../images/flixr.png";
import flixr2 from "../images/flixr2.png";
import flixr3 from "../images/flixr3.png";
import tamagotchi from "../images/tamagotchi.png";
import tamagotchi2 from "../images/tamagotchi2.png";
import tamagotchi3 from "../images/tamagotchi3.png";
import tamagotchi4 from "../images/tamagotchi4.png";

export const Projects = (props) => {
  return (
    <div className="projects-container" id="projects">
      <div ref={props.projectsArrowRef} className="arrow">
        <h4>My Projects</h4>
        <p className="divider">
          <span>></span>
        </p>
      </div>
      <div className="project-section">
        <div className="project">
          <h3>Flixr</h3>
          <div className="images-container">
            <img src={flixr} alt="project" />
            <img src={flixr2} alt="project" />
            <img src={flixr3} alt="project" />
          </div>
          <div>
            <p>
              Flixr is a cinematic search engine powered by user responses to a
              simple this or that quizlet that generates a personalized playlist
              that matches the user's current mood and interests.
            </p>
            <p>
              Built with MongoDB, Express.js, and Node.js using TMDB's (The
              Movie Database) web API.
            </p>
          </div>
          <div>
            <a href="http://flixr-io.herokuapp.com/">
              Experience Flixr
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a href="https://github.com/cooperama/flixr">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="project">
          <h3>Motchi Gotchi</h3>
          <div className="images-container">
            <img src={tamagotchi} alt="project" />
            <img src={tamagotchi2} alt="project" />
            <img src={tamagotchi3} alt="project" />
            <img src={tamagotchi4} alt="project" />
          </div>
          <div>
            <p>
              Motchi is a Tamagotchi that loves to eat, learn, and play. Caring
              for Motchi is the user's job, which they can do by watching how
              Motchi behaves and monitoring Motchi's stats.
            </p>
            <p>
              This simple game based on the classic 90s Tamagotchi Pet game was
              built with vanilla JavaScript, HTML, and CSS and deployed on
              Github Pages.
            </p>
          </div>
          <div>
            <a href="https://pages.git.generalassemb.ly/cooperama/project_0_tamagotchi/">
              Play with Motchi<i className="fas fa-external-link-alt"></i>
            </a>
            <a href="https://github.com/cooperama/motchi-gotchi">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
