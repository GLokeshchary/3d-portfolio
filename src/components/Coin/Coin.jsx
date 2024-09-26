import React from "react";
import "./Coin.css";

const Coin = ({imgUrl,name}) => {
  return (
    <div className="scene">
      <div className="coin">
        <img src={imgUrl} alt={name} />
      </div>
    </div>
  );
};

export default Coin;
