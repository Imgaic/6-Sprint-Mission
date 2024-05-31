import styles from "./styles.module.css";

function PaginationButton({ children, id, className = "", onClick }) {
  return (
    <button
      id={id}
      className={`${styles.button} ${styles[className]}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
