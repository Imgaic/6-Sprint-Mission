import leftArrowIcon from "@assets/icons/ic_arrow_left.svg";
import rightArrowIcon from "@assets/icons/ic_arrow_right.svg";
import styles from "./styles.module.css";

function Pagination({ page, handlePaginationClick }) {
  return (
    <div className={styles.layout}>
      <PaginationButton
        id="previousPage"
        className="image"
        onClick={handlePaginationClick}
      >
        <img src={leftArrowIcon} alt="left arrow"></img>
      </PaginationButton>
      {["1", "2", "3", "4", "5"].map((num) => (
        <PaginationButton
          key={num}
          id={num}
          onClick={handlePaginationClick}
          className={num === page ? "selected" : ""}
        >
          {num}
        </PaginationButton>
      ))}
      <PaginationButton
        id="nextPage"
        className="image"
        onClick={handlePaginationClick}
      >
        <img src={rightArrowIcon} alt="right arrow"></img>
      </PaginationButton>
    </div>
  );
}

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

export default Pagination;
