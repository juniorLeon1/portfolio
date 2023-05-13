import React from "react";
import "./About.css";
import Icons from "./Icons";
import Skills from "./Skills";

const Intro = () => {
  return (
    <div className="intro-content">
      <div className="top-content">
        <div className="left-text">
          <h1 className="title">
            LET ME <span className="special">INTRODUCE</span> MYSELF
          </h1>
          <div className="paragraph">
            <p>I am passionate about programming</p>
            <br />
            <br />
            <p>
              I possess fluency in popular programming languages such as{" "}
              <span className="special">HTML</span>,{" "}
              <span className="special">CSS</span>, and{" "}
              <span className="special">Javascript</span>.
            </p>
            <br />
            <br />
            <p>
              I am eager to broaden my expertise in various technical
              programming languages.
            </p>
            <br />
            <br />
            <p>
              Whenever the opportunity arises, I harness my passion for product
              development by utilizing <span className="special">Node.js</span>{" "}
              and modern <span className="special">JavaScript libraries</span>{" "}
              and frameworks such as <span className="special">React.js</span>.
            </p>
          </div>
        </div>

        <div className="circle">
          <img
            src={require("../../images/programming.png")}
            alt="me"
            className="right-img"
          />
        </div>
      </div>

      <div className="">
        <Skills />
      </div>

      <div className="bottom-content">
        <h1 className="connect">
          <span className="special">FIND</span> ME ON
        </h1>
        <Icons />
        <h1 className="contact">OR <span className="special">CONTACT</span> ME @</h1>
        <p className="email"><span className="special">jrleontech@gmail.com</span></p>
      </div>
    </div>
  );
};

export default Intro;
