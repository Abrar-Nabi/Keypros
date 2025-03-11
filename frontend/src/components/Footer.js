import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <Link to="hero" smooth={true} duration={500} className="footer-link">Home</Link>
        <Link to="about" smooth={true} duration={500} className="footer-link">About</Link>
        <Link to="services" smooth={true} duration={500} className="footer-link">Services</Link>
        <Link to="contact" smooth={true} duration={500} className="footer-link">Contact</Link>
      </div>

      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Key Pro’s Auto Locksmith. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a> */}
        </div>
      </div>

      <div className="developer-credit">
        <p>
          Design and developed by{" "}
          <a href="https://abrarulhaq.netlify.app/" target="_blank" rel="noopener noreferrer">
            Abrar ul Haq
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
