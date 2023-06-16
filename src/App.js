import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./generics/Header/Header";
import Home from "./pages/Home";
import Footer from "./generics/Footer/Footer";
import ContactUs from "./pages/ContactUs";
import Menu from "./pages/Menu";
import Dish from "./pages/Dish";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (dish, num) => {
    const existingItem = cart.find((item) => item.dish.name === dish.name);
    if (existingItem) {
      incrementQuantity(dish, num);
    } else {
      setCart((prevCart) => [...prevCart, { dish, quantity: num }]);
    }
  };
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.dish.id !== id));
  };
  const incrementQuantity = (dish, num) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.dish.name === dish.name
          ? { ...item, quantity: item.quantity + num }
          : item
      )
    );
  };
  const incrementQuantityCart = (dish) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.dish.name === dish.dish.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (dish) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.dish.name === dish.dish.name
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const[currency, setCurrency] = useState("dollar");
  const [exchangeRate, setExchangeRate] = useState(1);
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        setExchangeRate(response.data.rates.EUR);
      } catch (error) {
        console.error("Failed to fetch exchange rate", error);
      }
    };

    fetchExchangeRate();
  }, []);
  const handleCurrencyChange = () => {
    if (currency === "dollar") {
      setCurrency("euro");
    } else {
      setCurrency("dollar");
    }
  };
  return (
    <div className="body">
      <BrowserRouter>
        <Header
          cart={cart}
          removeItem={removeItem}
          incrementQuantity={incrementQuantityCart}
          decrementQuantity={decrementQuantity}
          handleCurrencyChange={handleCurrencyChange}
        />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="contact-us" element={<ContactUs />}></Route>
          <Route path="menu" element={<Menu addToCart={addToCart} />}></Route>
          <Route
            path="menu/:dish"
            element={<Dish addToCart={addToCart} />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
