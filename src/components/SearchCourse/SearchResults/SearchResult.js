import React, { useState } from "react";
import { Star, StarHalf } from "@mui/icons-material";
import "./courseCard.css";

function SearchResult(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleAddToCart = () => {
    setIsClicked(true);
    props.handleAddToCart(props.result);
  };

  return (
    <>
      {props.result && (
        <div className="course-container">
          <h2>Course.jsx</h2>
          <div key={props.result.title}>
            <div className="course-img-wrapper">
              <img src={props.result.imgUrl} alt="" className="course-img" />
              <button
                className="hovered-button"
                onClick={handleAddToCart}
                disabled={isClicked}
              >
                {isClicked ? "Added" : "Add To Cart"}
              </button>
            </div>

            <h2>{props.result.title}</h2>
            <p>Instructor: {props.result.instructor}</p>
            <p>Duration: {props.result.duration}</p>
            <p>Rating: {props.result.rating}</p>
            <p>Price: {props.result.price}</p>
          </div>
          <div className="course-img-wrapper">
            {/* <img src={item.img} alt={item.title} className="course-img" /> */}
          </div>
        </div>
      )}
    </>
  );
}

export default SearchResult;
