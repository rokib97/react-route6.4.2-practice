import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleDelete }) => {
  return (
    <div>
      <h1 className={`bold ${cart.length === 1 ? "bold" : "small"}`}>
        Order Summary
      </h1>
      {cart.map((item) => (
        <p key={item._id}>
          {item.name}
          <button onClick={() => handleDelete(item)}>X</button>
        </p>
      ))}
      {/* {cart.length === 1 ? <p>ekta</p> : <p>ektar beshi</p>} */}
      {/* {cart.length === 4 && <p>exactly four</p>} */}
    </div>
  );
};

export default Cart;
