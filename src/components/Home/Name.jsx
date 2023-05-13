import React from "react";
import Typewriter from "typewriter-effect";
import "./Name.css";

const Name = () => {
  return (
    <div className="name-box">
      <h1 className="name">Hi,</h1>
      <h1 className="name">I'm Junior Leon</h1>
      <div className="typewriter">
        <Typewriter
          options={{
            strings: ["Junior Software Developer", "Deep Learning Engineer"],
            autoStart: true,
            deleteSpeed: 50,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Name;
