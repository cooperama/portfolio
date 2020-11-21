import React from "react";

export const Name = (props) => {
  return (
    <div className="name-container" ref={props.nameDivRef}>
      <h1>Amanda</h1>
      <h1 className="name" ref={props.NameRef}>
        Jia
      </h1>
      <h1>Cooper</h1>
    </div>
  );
};
