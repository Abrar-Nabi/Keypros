import React, { useState } from "react";
import "../styles/services.css"; // Ensure this file exists
import QuoteForm from "../components/QuoteForm";  // Import QuoteForm

const services = [
  {
    title: "All Key Lost",
    description:
      "Lost all your car keys? No problem! Our expert locksmiths can create a new key from scratch, ensuring you regain access to your vehicle quickly and securely.",
  },
  {
    title: "Key Fob Replacement",
    description:
      "If your key fob is damaged, lost, or unresponsive, we offer key fob programming and replacement for all major car brands, restoring your car’s remote access and security.",
  },
  {
    title: "Copy Key Services",
    description:
      "Need a spare key? We provide precise key duplication services for all vehicle types, ensuring you always have a backup when needed.",
  },
  {
    title: "Car Lockout Assistance",
    description:
      "Locked out of your car? Don’t panic! Our emergency lockout service helps you regain access without damage to your vehicle, saving you time and stress.",
  },
  {
    title: "Ignition Lock Replacement",
    description:
      "Is your ignition jammed or not turning? We diagnose and replace faulty ignition locks, helping you start your vehicle smoothly without delays.",
  },
  {
    title: "Car Door Lock Replacement",
    description:
      "Damaged or malfunctioning car door locks can compromise security. We repair or replace your locks to ensure maximum safety and functionality.",
  },
];

const Services = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <section className="services">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button
              className="service-btn"
              onClick={() => setShowQuoteForm(true)}
            >
              Get
            </button>
          </div>
        ))}
      </div>

      {showQuoteForm && <QuoteForm onClose={() => setShowQuoteForm(false)} />}
    </section>
  );
};

export default Services;
