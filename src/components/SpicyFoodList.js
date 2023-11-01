import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const updatedFoods = [...foods, newFood];
    setFoods(updatedFoods);
  }

  function handleCuisineChange(event) {
    const selectedValue = event.target.value;
    setSelectedCuisine(selectedValue);
  }

  const filteredFoods =
    selectedCuisine === "All"
      ? foods
      : foods.filter((food) => food.cuisine === selectedCuisine);

  const foodList = filteredFoods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select
        name="filter"
        onChange={handleCuisineChange}
        value={selectedCuisine}
      >
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
