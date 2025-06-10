
import React from "react";
import "./About.css";
import { features } from "../../../Utils/common";



const AboutSection = () => {
  return (
    <div id="about">
    <section className="about-section">
      <h2 className="heading">Why Partner With CloudKitchen?</h2>
      <p className="subheading">
        Join thousands of successful restaurants that have boosted their
        business with our platform.
      </p>

      <div className="features">
        {features.map((feature, idx) => (
          <div className="feature-card" key={idx}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <button className="join-btn">Join Now</button>
    </section>
    </div>
  );
};

export default AboutSection;
