import React from "react";
import { ProjectArray } from "./ProjectArray";
import "./ProjectCards.css"

const ProjectCards = () => {
  return (
    <div className="cards-container">
      {ProjectArray.map((info) => {
        return (
          <div className="card" key={info.id}>
            <img src={info.img} alt={info.title} className="project-preview" />
            <div className="text">
              <h1>{info.title}</h1>
              <p>{info.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCards;
