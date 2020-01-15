import React from "react";

const Checkboxes = ({ cities, checkboxChange }) => {
  const allCitiesNames = [
    "Tel Aviv",
    "Brasilia",
    "Mumbai",
    "Zanzibar",
    "London",
    "New York",
    "Moscow",
    "Berlin",
    "Bangkok",
    "Sydney"
  ];
  return (
    <div className="row mx-0 mt-4">
      {allCitiesNames.map((city, i) => {
        return (
          <div key={i} className="form-group form-check col-12 col-lg-2">
            <input
              type="checkbox"
              name={city}
              className="form-check-input"
              id={city}
              checked={cities.includes(city)}
              onChange={checkboxChange}
            />
            <label className="form-check-label" htmlFor={city}>
              {city}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Checkboxes;
