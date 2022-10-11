import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Thsirt from "../Tshirt/Thsirt";
import "./Home.css";
const Home = () => {
  const [cart, setCart] = useState([]);
  const tshirts = useLoaderData();

  const handleBuyNow = (tshirt) => {
    const exits = cart.find((item) => item._id === tshirt._id);
    if (exits) {
      alert("Already Exits!");
    } else {
      setCart([...cart, tshirt]);
    }
  };
  const handleDelete = (tshirt) => {
    const remaining = cart.filter((item) => item._id !== tshirt._id);
    setCart(remaining);
  };
  return (
    <div className="tshirt-container">
      <div className="tshirts">
        {tshirts.map((tshirt) => (
          <Thsirt
            tshirt={tshirt}
            key={tshirt._id}
            handleBuyNow={handleBuyNow}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Home;
