import React, { useEffect, useState } from "react";
import LocationInfo from "./Components/LocationData";
import fetchData from "./Components/Api";
import "./App.css";

const App = () => {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const fetchDataAndSetLocation = async () => {
      try {
        const data = await fetchData();
        setLocationData(data);
      } catch (error) {
        // Handle errors if needed
      }
    };

    fetchDataAndSetLocation();
  }, []); 

  return (
    <div className="center">
      {locationData ? (
        <LocationInfo locationData={locationData} />
      ) : ( 
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
