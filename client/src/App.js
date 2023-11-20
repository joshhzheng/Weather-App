import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/data");
        const data = await response.json();

        setLocationData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="center">
      {locationData ? (
        <div>
          <h1 id="location">Location📍: {locationData.name}</h1>
          <p>Weather: {locationData.weather[0].description}</p>
          <p>Temperature🌡️: {locationData.main.temp}°C</p>
          <p>Feels Like😮‍💨: {locationData.main.feels_like}°C</p>
          <p>Wind Speed🌬️: {locationData.wind.speed} knots</p>
        </div>
      ) : ( 
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
