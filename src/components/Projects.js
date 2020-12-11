import React from "react";

import flixr from "../images/flixr.png";
import flixr2 from "../images/flixr2.png";
import flixr3 from "../images/flixr3.png";

import tamagotchi from "../images/tamagotchi.png";
import tamagotchi2 from "../images/tamagotchi2.png";
import tamagotchi3 from "../images/tamagotchi3.png";
import tamagotchi4 from "../images/tamagotchi4.png";

import wayfarer1 from "../images/wayfarer1.png";
import wayfarer2 from "../images/wayfarer2.png";
import wayfarer3 from "../images/wayfarer3.png";
import wayfarer4 from "../images/wayfarer4.png";

import codependent1 from "../images/codependent1.png";
import codependent2 from "../images/codependent2.png";
import codependent3 from "../images/codependent3.png";
import codependent4 from "../images/codependent4.png";

export const Projects = (props) => {
  const imageOverHandler = (e) => {
    if (window.innerWidth > 786) {
      e.target.style.transform = "scale(1.5)";
      e.target.style.zIndex = "3";
    }
  };
  const imageOutHandler = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.zIndex = "1";
  };
  return (
    <div className="projects-container" id="projects">
      <div ref={props.projectsArrowRef} className="arrow">
        <h4>My Projects</h4>
      </div>
      <div className="project-section">
        <div className="project">
          <h3>Flixr</h3>
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
          <div className="external-links">
            <a
              rel="noreferrer"
              target="_blank"
              href="http://flixr-io.herokuapp.com/"
            >
              Experience Flixr
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/cooperama/flixr"
            >
              Visit GitHub <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="images-container">
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={flixr}
              alt="project"
            />
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={flixr2}
              alt="project"
            />
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={flixr3}
              alt="project"
            />
          </div>
        </div>
        <div className="project">
          <h3>co[de]pendent</h3>
          <div>
            <p>
              Co[de]pendent is a place where technologically-inclined people can
              meet and foster their passion together. It's a place to share
              knowledge, resources, and advice with like-minded people who all
              have something to learn and teach.
            </p>
            <p>
              Built with a MERN stack and implementing the FullCalendar library
              to create a scheduling system.
            </p>
          </div>
          <div className="external-links">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/cooperama/codependent"
            >
              Visit GitHub <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="images-container">
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={codependent1}
              alt="project"
            />
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={codependent2}
              alt="project"
            />
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={codependent3}
              alt="project"
            />
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={codependent4}
              alt="project"
            />
          </div>
        </div>
        <div className="project">
          <h3>Wayfarer</h3>
          <div>
            <p>
              Wayfarer is an online community of travelers and drifters, where
              memories are shared and adventures are planned.
            </p>
            <p>Built with Python/Django and PostgreSQL.</p>
          </div>
          <div className="external-links">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/cooperama/Wayfarer"
            >
              Visit GitHub <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="images-container">
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={wayfarer1}
              alt="project"
            />
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={wayfarer2}
              alt="project"
            />
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={wayfarer3}
              alt="project"
            />
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={wayfarer4}
              alt="project"
            />
          </div>
        </div>
        <div className="project">
          <h3>Motchi Gotchi</h3>
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
          <div className="external-links">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://pages.git.generalassemb.ly/cooperama/project_0_tamagotchi/"
            >
              Play with Motchi<i className="fas fa-external-link-alt"></i>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/cooperama/motchi-gotchi"
            >
              Visit GitHub <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="images-container">
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={tamagotchi}
              alt="project"
            />
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={tamagotchi2}
              alt="project"
            />
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={tamagotchi3}
              alt="project"
            />
            <img
              onMouseOut={imageOutHandler}
              onMouseOver={imageOverHandler}
              src={tamagotchi4}
              alt="project"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
