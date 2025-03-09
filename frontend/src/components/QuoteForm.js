import React, { useState } from "react";
import "../styles/quoteForm.css";
import { FaCheckCircle } from "react-icons/fa"; // Import checkmark icon

const QuoteForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    otherDetails: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle', 'loading', 'success'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://keypros-backend.onrender.com/api/quote/submit-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          setFormData({ name: "", phone: "", service: "", otherDetails: "" });
          onClose();
          setStatus("idle");
        }, 2000);
      } else {
        alert("Failed to send request. Please try again.");
        setStatus("idle");
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
      setStatus("idle");
    }
  };

  return (
    <div className="quote-modal">
      <div className="quote-form-container">
        <h2 className="quote-form-title">Request a Quote</h2>

        {status === "loading" && (
          <div className="quote-loading-screen">
            <div className="quote-spinner"></div>
            <p className="quote-loading-text">Sending your request...</p>
          </div>
        )}

        {status === "success" && (
          <div className="quote-success-screen">
            <FaCheckCircle className="quote-success-icon" />
            <p className="quote-success-text">Quote request sent!</p>
          </div>
        )}

        {status === "idle" && (
          <form onSubmit={handleSubmit} className="quote-form">
            <input
              type="text"
              name="name"
              className="quote-input"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              className="quote-input"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            
            {/* Dropdown for Services */}
            <select
              name="service"
              className="quote-select"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a Service</option>
              <option value="All Key Lost">All Key Lost</option>
              <option value="Key Fob Replacement">Key Fob Replacement</option>
              <option value="Copy Key Services">Copy Key Services</option>
              <option value="Car Lockout Assistance">Car Lockout Assistance</option>
              <option value="Ignition Lock Replacement">Ignition Lock Replacement</option>
              <option value="Car Door Lock Replacement">Car Door Lock Replacement</option>
              <option value="Others">Others</option>
            </select>

            {/* Input for 'Others' */}
            {formData.service === "Others" && (
              <textarea
                name="otherDetails"
                className="quote-textarea"
                placeholder="Please provide details..."
                value={formData.otherDetails}
                onChange={handleChange}
                required
              />
            )}

            <button type="submit" className="quote-submit-btn" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Submit Request"}
            </button>
            <button className="quote-close-btn" type="button" onClick={onClose}>Close</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;
