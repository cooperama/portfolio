import React from "react";

export const Name = (props) => {
  return (
    <div ref={props.nameRef} className="name-container">
      <h1 className="fade-in">Amanda</h1>
      <h1 className="fade-in name">Jia</h1>
      <h1 className="fade-in">Cooper</h1>
    </div>
  );
};
