import React from "react";

const TextBox = ({ place, icon }) => {
  return (
    <div className="box-2">
      <div>
        <span>{place}</span>
        <i className={icon}></i>
      </div>
    </div>
  );
};

export default TextBox;
