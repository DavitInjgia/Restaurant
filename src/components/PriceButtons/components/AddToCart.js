import React from "react";
import "./AddToCart.css";
import cart from "./../../../assets/addToCart.png";
function AddToCart({ counter,setCounter, addToCart, dishInfo }) {
  return (
    <div
      className="add-to-cart"
      onClick={() => {
        if (counter > 0) {
            addToCart(dishInfo, counter);
            setCounter(0);
        }
      }}
    >
      <div className="cart-icon">
        <img src={cart} alt="cart" />
        <p className="add-to-cart-txt">Add to Cart</p>
      </div>
    </div>
  );
}

export default AddToCart;
