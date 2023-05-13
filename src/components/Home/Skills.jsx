import React from "react";
import "./Skills.css";

const Skills = () => {
  const techstack = [
    <i class="fa-brands fa-html5"></i>,
    <i class="fa-brands fa-css3"></i>,
    <i class="fa-brands fa-git-alt"></i>,
    <i class="fa-brands fa-square-js"></i>,
    <i class="fa-brands fa-node"></i>,
    <i class="fa-brands fa-react"></i>,
    <img src={require("../../images/mysql.png")} alt="mysql" />,
  ];

  return (
    <div className="skillset-container">
      <h1 className="skill-title">
        MY <span className="special">GROWING SKILLSET</span>
      </h1>
      <div className="skillset">
        {techstack.map((symbols) => {
          return <div className="languages">{symbols}</div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
