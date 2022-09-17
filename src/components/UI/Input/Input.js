import styles from "./Input.module.css";
const Input = ({ inputConfig }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={inputConfig.id}>{inputConfig.label}</label>
      <input {...inputConfig} />
    </div>
  );
};

export default Input;
