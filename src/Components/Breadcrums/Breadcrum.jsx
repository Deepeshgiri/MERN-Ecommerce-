import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
export const Breadcrum = (props) => {
  const {product} = props;
  console.log(product); // Check the console to see if the product object is correct

  if (!product) {
    return <div>Loading...</div>; // Show a loading message if the product is not available
  }
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP
      <img src={arrow_icon} alt="" /> {product.category}
      <img src={arrow_icon} alt="" />
      {product.name}

      
    </div>
  );
};

export default Breadcrum;
