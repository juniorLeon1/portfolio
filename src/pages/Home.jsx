import React from "react";
import "./Home.css";
import ProjButton from "../components/Home/ProjButton";
import Icons from "../components/Home/Icons";

const Home = () => {
  return (
    <div className="home-background">
      <div className="title-box">
        <h1>Junior Leon</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
          iusto.
        </p>
        <ProjButton />
        <Icons />
      </div>
    </div>
  );
};

export default Home;
