import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <h2 className="updated">Last Updated:</h2>

      <div className="footer-icons">
        <Link
          to="https://github.com/juniorLeon1"
          target="_blank"
          className="icons-link"
        >
          <i className="fa-brands fa-github github"></i>
        </Link>

        <Link
          to="https://www.linkedin.com/in/nleonjr/"
          target="_blank"
          className="icons-link"
        >
          <i className="fa-brands fa-linkedin-in linkedin"></i>
        </Link>

        <Link
          to="https://www.linkedin.com/in/nleonjr/"
          target="_blank"
          className="icons-link"
        >
          <i className="fa-brands fa-twitter twitter"></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
