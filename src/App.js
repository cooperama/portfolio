import React, { useRef, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { navRotation, moveDown, moveUp } from "./utils";

import "./styles/app.scss";

const App = () => {
  // State
  const [section, setSection] = useState("home-nav");
  // Refs
  const appRef = useRef();
  const nameRef = useRef();
  // Nav container refs
  const contactRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const homeRef = useRef();
  const navBGRef = useRef();

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
    console.log(topBound);
    if (topBound < -6300) {
      if (section !== "contact-nav") {
        setSection("contact-nav");
      }
    } else if (topBound < -5000) {
      if (section !== "about-nav") {
        setSection("about-nav");
      }
    } else if (topBound < -100) {
      if (section !== "projects-nav") {
        setSection("projects-nav");
      }
    } else {
      if (section !== "home-nav") {
        setSection("home-nav");
      }
    }
  };

  return (
    <div className="App" onWheel={sectionScroll} ref={appRef}>
      <Navbar
        nameRef={nameRef}
        section={section}
        setSection={setSection}
        contactRef={contactRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        homeRef={homeRef}
        navBGRef={navBGRef}
      />
      <Hero
        nameRef={nameRef}
        navBGRef={navBGRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        homeRef={homeRef}
      />
      <Projects projectsArrowRef={projectsArrowRef} />
      <About aboutArrowRef={aboutArrowRef} />
      <Contact contactArrowRef={contactArrowRef} />
    </div>
  );
};

export default App;
