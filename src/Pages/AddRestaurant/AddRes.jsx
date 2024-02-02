import React from "react";
import "./AddRes.css";

const AddRes = () => {
  const restaurantData = {
    name: "Awesome Restaurant",
    address: "123 Main St, Cityville",
    cuisine: "Delicious Cuisine",
    description: "Welcome to our fantastic restaurant with amazing food!",
  };
  return (
    <div className="addres">
      <div className="restaurant-container">
        <h2>{restaurantData.name}</h2>
        <p className="address">{restaurantData.address}</p>
        <p className="cuisine">{restaurantData.cuisine}</p>
        <p className="description">{restaurantData.description}</p>
      </div>
    </div>
  );
};

export default AddRes;
