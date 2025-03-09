import React from "react";
import "../styles/carBrands.css"; // Ensure you create this CSS file

const carBrands = [
  "Aston-Martin", "Audi", "BMW", "Chevrolet", "Ferrari", "Ford", "Hyundai",
  "Isuzu", "Jeep", "kia", "Lamborghini", "Lexus", "maserati", "Mazda", 
  "Mercedes-Benz", "Mitsubishi", "Nissan", "Porsche", "Renault", "Subaru", 
  "Suzuki", "Tesla", "Toyota", "Volvo"
];

const CarBrands = () => {
  return (
    <section className="car-brands">
      
      <div className="brands-container">
        {carBrands.map((brand, index) => (
          <img
            key={index}
            src={require(`../assets/icons/${brand}.png`)} 
            alt={brand}
            className="brand-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default CarBrands;
