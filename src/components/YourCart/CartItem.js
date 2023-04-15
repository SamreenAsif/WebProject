import React from "react";
import "./CartItem.css";

function CartItem(props) {
 
  const stars = [];
  alert (props) ;
  for (let i = 0; i < 5; i++) {
    const starClass = i < props.rating ? 'fa fa-star checked' : 'fa fa-star';
    stars.push(<i key={i} className={starClass}></i>);
  }
 
  return (
    <div className="Item-box">
      <div className="item-flex-box">
        <div className="image">
          <img src={props.image} alt="" />
        </div>
        <div className="Item-details">
          <div className="item-flex-1">

            <h3>{props.title}</h3>
            <span>{props.instructor}</span>
            <div className="rating">
              {stars}
            </div>
            <span>{props.duration}</span>
          </div>

          <div className="item-flex-2">
            <span id="item-inCart-price">
              <label htmlFor="price"> ${props.price} </label>
            </span>
          </div>
          <div className="item-flex-3">
            <button id="Remove-Item-Btn" onClick={props.onRemove}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
