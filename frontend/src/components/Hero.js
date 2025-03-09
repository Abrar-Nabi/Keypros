import React, { useEffect, useState } from "react";
import "../styles/home.css";
import QuoteForm from "./QuoteForm"; // Import the new component

const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home" style={{ backgroundPositionY: `${offsetY}px` }}>
      <div className="overlay">
        <div className="text-container">
          <h1>Welcome to</h1>
          <h1>
            <span className="brand">
              <span className="red-k">K</span>ey Pro’s
            </span>{" "}
            <span className="home-subtext ">AUTO LOCKSMITH’S</span>
          </h1>
          <p className="description">
            Your keys are lost? Don’t panic, we’ve got your back!
          </p>
          <div className="buttons">
            <a href="tel:+61 404-917-555" className="call-btn">
              Call Us
            </a>
            <button className="quote-btn" onClick={() => setShowQuoteForm(true)}>
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {showQuoteForm && <QuoteForm onClose={() => setShowQuoteForm(false)} />}
    </div>
  );
};

export default Home;
