import styles from "./styles.module.css";

function Button({ className, isDisabled, handleClick }) {
  return (
    <button
      className={styles[className]}
      disabled={isDisabled}
      onClick={handleClick}
    >
      등록
    </button>
  );
}

export default Button;
