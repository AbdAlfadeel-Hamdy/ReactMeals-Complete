import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";
import { useContext, useState } from "react";
import cartContext from "../../../store/cartContext";
const MealItemForm = ({ meal }) => {
  const [amount, setAmount] = useState(1);
  const cartCtx = useContext(cartContext);
  const inputChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const orderMeal = (e) => {
    e.preventDefault();
    cartCtx.orderMealHandler({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount: +amount,
    });
  };
  return (
    <form className={styles.form}>
      <Input
        inputConfig={{
          id: meal.id,
          label: "Amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          value: amount,
          onChange: inputChangeHandler,
        }}
      />
      <button onClick={orderMeal}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
