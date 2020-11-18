import React, { useRef, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { navScrollHandler } from "./utils";

import "./styles/app.scss";

function App() {
  // const [topBound, setTopBound] = useState(0);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const appRef = useRef(null);
  // Need to keep track of top position of each container. put in state?
  // ORRRRR I could keep track of just ONE, and switch the nav according to that one number
  const sectionScroll = () => {
    // setTopBound(appRef.current.getBoundingClientRect().top);
    const topBound = appRef.current.getBoundingClientRect().top;
    // console.log("topBound: ", topBound);
    navScrollHandler(topBound);
  };
  return (
    <div className="App" onWheel={sectionScroll} ref={appRef}>
      <Navbar />
      <Hero homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default App;
