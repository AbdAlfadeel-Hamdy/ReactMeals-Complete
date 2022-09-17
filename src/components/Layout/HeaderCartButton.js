import styles from "./HeaderCartButton.module.css";
import modalContext from "../../store/modalContext";
import { useContext, useEffect, useState } from "react";
import cartContext from "../../store/cartContext";
const HeaderCartButton = () => {
  const [btnBump, setBtnBump] = useState(false);
  const modalCtx = useContext(modalContext);
  const cartCtx = useContext(cartContext);

  const classes = `${styles.button} ${btnBump ? styles.bump : ""}`;
  useEffect(() => {
    if (cartCtx.orderedMeals.length === 0) return;
    setBtnBump(true);
    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [cartCtx.orderedMeals]);

  return (
    <button className={classes} onClick={modalCtx.openModalHandler}>
      <span className={styles.icon}>
        <ion-icon name="cart"></ion-icon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartCtx.totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
