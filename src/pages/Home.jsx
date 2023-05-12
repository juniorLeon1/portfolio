import React from "react";
import "./Home.css";
import Name from "../components/Home/Name";
import Intro from "../components/Home/Intro";

const Home = () => {
  return (
    <div>
      <div className="home-background">
        <Name />
        <img src="" alt="me" className="hero-img" />
      </div>

      <div className="intro-section">
        <Intro />
      </div>
    </div>
  );
};

export default Home;
