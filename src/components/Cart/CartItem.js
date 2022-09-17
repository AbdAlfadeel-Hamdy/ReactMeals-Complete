import { useContext } from "react";
import styles from "./CartItem.module.css";
import cartContext from "../../store/cartContext";
const CartItem = ({ meal }) => {
  const cartCtx = useContext(cartContext);
  const decrementOrder = () => {
    cartCtx.changeOrderedMealsHandler(-1, meal.name);
  };
  const incrementOrder = () => {
    cartCtx.changeOrderedMealsHandler(1, meal.name);
  };
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(meal.price);
  return (
    <div className={styles["cart-item"]}>
      <div>
        <h2>{meal.name}</h2>
        <div className={styles.summary}>
          <div className={styles.price}>{price}</div>
          <div className={styles.amount}>{`x${meal.amount}`}</div>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={decrementOrder}>-</button>
        <button onClick={incrementOrder}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
