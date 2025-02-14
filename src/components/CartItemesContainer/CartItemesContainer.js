import React, { useContext } from "react";
import "./CartItemesContainer.css";
import CartCard from "../CartCard/CartCard";
import { CartContext } from "../../App";

const CartItemesContainer = () => {
  const { cartItemes, total } = useContext(CartContext);

  return (
    <section className="CartItemesContainer">
      <div className="cart-item-container">
        <div className="container">
          
        </div>
        {total === 0 ? (
          <h2>your cart is empty</h2>
        ) : (
          <React.Fragment>
            <h2>Cart</h2>
            {cartItemes.map((item) => (
              <CartCard key={item.id} bookData={item} />
            ))}
            <h2>Total Amount=&#8377; {total}</h2>
            <button className="delete_btn">Proceed To Chekout</button>
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export default CartItemesContainer;
