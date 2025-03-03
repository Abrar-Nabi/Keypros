import React from "react";
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

const CustomerFeedback = () => {
  return (
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
  );
};

export default CustomerFeedback;
