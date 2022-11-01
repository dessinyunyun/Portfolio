import React from "react";
import "./footer.css";

const Footer = () => {
  const [profilImage, setProfilImage] = React.useState(true);

  let classProfilImage = profilImage ? "profile-img" : "";

  console.log(window.innerWidth);

  React.useEffect(() => {
    if (window.innerWidth > 1023) {
      setProfilImage(false);
    }
  }, window.innerWidth);

  return (
    <div className="footer-container py-5">
      <div class={classProfilImage}></div>

      <h4 className="text-center mb-4 mt-5">
        You can <span>Find Me</span> on
      </h4>
      <div class="d-flex gap-4 justify-content-center">
        <div class="github kotak">
          <img src="socialmedia/github.png" alt="" />
        </div>
        <div class="twitter kotak">
          {" "}
          <img src="socialmedia/twitter.png" alt="" />
        </div>
        <div class="instagram kotak">
          {" "}
          <img src="socialmedia/instagram.png" alt="" />
        </div>
        <div class="facebook kotak">
          {" "}
          <img src="socialmedia/facebook.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
