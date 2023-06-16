import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import "./Header.css";
import logo from "./../../assets/logo.png";
import CartItem from "../../components/CartItem/CartItem";

function Header({
  cart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  handleCurrencyChange,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    for (let item of cart) {
      total += item.quantity * item.dish.price;
    }
    setTotalPrice(total);
  }, [cart]);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <header>
      {!showMenu && <FiMenu className="menu-icon" onClick={toggleMenu} />}
      <img src={logo} alt="logo" className="logo" />
      <div className={`sidebar ${showMenu ? "show" : ""}`}>
        <FiX className="menu-close-icon" onClick={toggleMenu} />
        <nav className="nav-links">
          <NavLink to="/" onClick={toggleMenu} className="nav-link">
            Home
          </NavLink>
          <NavLink to="contact-us" onClick={toggleMenu} className="nav-link">
            Contact Us
          </NavLink>
          <NavLink to="menu" onClick={toggleMenu} className="nav-link">
            Menu
          </NavLink>
        </nav>
      </div>
      <div className="cart-icon">
        <FiShoppingCart onClick={toggleCart} />
        <div className={`cart-sidebar ${showCart ? "show" : ""}`}>
          {cart.map((el, index) => {
            return (
              <CartItem
                key={cart[index].dish.id}
                item={el}
                removeItem={removeItem}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
            );
          })}
          <button className="checkout-button" >
            Checkout
          </button>
          <p className="total-price">Total : {totalPrice}</p>
        </div>
      </div>
      {/* <button onClick={handleCurrencyChange}>Change Currency</button> */}
    </header>
  );
}

export default Header;
