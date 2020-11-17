import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Name } from "./components/Name";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Name /> */}
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
