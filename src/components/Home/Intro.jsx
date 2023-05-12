import React from "react";
import "./Intro.css";
import Icons from "./Icons";

const Intro = () => {
  return (
    <div className="intro-content">
      <div className="top-content">
        <div className="left-text">
          <h1 className="title">LET ME INTRODUCE MYSELF</h1>
          <div className="paragraph">
            <p>I am passionate about programming</p>
            <br />
            <p>
              I possess fluency in popular programming languages such as{" "}
              <span className="special">HTML</span>,{" "}
              <span className="special">CSS</span>, and{" "}
              <span className="special">Javascript</span>.
            </p>
            <br />
            <p>
              I am eager to broaden my expertise in various technical
              programming languages.
            </p>
            <br />
            <p>
              Whenever the opportunity arises, I harness my passion for product
              development by utilizing <span className="special">Node.js</span>{" "}
              and modern <span className="special">JavaScript libraries</span>{" "}
              and frameworks such as <span className="special">React.js</span>.
            </p>
          </div>
        </div>

        <img src="" alt="me" className="right-img" />
      </div>

      <div className="bottom-content">
        <h1 className="connect">
          <span className="special">CONNECT</span> WITH ME ON
        </h1>
        <Icons />
      </div>
    </div>
  );
};

export default Intro;
