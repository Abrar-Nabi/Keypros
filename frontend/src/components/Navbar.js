import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png"; // Replace with your actual logo path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo on the left */}
        <Link to="hero" smooth={true} duration={500} className="logo">
          <img src={logo} alt="Key Pro’s Logo" />
        </Link>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu (for mobile) */}
        <button className="navhamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
