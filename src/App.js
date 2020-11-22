import React, { useRef, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { navRotation, moveDown, moveUp, parallax } from "./utils";

import "./styles/app.scss";

const App = () => {
  // State
  const [section, setSection] = useState("home-nav");
  // Refs
  const appRef = useRef();
  // Nav container refs
  const contactRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const homeRef = useRef();

  const aboutArrowRef = useRef();
  const projectsArrowRef = useRef();
  const contactArrowRef = useRef();

  useEffect(() => {
    // Call navRotation according to the section
    switch (section) {
      case "about-nav":
        navRotation(aboutRef.current);
        moveDown(aboutArrowRef.current);
        moveUp(projectsArrowRef.current);
        break;
      case "projects-nav":
        navRotation(projectsRef.current);
        moveDown(projectsArrowRef.current);
        moveUp(aboutArrowRef.current);
        moveUp(contactArrowRef.current);
        break;
      case "contact-nav":
        navRotation(contactRef.current);
        moveDown(contactArrowRef.current);
        moveUp(projectsArrowRef.current);
        break;
      default:
        navRotation(homeRef.current);
        moveUp(projectsArrowRef.current);
        moveUp(contactArrowRef.current);
        moveUp(aboutArrowRef.current);
    }
  }, [section, setSection]);

  const sectionScroll = () => {
    const topBound = appRef.current.getBoundingClientRect().top;
    const startingHeight = window.innerHeight;
    const windowHeight = appRef.current.getBoundingClientRect().height;
    const scrollDistance = windowHeight - startingHeight;
    // when 3% of the next section is showing, trigger functions
    console.log(window.innerHeight);
    console.log("topBound: ", appRef.current.getBoundingClientRect().top);
    console.log("distance that can be traversed", scrollDistance);
    console.log(startingHeight / windowHeight);
    const scrollAmount = Math.abs(topBound) + startingHeight;
    console.log(scrollAmount);
    console.log((scrollAmount / windowHeight) * 100);
    console.log(
      (appRef.current.childNodes[1].getBoundingClientRect().height /
        scrollDistance) *
        100
    ); // hero /home
    // console.log(
    //   appRef.current.childNodes[2].getBoundingClientRect().height /
    //     scrollDistance
    // ); // about
    // console.log(
    //   appRef.current.childNodes[3].getBoundingClientRect().height /
    //     scrollDistance
    // ); // projects
    // console.log(
    //   appRef.current.childNodes[4].getBoundingClientRect().height /
    //     scrollDistance
    // ); // contact

    if (topBound < -3550) {
      if (section !== "contact-nav") {
        setSection("contact-nav");
      }
    } else if (topBound < -1725) {
      if (section !== "projects-nav") {
        setSection("projects-nav");
      }
    } else if (topBound < -100) {
      if (section !== "about-nav") {
        setSection("about-nav");
      }
    } else {
      if (section !== "home-nav") {
        setSection("home-nav");
      }
    }
  };

  return (
    <div
      className="App"
      onWheel={sectionScroll}
      onMouseMove={parallax}
      ref={appRef}
    >
      <Navbar
        section={section}
        setSection={setSection}
        contactRef={contactRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        homeRef={homeRef}
      />
      <Hero />
      <About aboutArrowRef={aboutArrowRef} />
      <Projects projectsArrowRef={projectsArrowRef} />
      <Contact contactArrowRef={contactArrowRef} />
    </div>
  );
};

export default App;
