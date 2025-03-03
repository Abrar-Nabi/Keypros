import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/footer.css"; // Ensure this file exists for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/services" className="footer-link">Services</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
      </div>

      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Key Pro’s Auto Locksmith. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
