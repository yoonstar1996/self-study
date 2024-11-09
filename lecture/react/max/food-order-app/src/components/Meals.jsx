import React, { useEffect, useState } from "react";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          // ...
        }
        const meals = await response.json();
        setLoadedMeals(meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
