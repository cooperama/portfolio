import React from "react";
import { navScrollHandler } from "../utils";

export const Contact = (props) => {
  return (
    <div className="contact-container" ref={props.contactRef} id="contact">
      <h1>Contact Me</h1>
    </div>
  );
};
