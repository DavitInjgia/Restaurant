import React from "react";
import "./Dish.css";
import { Link, useParams } from "react-router-dom";
import data from "./../dishes.json";
import PriceButtons from "../components/PriceButtons/PriceButtons";
function Dish({ addToCart }) {
  let { dish } = useParams();
  let dishInfo = data.find((el) => {
    return el.name === dish;
  });
  return (
    <>
      {dishInfo && (
        <div className="dish-page">
          {/* <div className="dish-img-container"> */}
          <img
            src={dishInfo.image}
            alt={dishInfo.name}
            className="dish-image"
          />
          {/* </div> */}
          {/* <div className="dish-details"> */}
          <h2 className="dish-name">{dishInfo.name}</h2>
          <p className="dish-category">Category: {dishInfo.category}</p>
          <p className="dish-price">Price: {dishInfo.price}</p>
          <p className="dish-info">{dishInfo.description}</p>
          {/* <div className="dish-buttons"> */}
            <PriceButtons
              addToCart={addToCart}
              dishInfo={dishInfo}
              className="cart-button"
            />
            <button className="back-button">
              <Link to={`/menu`} className="back-to-menu">
                Back to menu
              </Link>
            </button>
          {/* </div> */}
          {/* </div> */}
        </div>
      )}
    </>
  );
}

export default Dish;
