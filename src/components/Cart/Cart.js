import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import modalContext from "../../store/modalContext";
import cartContext from "../../store/cartContext";
import { useContext, useState } from "react";
import OrderForm from "./OrderForm";
const Cart = () => {
  const modalCtx = useContext(modalContext);
  const cartCtx = useContext(cartContext);
  const [form, setForm] = useState(false);
  const [approval, setApproval] = useState(false);

  const cartItems = cartCtx.orderedMeals.map((meal) => {
    return <CartItem key={meal.id} meal={meal} />;
  });

  const approve = () => {
    setApproval(true);
  };
  const total = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cartCtx.total);
  const openForm = () => {
    setForm(true);
  };
  return (
    <div className={styles["cart-items"]} onClick={(e) => e.stopPropagation()}>
      {cartItems}
      {!approval && (
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{total}</span>
        </div>
      )}
      {form && (
        <OrderForm form={form} onApprove={approve} approval={approval} />
      )}
      {!form && (
        <div className={styles.actions}>
          <button
            className={styles["button--alt"]}
            onClick={modalCtx.closeModalHandler}
          >
            Close
          </button>
          {cartCtx.total && !form ? (
            <button className={styles.button} onClick={openForm}>
              Order
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Cart;
