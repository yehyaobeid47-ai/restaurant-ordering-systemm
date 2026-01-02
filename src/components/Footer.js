import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
  const reviews = [
    { name: "Ali", comment: "Amazing food and cozy atmosphere!" },
    { name: "Sara", comment: "Best restaurant in town. Highly recommend!" },
    { name: "Mohammad", comment: "Delicious meals and excellent service." }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About & Newsletter */}
        <div className="footer-about">
          <h2>Yehya's Restaurant</h2>
          <p>Serving delicious meals with love and passion. Join our newsletter for latest updates!</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Reviews */}
        <div className="footer-reviews">
          <h3>Customer Reviews</h3>
          {reviews.map((rev, index) => (
            <div key={index} className="review">
              <p>"{rev.comment}"</p>
              <span>- {rev.name}</span>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Yehya's Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
