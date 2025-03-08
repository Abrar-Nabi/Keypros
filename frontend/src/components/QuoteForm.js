import React, { useState } from "react";
import "../styles/quoteForm.css";
import { FaCheckCircle } from "react-icons/fa"; // Import checkmark icon

const QuoteForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle', 'loading', 'success'
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Force close keyboard
  document.activeElement.blur(); 
  
  setStatus("loading");

  try {
    const response = await fetch("https://your-render-api.com/api/quote/submit-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        onClose();
        setStatus("idle");
      }, 2000);
    } else {
      setStatus("idle");
    }
  } catch (error) {
    setStatus("idle");
  }
};


  return (
    <div className="quote-modal">
      <div className="quote-form-container">
        <h2>Request a Quote</h2>

        {status === "loading" && (
          <div className="loading-screen">
            <div className="spinner"></div>
            <p>Sending your request...</p>
          </div>
        )}

        {status === "success" && (
          <div className="success-screen">
            <FaCheckCircle className="success-icon" />
            <p>Quote request sent!</p>
          </div>
        )}

        {status === "idle" && (
          <form onSubmit={handleSubmit} className="quote-form">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
            
            <button type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Submit Request"}</button>
            <button className="close-btn" type="button" onClick={onClose}>Close</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;
