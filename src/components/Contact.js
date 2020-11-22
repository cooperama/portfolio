import React from "react";

export const Contact = (props) => {
  return (
    <div className="contact-container" id="contact">
      <div ref={props.contactArrowRef} className="arrow">
        <h4>Contact Me</h4>
        <p className="divider">
          <span>></span>
        </p>
      </div>
      <div className="contact-div">
        <div>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-github"></i>
          <i className="far fa-envelope"></i>
        </div>
        <div>
          <p>
            <a href="https://www.linkedin.com/in/jia-amanda/">LinkedIn</a>
          </p>
          <p>
            <a href="https://github.com/cooperama">github</a>
          </p>
          <p>cooperama.8@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
