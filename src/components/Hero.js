import React from "react";
import { parallax } from "../utils";

export const Hero = (props) => {
  return (
    <div className="hero-container" onMouseMove={parallax} id="home">
      <div data-value="1" className="blob b1"></div>
      <div data-value="2" className="blob b2"></div>
      <div data-value="3" className="blob b3"></div>
      <div data-value="4" className="blob b4"></div>
      <div data-value="5" className="blob b5"></div>
      <div data-value="6" className="blob b6"></div>
      <div data-value="-1" className="blob b7"></div>
      <div data-value="-2" className="blob b8"></div>
      <div data-value="-3" className="blob b9"></div>
      <div data-value="-4" className="blob b10"></div>
      <div data-value="-5" className="blob b11"></div>
      <div data-value="-6" className="blob b12"></div>
      <div className="hero-text">
        <h3>
          Hi, I'm <span className="name-position">Jia</span>.
        </h3>
        <h3>Full Stack Web Developer.</h3>
        <h3>Software Engineer.</h3>
        <h3>Former Teacher.</h3>
        <h3>Forever Learner.</h3>
      </div>
    </div>
  );
};
