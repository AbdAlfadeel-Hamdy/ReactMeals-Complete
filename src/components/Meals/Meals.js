import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
const Meals = ({ onOrderMeal }) => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals onOrderMeal={onOrderMeal} />
    </React.Fragment>
  );
};

export default Meals;
