import React, { useState } from "react";
import "./Menu.css";
import { Link, useParams } from "react-router-dom";
import data from "./../dishes.json";
import Card from "../components/Card/Card";
function Menu({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortingOrder, setSortingOrder] = useState("asc");
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredDishes = selectedCategory
    ? data.filter((dish) => dish.category === selectedCategory)
    : data;

  const handleAscendSort = () => {
    setSortingOrder("asc");
  };

  const handleDescendSort = () => {
    setSortingOrder("desc");
  };

  const sortedDishes = filteredDishes.sort((a, b) => {
    if (sortingOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
  return (
    <>
      <div className="filter-container">
        <select value={selectedCategory} onChange={handleCategoryChange} className="filter-select">
          <option value="">All Categories</option>
          <option value="Main Dish">Main Dish</option>
          <option value="Side Dish">Side Dish</option>
          <option value="Dessert">Dessert</option>
          <option value="Drinks">Drinks</option>
        </select>
        <div className="filter-buttons">
          <button onClick={handleAscendSort} className="filter-button">Sort Ascending</button>
          <button onClick={handleDescendSort} className="filter-button">Sort Descending</button>
        </div>
      </div>

      <div className="dishes">
        {sortedDishes.map((el, index) => {
          return (
            <Card
              key={sortedDishes[index].id}
              title={el.name}
              price={el.price}
              image={el.image}
              dish={el}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </>
  );
}

export default Menu;
