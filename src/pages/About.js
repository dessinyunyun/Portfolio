import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="container about">
      <div class="first">
        <div class="row justify-content-center ">
          <div class="col-sm-7">
            <h1>Hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsam, minima sit voluptas quis laboriosam nihil corporis dolor architecto fuga.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsam, minima sit voluptas quis laboriosam nihil corporis dolor architecto fuga.</p>
          </div>
          <div class="col-sm-5">
            <img src="animasi.gif" alt="" width={"100%"} />
          </div>
        </div>
      </div>

      <div class="second text-center">
        <h2>
          My <span>Skill</span>{" "}
        </h2>
        <div class="row">
          <div class="col-12"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
