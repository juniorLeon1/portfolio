import React from "react";
import { ProjectArray } from "./ProjectArray";
import "./ProjectCards.css";
import Button from "./Button";

const ProjectCards = () => {
  return (
    <div className="cards-container">
      {ProjectArray.map((info) => {
        return (
          <div className="card" key={info.id}>
            <img src={info.img} alt={info.title} className="project-preview" />
            <div className="text">
              <h2 className="project-name">{info.title}</h2>
              <p className="project-desc">{info.desc}</p>
            </div>
            <div className="buttons">
              <Button
                values={{
                  url: info.github,
                  icon: <i className="fa-brands fa-github" />,
                  title: "Github",
                }}
              />

              <Button
                values={{
                  url: info.deployed,
                  icon: <i class="fa-solid fa-globe"></i>,
                  title: "Demo",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCards;
