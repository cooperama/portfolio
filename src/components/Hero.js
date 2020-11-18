import React from "react";
import { parallax } from "../utils";

export const Hero = (props) => {
  return (
    <div className="hero-container" onMouseMove={parallax} id="home">
      <div data-value="70" className="blob b1"></div>
      <div data-value="50" className="blob b2"></div>
      <div data-value="-60" className="blob b3"></div>
      <div data-value="60" className="blob b4"></div>
      <div data-value="-40" className="blob b5"></div>
      <div data-value="-30" className="blob b6"></div>
    </div>
  );
};
