import { isMobile } from "@utils/screenSize";
import styles from "./styles.module.css";

function Dropdown({ isOpen, order, handleToggleClick, handleOrderClick }) {
  return (
    <div className={styles.dropdown} onClick={handleToggleClick}>
      <button className={styles.orderSelect} type="button">
        {!isMobile() && (order === "recent" ? "최신순" : "좋아요순")}
      </button>
      <div
        className={`${styles.dropped} ${isOpen ? "" : styles.droppedDisplay}`}
      >
        <button
          className={`${styles.orderOption} ${styles.orderOptionTop}`}
          id="recent"
          onClick={handleOrderClick}
        >
          최신순
        </button>
        <button
          className={`${styles.orderOption} ${styles.orderOptionBottom}`}
          id="favorite"
          onClick={handleOrderClick}
        >
          좋아요순
        </button>
      </div>
    </div>
  );
}

export default Dropdown;
