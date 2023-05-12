import React from "react";
import "./Icons.css";
import { Link } from "react-router-dom";

const Icons = () => {
  return (
    <div className="icons">
      <Link
        to="https://github.com/juniorLeon1"
        target="_blank"
        className="links"
      >
        <i className="fa-brands fa-github main-icon"></i>
      </Link>

      <Link
        to="https://www.linkedin.com/in/nleonjr/"
        target="_blank"
        className="links"
      >
        <i className="fa-brands fa-linkedin-in main-icon"></i>
      </Link>

      <Link
        to="https://www.linkedin.com/in/nleonjr/"
        target="_blank"
        className="links"
      >
        <i className="fa-brands fa-twitter main-icon"></i>
      </Link>
    </div>
  );
};

export default Icons;
