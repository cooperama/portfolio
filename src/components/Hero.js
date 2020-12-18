import React, { useRef } from "react";

export const Hero = (props) => {
  const heroTextRef = useRef();
  const heroTextRef2 = useRef();
  const heroTextRef3 = useRef();
  const heroTextRef4 = useRef();
  const heroTextRef5 = useRef();
  const skipHandler = () => {
    props.navBGRef.current.classList.remove("nav-animation");
    const text = [].concat(
      heroTextRef.current,
      heroTextRef2.current,
      heroTextRef3.current,
      heroTextRef4.current,
      heroTextRef5.current
    );
    text.forEach((line) => {
      line.classList.remove(
        "intro-text",
        "intro-text-2",
        "intro-text-3",
        "intro-text-4",
        "intro-text-5"
      );
    });
  };
  return (
    <div className="hero-container" id="home">
      <div className="hero-text">
        <h2 className="text-h2">
          <span ref={heroTextRef} className="intro-text"></span>Hi, I'm Jia.
        </h2>
        <h2 className="text-h2">
          <span ref={heroTextRef2} className="intro-text intro-text-2"></span>
          Full Stack Web Developer.
        </h2>
        <h2 className="text-h2">
          <span ref={heroTextRef3} className="intro-text intro-text-3"></span>
          Software Engineer.
        </h2>
        <h2 className="text-h2">
          <span ref={heroTextRef4} className="intro-text intro-text-4"></span>
          Former Teacher.
        </h2>
        <h2 className="text-h2">
          <span ref={heroTextRef5} className="intro-text intro-text-5"></span>
          Forever Learner.
        </h2>
      </div>
      <button onClick={skipHandler} className="skip-intro">
        skip intro
      </button>
    </div>
  );
};
