import styles from "./styles.module.css";

function ErrorMessage({ errorMessage }) {
  return (
    <span className={styles.errorMessage}>
      {errorMessage !== "initial" && errorMessage !== "" && errorMessage}
    </span>
  );
}

export default ErrorMessage;
