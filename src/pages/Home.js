import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  const [profilImage, setProfilImage] = React.useState(true);

  let classProfilImage = profilImage ? "profile-img" : "";

  console.log(window.innerWidth);

  React.useEffect(() => {
    if (window.innerWidth < 1023) {
      setProfilImage(false);
    }
  });

  return (
    <div className="container">
      <div class="jumbotron text-center position-relative">
        <div class="text-container">
          <h1 className="greetings">Hi There!</h1>
          <h1 className="name">
            I'm <span>Dessi Anwar</span>
          </h1>

          <div class="typewritter">
            <span>
              <Typewriter
                options={{
                  strings: ["I am into Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
        </div>
      </div>

      <div class="introduce">
        <div class="row">
          <div class="col-sm-8">
            <h3 class="mb-5">
              Let Me <span>Introduce</span> My Self
            </h3>
            <p>
              I found myself getting interested in <span>web programming</span> after trying many things to find out what <span>my interest</span> was.
            </p>

            <p>
              Web development and coding processes <span>challenge</span> me to always <span>upgrade</span> and <span>improve</span> my competence and expertise in related fields.
            </p>

            <p>
              In developing Web Application, I usually use <span>Mern Stack</span> and <span>Codeiginiter</span>.{" "}
            </p>
          </div>

          <div class="col-sm-4 d-flex">
            {" "}
            <div class={classProfilImage}></div>
          </div>
        </div>
      </div>

      {/* <div class="form-message">
        <div class="row justify-content-center">
          <div class="">
            <h1 className="text-center ">Contact Me !</h1>
            <div class="contact-line"></div>
          </div>
        </div>

        <div class="row my-5 justify-content-center">
          <div class="col-sm-6 col-m-6  d-flex">
            <img src="email.png" className="email-img" alt="" />
          </div>
          <div class="col-sm-6">
            <div class="form-container ">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Message
                  </label>
                  <input type="text-area" class="form-control" id="exampleInputPassword1" />
                </div>

                <button type="button" class="button-submit mt-3">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;