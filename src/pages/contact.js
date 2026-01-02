import React from "react";
import "../styles/Contact.css";
import contactImg from "../assets/rest1.jpg"; // use any image

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="title">Contact Us</h1>
        <p className="subtitle">We’d love to hear from you!</p>
      </div>

      <div className="contact-container">
        {/* LEFT SIDE: IMAGE */}
        <div className="contact-image">
          <img src={contactImg} alt="Contact" />
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="contact-form">
          <h2>Send us a message</h2>

          <form>
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Write your message..." required></textarea>
            </div>

            <button type="submit" className="send-btn">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Contact Information</h3>

            <p>📍 Beirut, Lebanon</p>
            <p>📞 +961 76 831 016</p>
            <p>✉ contact@yehya-restaurant.com</p>
            <p>🕒 Mon – Sun: 9:00 AM – 11:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
