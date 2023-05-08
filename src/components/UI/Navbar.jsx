import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  return (
    <nav>
      <div className="background-icons">
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-linkedin-in"></i>
      </div>

      <ul className="nav-links">
        <li className="home-link">
          <Link to="/">Home</Link>
        </li>
        <li className="about-link">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
