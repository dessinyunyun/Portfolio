import React from "react";
import "./about.css";
import { Player } from "@lottiefiles/react-lottie-player";
import SkillData from "./SkillData"

const About = () => {

const skill = SkillData.map(skill => {
 return(  <div class="col-sm-3 col-6 p-3">
  <div class="skill-img">

          <img src={skill.image} alt="" />
  </div>
  </div>)
})

  return (
    <div className="container about">
      <div class="first">
        <div class="row justify-content-center ">
          <div class="col-sm-7 d-flex">
            <div class="about-text m-auto">
              <h1>Hello</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsam, minima sit voluptas quis laboriosam nihil corporis dolor architecto fuga.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsam, minima sit voluptas quis laboriosam nihil corporis dolor architecto fuga.</p>
            </div>
          </div>
          <div class="col-sm-5">
            {/* <img src="animasi.gif" alt="" width={"100%"} /> */}
            <Player src="https://assets3.lottiefiles.com/packages/lf20_es4p9zph.json" className="player" background="transparent" speed={1} style={{ width: "100%", height: "100%" }} loop controls autoplay />
          </div>
        </div>
      </div>

      <div class="second text-center ">
        <h2>
          My <span>Skill</span>{" "}
        </h2>
        <div class="row mt-5 justify-content-center">
      {skill}
        </div>
      </div>
    </div>
  );
};

export default About;
