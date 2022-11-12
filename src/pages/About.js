import React from "react";
import "./about.css";
import { Player } from "@lottiefiles/react-lottie-player";

const About = () => {
  return (
    <div className="container about">
      <div class="first">
        <div class="row justify-content-center ">
          <div class="col-sm-7 d-flex">
            <div class="about-text m-auto">
              <h1 className="text-start">Hello</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsam, minima sit voluptas quis laboriosam nihil corporis dolor architecto fuga.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsam, minima sit voluptas quis laboriosam nihil corporis dolor architecto fuga.</p>
            </div>
          </div>
          <div class="col-sm-5">
            {/* <img src="animasi.gif" alt="" width={"100%"} /> */}
            <Player src="https://assets3.lottiefiles.com/packages/lf20_es4p9zph.json" className="player" background="transparent" speed={1} style={{ width: "400px", height: "400px" }} loop controls autoplay />
          </div>
        </div>
      </div>

      <div class="second text-center ">
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
