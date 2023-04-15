import React from 'react';
import { Star, StarHalf } from '@mui/icons-material';
import './courseCard.css';

const Course = ({ item }) => {
  let increment = 0;
  let max = 5;

  return (
    <div className="course-container">
      <h2>Course.jsx</h2>
      <div className="course-img-wrapper">
        <img src={item.img} alt={item.title} className="course-img" />
      </div>

      <div className="course-text-wrapper">
        <h3 className="course-title">{item.title}</h3>
        <div className="course-desc">{item.desc}</div>

        <div className="course-rate-wrapper">
          <span className="course-rate-score">{item.rateScore}</span>
          <div className="course-rate-stars">
            {[...Array(5)].map((star, index) => {
              while (increment < item.rateScore) {
                if (item.rateScore - increment < 1) {
                  increment++;
                  return <StarHalf style={{ color: '#e59819' }} />;
                }
                increment++;
                return <Star style={{ color: '#e59819' }} />;
              }
              while (max > item.rateScore) {
                max--;
                return <Star style={{ color: 'gray' }} />;
              }
            })}
          </div>
          <span className="course-rate-reviewer-num">
            ({item.reviewerNum})
          </span>
        </div>

        <div className="price-wrapper">
          {item.onSale ? (
            <>
              <div className="course-price">
                CA${item.onSalePrice}
              </div>
              &nbsp;&nbsp;
              <p className="cross-off-price">CA${item.price}</p>
            </>
          ) : (
            <div className="course-price">CA${item.price}</div>
          )}
        </div>

        {/* {item.mark && <div className="course-mark">{item.mark}</div>} */}
      </div>
    </div>
  );
};

export default Course;
