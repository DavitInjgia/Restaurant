import React from "react";
import "./CartItem.css";
import deleteIcon from "./../../assets/icon-delete.svg";
import minus from "./../../assets/icon-minus.svg";
import plus from "./../../assets/icon-plus.svg";
function CartItem({ item, removeItem, incrementQuantity, decrementQuantity }) {
  let totalPrice = item.dish.price * item.quantity;
  return (
    <div className="cart-item">
      <img src={item.dish.image} alt="product" className="cart-image"></img>
      <div id="dropdown-product-description">
        <p id="dropdown-product-name">{item.dish.name}</p>
        <p id="dropdown-product-price">
          {item.dish.price} x {item.quantity} =
          <span id="dropdown-product-total-price"> {totalPrice}</span>
        </p>
      </div>
      <div className="plus-minus">
        <img
          src={plus}
          alt="plus"
          onClick={() => incrementQuantity(item, 1)}
          className="quantity-btn"
        />
        {item.quantity}
        <img
          src={minus}
          alt="minus"
          onClick={() => decrementQuantity(item)}
          className="quantity-btn"
        />
      </div>
      <button onClick={() => removeItem(item.dish.id)} id="dropdown-delete-btn">
        <img src={deleteIcon}></img>
      </button>
    </div>
  );
}

export default CartItem;
