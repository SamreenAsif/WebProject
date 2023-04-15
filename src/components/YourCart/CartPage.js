import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import "./CartPage.css";
import cartItemSampleImg from "./ItemImages/ItemImage.png";
function CartPage(props) {
  const [cartItems, setCartItems] = useState(props.cartContent);

  const removeItem = (index) => {
    // console.log("inside remove");
    setCartItems(cartItems.filter((_, i) => i !== index));
    // console.log(index);
  };
  const navigate = useNavigate();
  const goToCheckout = ()=>{
   navigate("/checkout");
  }
  const totalPrice = cartItems.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  return (
    <div className="Cart-body">
      <h1 className="Shopping-Cart-heading">Your Cart</h1>

      <div className="Content">
        <div className="Items-list">
          {/* Quantity will be some variable in state */}
          <div className="SubHead-incart">
            {cartItems.length} Courses in Cart{" "}
          </div>
          <ul className="Cart-item-container">
            {
            /* currently price is nan bcz item price is not know 
                get it from all items page get the selected items price as props 
             */
             }
            {cartItems.map((item, index) => (
              <li key={index}>
                <CartItem
                  title={item.title}
                  image={item.imgUrl}
                  price={item.price}
                  duration = {item.duration}
                  instructor = {item.instructor}
                  onRemove={() => removeItem(index)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="checkout-Container">
          <div className="checkout-content">
            <h3>Total Price :</h3>
            {/* Display the total price */}
            <h2>$ {totalPrice}</h2>
            <button className="check-out-btn" onClick={()=>goToCheckout()}>Checkout</button>
          </div>
        </div>
      </div>
      {/* <button onClick={() => addItem({ image: cartItemSampleImg })}>
        Add Item
      </button> */}
    </div>
  );
}

export default CartPage;
