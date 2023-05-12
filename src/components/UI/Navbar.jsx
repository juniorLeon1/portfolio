import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="logo">Junior Leon</h1>

      <ul className="link-box">
        <li className="nav-links home-link">
          <Link to="/" className="nav-title">Home</Link>
        </li>
        <li className="nav-links projects-link">
          <Link to="/projects" className="nav-title">Projects</Link>
        </li>
        <li className="nav-links about-link">
          <Link to="/about" className="nav-title">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
