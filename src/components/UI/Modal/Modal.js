import styles from "./Modal.module.css";
import Card from "../Card/Card";
import ReactDOM from "react-dom";
import React, { useContext } from "react";
import modalContext from "../../../store/modalContext";
const Modal = ({ children }) => {
  const modalCtx = useContext(modalContext);
  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={modalCtx.closeModalHandler}>
      <Card className={styles.modal}>{children} </Card>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
