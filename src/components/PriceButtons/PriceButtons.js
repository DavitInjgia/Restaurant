import React, { useState } from "react";
import "./PriceButtons.css";
import AmountBtn from "./components/AmountBtn";
import AddToCart from "./components/AddToCart";
function PriceButtons(props) {
  const [counter, setCounter] = useState(0);
  return (
    <div className="price-buttons">
      <AmountBtn
        counter = {counter}
        setCounter = {setCounter}
      />
      <AddToCart counter = {counter} setCounter = {setCounter} addToCart = {props.addToCart} dishInfo = {props.dishInfo}/>
    </div>
  );
}

export default PriceButtons;
