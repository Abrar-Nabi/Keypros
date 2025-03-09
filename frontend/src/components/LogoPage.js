import React, { useState } from "react";
import "../styles/carBrands.css";
import QuoteForm from "../components/QuoteForm"; // Import QuoteForm

const carBrands = [
  "Aston-Martin", "Audi", "BMW", "bentley", "Chevrolet", "Ferrari", "Ford", 
  "honda", "Hyundai", "Isuzu", "jaguar", "Jeep", "kia", "landrover", "Lexus", 
  "maserati", "Mazda", "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan", 
  "Porsche", "Renault", "Subaru", "Suzuki", "Skoda","Toyota", "Volkswagen", "Volvo"
];

const CarBrands = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setShowQuoteForm(true);
  };

  return (
    <section className="car-brands">
      <h2 className="brands-heading">Popular Car Brands</h2>
      <div className="brands-container">
        {carBrands.map((brand, index) => (
          <img
            key={index}
            src={require(`../assets/icons/${brand}.png`)}
            alt={brand}
            className="brand-logo"
            onClick={() => handleBrandClick(brand)}
          />
        ))}
      </div>

      {showQuoteForm && (
        <QuoteForm
          onClose={() => setShowQuoteForm(false)}
          selectedBrand={selectedBrand}
        />
      )}
    </section>
  );
};

export default CarBrands;
