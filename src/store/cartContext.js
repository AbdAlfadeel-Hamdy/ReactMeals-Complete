import React from "react";

const cartContext = React.createContext({
  orderedMeals: [],
  total: 0,
  totalItems: 0,
  changeOrderedMealsHandler: () => 1,
  reset: () => 0,
});

export default cartContext;
