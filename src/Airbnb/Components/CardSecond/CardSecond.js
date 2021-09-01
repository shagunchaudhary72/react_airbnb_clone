import React from "react";
import "./CardSecond.css";

const CardSecond = ({imgSrc,heading,paragraph,money}) => {
  return (
    <div className="cardsecondMainDiv">
      <div className="cardsecondImg">
        <img src={imgSrc} alt="cardimg" />
      </div>
      <h4>{heading}</h4>
      <p>{paragraph}</p>
      <h2>${money}/night</h2>
    </div>
  );
};

export default CardSecond;
