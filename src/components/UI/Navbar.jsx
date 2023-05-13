import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-logo">
        <h1 className="logo">JL.</h1>
      </Link>

      <ul className="link-box">
        <li className="nav-links home-link">
          <Link to="/" className="nav-title">
            <i class="fa-solid fa-house"></i> Home
          </Link>
        </li>

        <li className="nav-links projects-link">
          <Link to="/projects" className="nav-title">
            <i class="fa-solid fa-code"></i> Projects
          </Link>
        </li>

        <li className="nav-links resume-link">
          <Link to="/resume" className="nav-title">
            <i class="fa-solid fa-file-pdf"></i> Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
