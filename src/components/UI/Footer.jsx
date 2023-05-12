import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <h2 className="updated">Last Updated:</h2>

      <div className="background-icons">
        <Link to="https://github.com/juniorLeon1" target="_blank">
          <i className="fa-brands fa-github footer-icon"></i>
        </Link>

        <Link to="https://www.linkedin.com/in/nleonjr/" target="_blank" className="linkedin-icon">
          <i className="fa-brands fa-linkedin-in footer-icon"></i>
        </Link>

        <i className="fa-brands fa-twitter footer-icon"></i>
      </div>
    </footer>
  );
};

export default Footer;
