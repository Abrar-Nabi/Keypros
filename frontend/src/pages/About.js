import React from "react";
import "../styles/about.css";
import aboutImg from "../assets/images/Keypros(6).png"; // Your image path
import "../styles/customerFeedback.css";
import { FaStar, FaLightbulb } from "react-icons/fa"; // Import icons
import profileImg from "../assets/images/Profile.png"; // Replace with actual profile image

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Excellent service! Very professional and quick response.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Highly recommended! They fixed my car keys in minutes.",
    rating: 4,
  },
  {
    id: 3,
    name: "Mark Wilson",
    review: "Great experience! Affordable and reliable.",
    rating: 5,
  },
];
const About = () => {
    return (
        < >
        <section id="about" className="about-section">
            <div className="container">
                <div className="text">
                    <h2>About Us</h2>
                    <p>
                        Welcome to KeyPro's, your trusted auto locksmith service dedicated to providing fast, reliable, and professional key solutions. Whether you’re locked out, need a key replacement, or require advanced transponder programming, we’ve got you covered. With years of expertise and a commitment to customer satisfaction, we ensure you get back on the road quickly and securely. At KeyPro’s, your convenience and security are our top priorities.
                    </p>
                </div>
                <div className="image">
                    <img src={aboutImg} alt="About KeyPro's" />
                </div>
            </div>
        </section>
        <section className="feedback-section">
      <h2 className="feedback-title">Customer Feedback</h2>
      <div className="feedback-container">
        {reviews.map((review) => (
          <div key={review.id} className="feedback-card">
            <img src={profileImg} alt={review.name} className="profile-img" />
            <div className="stars">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
            </div>
            <p className="review-text">"{review.review}"</p>
          </div>
        ))}
      </div>

      <a
        href="https://www.google.com/search?q=keypro+reviews"
        target="_blank"
        rel="noopener noreferrer"
        className="write-review-btn"
      >
        <FaLightbulb className="icon" /> Write a Review
      </a>
    </section>

        </>
    );
};

export default About;
