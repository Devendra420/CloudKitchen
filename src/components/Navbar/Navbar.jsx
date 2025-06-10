import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LoginModal from "../LoginModal/LoginModal";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <h2 className="logo">CloudKitchen</h2>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#restaurants">Restaurants</a>
            </li>
            <li>
              <a href="#works">How It Works</a>
            </li>
            <li>
              <a href="#register">Register Restaurant</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <button className="login-btn" onClick={openLogin}>
            Login
          </button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {isLoginOpen && <LoginModal onClose={closeLogin} />}
    </>
  );
};

export default Navbar;
