import React from "react";
import { navScrollHandler } from "../utils";

export const About = (props) => {
  return (
    <div className="about-container" ref={props.aboutRef} id="about">
      <div className="image-div">
        <img src="https://www.unsplash.it/400/400" alt="" />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
        consectetur ratione sed aliquam corporis cum quibusdam aliquid, totam
        harum? Iure accusantium enim recusandae non eaque tenetur ducimus, natus
        dolorum saepe facilis voluptatum aperiam quos repellendus ab cupiditate?
        Officia magni adipisci tenetur, illum maiores ut pariatur fugiat velit
        laborum, voluptas autem itaque sed debitis. Nobis, dignissimos ab?
        Aspernatur perspiciatis et nam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        error animi, culpa laboriosam sit sapiente quisquam. Officia
        reprehenderit sapiente rem aliquid nobis atque minima modi placeat aut
        ut, nesciunt similique alias adipisci magnam omnis consectetur deleniti
        eveniet quam totam dolor illo veniam impedit? Asperiores in unde fugit
        magnam inventore.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
        necessitatibus praesentium eaque obcaecati ipsum reiciendis. Aliquam
        inventore repellat dolore libero dignissimos omnis, veritatis
        repudiandae ab voluptas quod voluptatibus, consectetur rem!
      </p>
      <div className="skills-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          odit.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <div className="soft-skills-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          odit.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
    </div>
  );
};
