import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/rest1.jpg"; // change to your image

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="title">About Our Restaurant</h1>
        <p className="subtitle">Quality • Passion • Flavor</p>
      </div>

      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="Restaurant" />
        </div>

        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            At Yehya’s Restaurant, we believe food is more than a meal —
            it’s an experience shared with family and friends.  
            We combine fresh ingredients, bold flavors, and a passion for
            exceptional service to bring you unforgettable dishes.
          </p>

          <h2>Our Mission</h2>
          <p>
            To deliver delicious food, made with love, served with care, and
            created to satisfy every taste — from classic comfort meals
            to modern favorites.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>🍽 Fresh, premium ingredients</li>
            <li>⭐ Experienced chefs</li>
            <li>🚀 Fast delivery</li>
            <li>❤️ A place where customers feel like family</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
