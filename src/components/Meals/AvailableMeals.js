import React, { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";

const AvailableMeals = ({ onOrderMeal }) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://react-http-a0e9b-default-rtdb.firebaseio.com/meals.json"
        );
        const data = await response.json();
        if (!data) throw new Error(`invalid URL! No meals found.`);
        setMeals(data.data);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    fetchMeals();
  }, []);
  let mealsList = null;
  if (meals.length > 0)
    mealsList = meals.map((meal) => (
      <MealItem key={meal.id} meal={meal} onOrderMeal={onOrderMeal} />
    ));
  return (
    <Card className={styles.meals}>
      {isLoading ? <p>Loading...</p> : <ul>{mealsList ? mealsList : error}</ul>}
    </Card>
  );
};

export default AvailableMeals;
