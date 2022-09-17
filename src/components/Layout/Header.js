import React from "react";
import styles from "./Header.module.css";
import img from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = ({ totalItems }) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton totalItems={totalItems} />
      </header>
      <div className={styles["main-image"]}>
        <img src={img} alt="A table full of food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
