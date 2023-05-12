import React from "react";
import "./ProjButton.css";
import { Link } from "react-router-dom";

const ProjButton = () => {
  return (
    <div>
      <Link to="/projects">
        <button className="project-link">My Projects</button>
      </Link>
    </div>
  );
};

export default ProjButton;
