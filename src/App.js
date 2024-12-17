import React, { useState } from "react";
import CarCard from "./components/CarCard";

import "./App.css";
import carsData from "./data/cars.json";

function App() {
  const [rentedCar, setRentedCar] = useState(null);

  const handleRentCar = (car) => {
    setRentedCar(car);
    alert(`Вы успешно арендовали ${car.model}!`);
  };

  return (
    <div className="App">
      <h1>Аренда Электрических Автомобилей</h1>

      {}
      <div className="car-list">
        {carsData.map((car) => (
          <CarCard key={car.id} car={car} onRent={handleRentCar} />
        ))}
      </div>

      {}
      {rentedCar && (
        <div className="rented-car-info">
          <h2>Вы арендовали: {rentedCar.model}</h2>
          <p>Цена аренды: ${rentedCar.price} в день</p>
        </div>
      )}
    </div>
  );
}

export default App;
