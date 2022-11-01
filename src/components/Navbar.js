import React from "react";
import "./navbar.css";

const Navbar = () => {
  const [navBG, setNavBG] = React.useState(false);

  window.addEventListener("scroll", function () {
    this.window.scrollY > 20 ? setNavBG(true) : setNavBG(false);
  });

  return (
    <div>
      <div class="header">
        <nav class={navBG ? "navbar navbar-expand-lg navbar-dark fixed-top active" : "navbar navbar-expand-lg navbar-dark fixed-top"}>
          <div class="container ">
            <a class="brandnya" href="#">
              My Portfolio
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto gap-5 ">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <i class="fi fi-rr-home"></i> Home
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fi fi-rr-user"></i> About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fi fi-rr-computer"></i> Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fi fi-rr-document"></i> Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
