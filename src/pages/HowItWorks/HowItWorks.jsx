import React from 'react';
import './HowItWorks.css';
import { FaUserAlt, FaStore } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <div id='works'>
    <div className="how-it-works">
      <h2>How CloudKitchen Works</h2>
      <p className="subtitle">
        Simple, efficient, and designed for both customers and restaurant partners
      </p>
      <div className="roles-container">
        <div className="role-card">
          <div className="role-header">
            <FaUserAlt className="role-icon" />
            <h3>For Customers</h3>
          </div>
          <ol>
            <li>
              <strong>Browse Restaurants</strong>
              <p>Explore a variety of cuisines and restaurants in your area.</p>
            </li>
            <li>
              <strong>Place Your Order</strong>
              <p>Select your favorite dishes and customize as needed.</p>
            </li>
            <li>
              <strong>Track & Enjoy</strong>
              <p>Follow your order in real-time and enjoy your meal!</p>
            </li>
          </ol>
          <button className="action-btn">Order Now</button>
        </div>

        <div className="role-card">
          <div className="role-header">
            <FaStore className="role-icon" />
            <h3>For Restaurants</h3>
          </div>
          <ol>
            <li>
              <strong>Join Our Platform</strong>
              <p>Complete the simple registration process to get started.</p>
            </li>
            <li>
              <strong>Receive Orders</strong>
              <p>Get notified instantly when customers place orders.</p>
            </li>
            <li>
              <strong>Deliver & Grow</strong>
              <p>Fulfill orders and watch your business expand.</p>
            </li>
          </ol>
          <button className="action-btn">Register Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HowItWorks;