import React from "react";

import flixr from "../assets/images/flixr.png";
import flixr2 from "../assets/images/flixr2.png";
import flixr3 from "../assets/images/flixr3.png";

import tamagotchi from "../assets/images/tamagotchi.png";
import tamagotchi2 from "../assets/images/tamagotchi2.png";
import tamagotchi3 from "../assets/images/tamagotchi3.png";
import tamagotchi4 from "../assets/images/tamagotchi4.png";

import wayfarer1 from "../assets/images/wayfarer1.png";
import wayfarer2 from "../assets/images/wayfarer2.png";
import wayfarer3 from "../assets/images/wayfarer3.png";
import wayfarer4 from "../assets/images/wayfarer4.png";

import codependent1 from "../assets/images/codependent1.png";
import codependent2 from "../assets/images/codependent2.png";
import codependent3 from "../assets/images/codependent3.png";
import codependent4 from "../assets/images/codependent4.png";

import essentials from "../assets/images/essentials.gif";

export const Projects = (props) => {
  return (
    <div className="projects-container" id="projects">
      <div ref={props.projectsArrowRef} className="arrow">
        <h4>My Projects</h4>
      </div>
      <div className="project-section">
        <div className="project">
          <h3>co[de]pendent</h3>
          <div>
            <p className="tech">
              React | MongoDB/Mongoose | Express | Node | bcrypt | JWT | SASS |
              Nodemailer | FullCalendar JS library
            </p>
            <div className="project-info">
              <div className="images-container">
                <img src={codependent1} alt="project" />
                <img src={codependent2} alt="project" />
                <img src={codependent3} alt="project" />
                <img src={codependent4} alt="project" />
              </div>
              <div className="project-description">
                <p>
                  Co[de]pendent is a place where technologically-inclined people
                  can meet and foster their passion together. It's a place to
                  share knowledge, resources, and advice with like-minded people
                  who all have something to learn and teach.
                </p>
                <p>
                  This project was conceptualized, designed, and implemented by
                  me. To create this platform with the level of interactivity I
                  envisioned, I utilized six models created with a Mongoose
                  schema and stored on the MongoDB Atlas cloud database. The
                  most interesting and challlenging part of this project was
                  using a calendar libarary and taking the data created with the
                  methods and property of the library and turning it into usable
                  data for my application.
                </p>
                <div className="external-links">
                  <a
                    className="link-out"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/cooperama/codependent"
                  >
                    Visit GitHub <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <h3>Flixr</h3>
          <div>
            <p className="tech">
              JavaScript | MongoDB/Mongoose | Express | Node | bcrypt | Boostrap
              | OMDB web API
            </p>
            <div className="images-container">
              <img src={flixr} alt="project" />
              <img src={flixr2} alt="project" />
              <img src={flixr3} alt="project" />
            </div>
            <p>
              Flixr is a cinematic search engine powered by user responses to a
              simple this or that quizlet that generates a personalized playlist
              that matches the user's current mood and interests.
            </p>
            <p>
              This project was collaboratively designed and developed by a team
              of two, including myself and{" "}
              <a
                className="link-out"
                href="https://github.com/van-doan"
                rel="noreferrer"
                target="_blank"
              >
                Andy Doan
              </a>
              . The concept was based on my own personal indecision when it came
              to choosing a movie. As such, the implementation of the algorithm
              to determine the results brought back from the API was done by me.
              I also contributed to both front and back-end aspects of the
              application, including making API calls, performing CRUD
              operations, and creating user-facing web pages.
            </p>
          </div>
          <div className="external-links">
            <a
              className="link-out"
              rel="noreferrer"
              target="_blank"
              href="http://flixr-io.herokuapp.com/"
            >
              Experience Flixr
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a
              className="link-out"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/cooperama/flixr"
            >
              Visit GitHub <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="project">
          <h3>Wayfarer</h3>
          <div>
            <p className="tech">Python | Django | PostgreSQL | SASS</p>
            <div className="images-container">
              <img src={wayfarer1} alt="project" />
              <img src={wayfarer2} alt="project" />
              <img src={wayfarer3} alt="project" />
              <img src={wayfarer4} alt="project" />
            </div>
            <p>
              Wayfarer is an online community where fellow travelers can see and
              discuss where they’ve been in a forum-style setting. Users can
              view all posts, add, edit, and delete their own posts, and also
              have full CRUD functionality on comments. Wayfarer is an online
              community of travelers and drifters, where memories are shared and
              adventures are planned.
            </p>
            <p>
              Wayfarer was a project done in collaboration with{" "}
              <a
                className="link-out"
                href="https://github.com/ChristopherZalapa"
                rel="noreferrer"
                target="_blank"
              >
                Christopher Zalapa
              </a>
              ,{" "}
              <a
                className="link-out"
                href="https://github.com/CSimoneCode"
                rel="noreferrer"
                target="_blank"
              >
                Simone Poe
              </a>
              , and{" "}
              <a
                className="link-out"
                href="https://github.com/baezus"
                rel="noreferrer"
                target="_blank"
              >
                Elias Baez
              </a>
              , using GitHub’s Kanban for task management. I played an integral
              role in implementing back-end functionality, and contributed
              greatly to front-end layout and design.
            </p>
          </div>
          <div className="external-links">
            <a
              className="link-out"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/cooperama/Wayfarer"
            >
              Visit GitHub <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="project">
          <h3>Motchi Gotchi</h3>
          <div>
            <p className="tech">JavaScript | HTML5 | CSS3</p>
            <div className="images-container">
              <img src={tamagotchi} alt="project" />
              <img src={tamagotchi2} alt="project" />
              <img src={tamagotchi3} alt="project" />
              <img src={tamagotchi4} alt="project" />
            </div>
            <p>
              Motchi is a Tamagotchi that loves to eat, learn, and play. Caring
              for Motchi is the user's job, which they can do by watching how
              Motchi behaves and monitoring Motchi's stats. This is a simple
              web-based game modeled after the classic 90s Tamagotchi Pet game.
              Using DOM manipulation and vanilla JavaScript, the user can
              interact with the character, affecting the character’s stats in
              order to keep it alive and happy.
            </p>
            <p>
              This was designed and developed independently as my first project
              in the GA’s software engineering immersive course and deployed on
              Github Pages. it was a great opportunity to implement my skills
              with DOM manipulation, keyframes, and CSS transitions.
            </p>
          </div>
          <div className="external-links">
            <a
              className="link-out"
              rel="noreferrer"
              target="_blank"
              href="https://pages.git.generalassemb.ly/cooperama/project_0_tamagotchi/"
            >
              Play with Motchi<i className="fas fa-external-link-alt"></i>
            </a>
            <a
              className="link-out"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/cooperama/motchi-gotchi"
            >
              Visit GitHub <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="project">
          <h3>
            Essentials <i className="fas fa-medal"></i>
          </h3>

          <div>
            <p className="winner">
              <strong>
                General Assembly 2020 Hackathon - Best Overall Winner
              </strong>
            </p>
            <p className="tech">React | Express | Node | MongoDB/Mongoose</p>
            <div className="essentials-div">
              <div>
                <div className="gif-essentials">
                  <img src={essentials} alt="project" />
                </div>
              </div>
              <div>
                <p>
                  Essentials is a mobile app that provides up-to-date
                  information about the in-store availability of 2020's most
                  valuable and coveted items such as toilet paper, face masks,
                  and hand sanitizer.
                </p>

                <p>
                  Developed in collaboration with{" "}
                  <a
                    className="link-out"
                    href="https://github.com/bhowe111"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Brendan Howe
                  </a>{" "}
                  and{" "}
                  <a
                    className="link-out"
                    href="https://github.com/emilieforest"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Emily Forester
                  </a>
                  . UX/UI designed by Siena Tetali, Amelia Muenzberg, Alex
                  Rowly, and Luis Zazueta.
                </p>
                <div className="external-links">
                  <a
                    className="link-out"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/cooperama/essentials"
                  >
                    Visit GitHub <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
