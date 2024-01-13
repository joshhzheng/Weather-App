import React from "react";

const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/data");
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  };
  
  export default fetchData;
  