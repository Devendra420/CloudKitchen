import React from 'react'
import './Restaurants.css'
import { FaArrowRight } from "react-icons/fa6";
import {restaurants} from "../../../Utils/popular";

const Restaurants = () => {
  return (
    <div id='restaurants'>
    
   <div className="restaurant-section">
  <div className="i-left">
    <h2>Popular Restaurants</h2>

    <div className="subheading-row">
      <span>Discover top-rated dining options in your area</span>
      <a href="#view-all" className="view-all-link">
        View All <FaArrowRight />
      </a>
    </div>
  </div>


<div className="card-container">
      {restaurants.map((r, i) => (
        <div className="card" key={i}>
          <img src={r.image} alt={r.name} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{r.name}</h3>
            <div className="card-subtitle">{r.location}</div>
            <div className="card-info">
              <span className="card-rating">⭐ {r.rating}</span>
              <span className="card-time">⏱ {r.time}</span>
              {/* <span className="card-min">Min: {r.min}</span> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
);
};

export default Restaurants;
 
