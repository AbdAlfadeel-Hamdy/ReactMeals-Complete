import React, { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";

const AvailableMeals = ({ onOrderMeal }) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-a0e9b-default-rtdb.firebaseio.com/meals.json"
      );
      const { data } = await response.json();
      setMeals(data);
    };
    fetchMeals();
  }, [meals]);
  let mealsList = null;
  if (meals.length > 0)
    mealsList = meals.map((meal) => (
      <MealItem key={meal.id} meal={meal} onOrderMeal={onOrderMeal} />
    ));
  return (
    <Card className={styles.meals}>
      <ul>{mealsList ? mealsList : "No meals"}</ul>
    </Card>
  );
};

export default AvailableMeals;
