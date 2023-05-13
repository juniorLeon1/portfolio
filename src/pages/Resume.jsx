import React from "react";
import "./Resume.css";
import Download from "../components/Resume/Download";

const Resume = () => {
  return (
    <div>
      <div className="resume-info">
        <Download />
        <img
          src={require("../images/Resume.png")}
          alt="resume"
          className="resume"
        />
        <Download />
      </div>
    </div>
  );
};

export default Resume;
