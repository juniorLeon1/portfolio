import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <Link to={props.values.url} className="source" target="__blank">
        <button className="source-button">
          {props.values.icon} {props.values.title}
        </button>
      </Link>
    </div>
  );
};

export default Button;
