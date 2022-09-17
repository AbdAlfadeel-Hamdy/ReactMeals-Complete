import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = ({ meal }) => {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(meal.price);
  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={styles.description}>{meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <MealItemForm meal={meal} />
    </li>
  );
};

export default MealItem;
