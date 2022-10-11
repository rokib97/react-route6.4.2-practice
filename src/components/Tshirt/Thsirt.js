import React from "react";
import "./Tshirt.css";
const Thsirt = ({ tshirt, handleBuyNow }) => {
  const { name, picture, price } = tshirt;
  return (
    <div className="single-tshirt">
      <img src={picture} alt="" />
      <h1>Name: {name}</h1>
      <h1>Price: {price}</h1>
      <button onClick={() => handleBuyNow(tshirt)}>Buy Now</button>
    </div>
  );
};

export default Thsirt;
