import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">CloudKitchen</h2>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
           
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#restaurants">Restaurants</a></li>
        <li><a href="#works">How It Works</a></li>
        <li><a href="#register">Register Restaurant</a></li>
        {/* <li><Link to="/login">Login</Link></li> */}
        </ul>
      </div>
      <div className="navbar-right">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
