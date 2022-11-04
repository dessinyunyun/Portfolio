import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navBG, setNavBG] = React.useState("");
  console.log(window.innerWidth);

  const [phoneMode, setPhoneMode] = React.useState();

  const [phoneNavLink, setPhoneNavLink] = React.useState(false);
  console.log(phoneMode);

  // const [navPhone, setNavPhone] = React.useState("navbar navbar-expand-lg navbar-dark");

  const navbarToggler = (e) => {
    console.log(e);
    if (navBG == "navbar navbar-expand-lg navbar-dark fixed-top") {
      setNavBG("navbar navbar-expand-lg navbar-dark phone fixed-top");
      setPhoneNavLink(true);
    } else {
      setNavBG("navbar navbar-expand-lg navbar-dark fixed-top");
      setPhoneNavLink(false);
    }
  };

  console.log(navBG);
  console.log(window.innerWidth);

  const navBgSet = () => {
    if (window.innerWidth < 1023) {
      setNavBG("navbar navbar-expand-lg navbar-dark fixed-top");
    } else {
      setNavBG("navbar navbar-expand-lg navbar-dark fixed-top");
      window.addEventListener("scroll", function () {
        this.window.scrollY > 20 ? setNavBG("navbar navbar-expand-lg navbar-dark fixed-top active") : setNavBG("navbar navbar-expand-lg navbar-dark fixed-top");
      });
    }
  };

  React.useEffect(() => {
    navBgSet();
    if (window.innerWidth < 1024) {
      setPhoneMode(true);
    } else {
      setPhoneMode(false);
    }
  }, []);

  return (
    <div>
      <div class="header">
        <nav class={navBG}>
          <div class="container nav-container">
            <a class="brandnya" href="#">
              My Portfolio
            </a>
            <button class="navbar-toggler" onClick={navbarToggler} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto gap-5 ">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    <p data-bs-toggle={phoneMode ? "collapse" : ""} data-bs-target={phoneMode ? "#navbarNav" : ""} className="m-auto">
                      <i class="fi fi-rr-home"></i> Home
                    </p>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    <p data-bs-toggle={phoneMode ? "collapse" : ""} data-bs-target={phoneMode ? "#navbarNav" : ""}>
                      <i class="fi fi-rr-user"></i> About
                    </p>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    <p data-bs-toggle={phoneMode ? "collapse" : ""} data-bs-target={phoneMode ? "#navbarNav" : ""}>
                      <i class="fi fi-rr-computer"></i> Projects
                    </p>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    <p data-bs-toggle={phoneMode ? "collapse" : ""} data-bs-target={phoneMode ? "#navbarNav" : ""}>
                      <i class="fi fi-rr-document"></i> Resume
                    </p>
                  </Link>
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
