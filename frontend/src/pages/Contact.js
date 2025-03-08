import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaUsers } from "react-icons/fa";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-heading">Contact</h2>
      <div className="contact-box">
        <div className="contact-grid">
          
          {/* Phone */}
          <div className="contact-item-box">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-text">
              <h3>Phone</h3>
              <p>+61 404-917-555</p>
            </div>
          </div>

          {/* Email */}
          <div className="contact-item-box">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-text">
              <h3>Email</h3>
              <p>info@example.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="contact-item-box">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-text">
              <h3>Address</h3>
              <p>22 tania avenue windsor garden</p>
            </div>
          </div>

          {/* Socials */}
          <div className="contact-item-box">
            <div className="contact-icon">
              <FaUsers />
            </div>
            <div className="contact-text">
              <h3>Socials</h3>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="social-link-icon" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="social-link-icon" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-link-icon" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
