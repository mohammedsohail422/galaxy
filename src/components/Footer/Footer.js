import React from "react";
import { Link } from "react-router-dom";
import fb from "../../assests/fb.png";
import insta from "../../assests/insta.png";
import twitter from "../../assests/twitter.png";

import "./Footer.css";

const Footer = () => {
  const social = [fb, insta, twitter];

  return (
    <>
      <footer>
        <h1>GLX TRVL</h1>
        <div className="links">
          <h3>Useful Links</h3>
          <div className="link">
            <Link to="/">Home</Link>
            <Link to="traing">Training</Link>
            <Link to="pricing">Pricing</Link>
            <Link to="contact">Contact</Link>
          </div>
        </div>
        <div className="social">
          {social.map((item) => {
            return <img src={item} alt="" />;
          })}
        </div>
      </footer>
    </>
  );
};

export default Footer;
