import React from "react";
import "./Card.css";
const Card = ({ para, src }) => {
  return (
    <div className="box">
      <div className="white">
        <p>{para}</p>
      </div>
      <img src={src} />
    </div>
  );
};

export default Card;
