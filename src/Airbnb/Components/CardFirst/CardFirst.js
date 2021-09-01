import React from "react";
import "./CardFirst.css";

const CardFirst = ({ imgSrc, heading, paragraph }) => {
  return (
    <div className="cardfirstMainDiv">
      <div className="cardfirstImg">
        <img src={imgSrc} alt="cardimg" />
      </div>
      <h4>{heading}</h4>
      <p>{paragraph}</p>
    </div>
  );
};

export default CardFirst;
