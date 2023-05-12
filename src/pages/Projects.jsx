import React from "react";
import ProjectCards from "../components/Projects/ProjectCards";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <h1 className="projects-title">
        My Recent <span className="special">Works</span>
      </h1>
      <ProjectCards />
    </div>
  );
};

export default Projects;
