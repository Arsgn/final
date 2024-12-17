import React, { useState } from "react";

function CarSearch({ onSearch }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(query, location);
  };

  return (
    <div className="car-search">
      <input
        type="text"
        placeholder="Поиск по модели"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        type="text"
        placeholder="Поиск по локации"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Искать</button>
    </div>
  );
}

export default CarSearch;
