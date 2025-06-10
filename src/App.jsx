import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Restaurants from "./pages/Restaurants/Restaurants";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import RegisterRestaurants from "./pages/RegisterRestaurants/RegisterRestaurants";
// import Navbar from "./components/Navbar.jsx";
import Navbar from "./components/Navbar/Navbar";

// import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/register-restaurant" element={<RegisterRestaurants />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
