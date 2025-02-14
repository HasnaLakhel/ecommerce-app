import React, {useContext} from "react";
import "./CartCard.css";
import { CartContext } from "../../App";



const CartCard = ({bookData}) => {

  const {cartItemes, setCartItemes} = useContext(CartContext);


  //gérer la suppression items du cart
  const handleRemove = () => {
    const updatedCartItems = cartItemes.filter((item) => item.id !== bookData.id);
    setCartItemes(updatedCartItems);
  }

  return (
    <div className="cart-item">
      <div className="cart-item-img-container">
        <img src={bookData.book_img} alt="cart-item-img" className="cart-item-img" />
      </div>
      <div className="cart-item-content">
        <h2>{bookData.book_name}</h2>
        <p>{bookData.author_name}</p>
        <h3 className="cart-item-price">&#8377; {bookData.price}</h3>

        <button onClick={handleRemove} className="delete_btn">Remove from Cart</button>
      </div>
    </div>
  );
};

export default CartCard;
