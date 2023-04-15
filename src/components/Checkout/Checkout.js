import React from "react";
import { Input } from "./Input";
import "./Checkout.css";

function Checkout(props){

  return (
    <div className="checkout-container">
      <h2 className="heading-3">Credit card checkout</h2>
      <Input label="Name on card" type="text" name="name" />
      <Input label="Card number" type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
     <div className="row">
        <div className="col">
          <Input label="Expiration Date" type="date" name="exp_date" />
        </div>
        <div className="col">
          <Input label="CVV/CVC" type="number" name="cvv" />
        </div>
      </div>
      <button id="buttonCheckout">Checkout</button>
    </div>
  );

}

export default Checkout ;