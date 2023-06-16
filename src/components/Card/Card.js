import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import AmountBtn from "../PriceButtons/components/AmountBtn";
import AddToCart from "../PriceButtons/components/AddToCart";
function Card({ title, price, image,dish,addToCart }) {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <AmountBtn counter = {count} setCounter = {setCount}/>
        <div className="card-buttons">
          <AddToCart counter = {count} setCounter = {setCount} addToCart = {addToCart} dishInfo = {dish}/>
          <button className="details-button">
            <Link to={`/menu/${title}`} className="details-link">Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
