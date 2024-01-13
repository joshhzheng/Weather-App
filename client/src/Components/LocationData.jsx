import React from "react";

const LocationInfo = ({ locationData }) => {
  return (
    <div>
      <h1 id="location">Location📍: {locationData.name}</h1>
      <p>Weather: {locationData.weather[0].description}</p>
      <p>Temperature🌡️: {locationData.main.temp}°C</p>
      <p>Feels Like😮‍💨: {locationData.main.feels_like}°C</p>
      <p>Wind Speed🌬️: {locationData.wind.speed} knots</p>
    </div>
  );
};

export default LocationInfo;
