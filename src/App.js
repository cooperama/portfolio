import React, { useRef, useEffect, useState, Component } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { navScrollHandler, navRotation } from "./utils";

import "./styles/app.scss";

const App = () => {
  const [section, setSection] = useState("home-nav");
  const appRef = useRef();

  // Name container refs
  const nameRef = useRef();
  const nameDivRef = useRef();

  // Nav container refs
  const navDivRef = useRef();
  const contactRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const homeRef = useRef();

  useEffect(() => {
    // Call navRotation according to the section
    if (section === "about-nav") {
      navRotation(aboutRef.current);
    } else if (section === "projects-nav") {
      navRotation(projectsRef.current);
    } else if (section === "contact-nav") {
      navRotation(contactRef.current);
    } else {
      navRotation(homeRef.current);
    }
  }, [section, setSection]);

  const sectionScroll = () => {
    const topBound = appRef.current.getBoundingClientRect().top;

    if (topBound < -2600) {
      if (section !== "contact-nav") {
        setSection("contact-nav");
      }
    } else if (topBound < -1500) {
      if (section !== "projects-nav") {
        setSection("projects-nav");
      }
    } else if (topBound < -50) {
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
    <div className="App" onWheel={sectionScroll} ref={appRef}>
      <Navbar
        section={section}
        setSection={setSection}
        navDivRef={navDivRef}
        nameDivRef={nameDivRef}
        nameRef={nameRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        homeRef={homeRef}
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
