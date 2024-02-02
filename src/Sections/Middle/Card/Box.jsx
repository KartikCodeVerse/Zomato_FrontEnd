import React from "react";
import "./Box.css";
const Box = ({ title, place, src }) => {
  return (
    <div className="box-1">
      <div>
        <span>
          {title}d <br />
          {place}
        </span>
        <i className="fas fa-caret-right"></i>
      </div>
      <img src={src} />
    </div>
  );
};

export default Box;
