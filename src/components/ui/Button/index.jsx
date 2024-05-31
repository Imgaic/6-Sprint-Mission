import styles from "./styles.module.css";

function Button({ children, className, isDisabled, onClick }) {
  return (
    <button
      className={`${styles.button} ${styles[className]}`}
      disabled={isDisabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
