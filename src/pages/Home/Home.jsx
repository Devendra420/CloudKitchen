import React from 'react';
import './Home.css';
import bgImage from '../../assets/hero-bg.jpg';
import About from '../About/About';
import Restaurants from '../Restaurants/Restaurants';
import HowItWorks from '../HowItWorks/HowItWorks';

const Home = () => {
  return (
    <>
    <div id="home">
    <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <div className="hero-content">
          <h1><span>Revolutionizing</span> Food Delivery & Dining</h1>
          <p>Connect with top restaurants, enjoy seamless ordering, and experience the future of food service – all in one platform.</p>
          <div className="buttons">
            <button className="btn primary">Order Now</button>
            <button className="btn secondary">Partner with Us</button>
          </div>
        </div>
      </div>
    </div>
</div>
    <About/>
    <Restaurants/>
    <HowItWorks/>
    </>
  );
};

export default Home;
