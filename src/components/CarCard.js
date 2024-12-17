import React from "react";

function CarCard({ car, onRent }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.model} />
      <div className="car-info">
        <h3>
          {car.model} ({car.year})
        </h3>
        <p>Brand: {car.brand}</p>
        <p>Location: {car.location}</p>
        <p>Price per day: ${car.price}</p>
        <button onClick={() => onRent(car)}>Арендовать</button>
      </div>
    </div>
  );
}

export default CarCard;
