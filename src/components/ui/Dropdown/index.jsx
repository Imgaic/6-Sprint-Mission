import { isMobile } from "@utils/screenSize";
import styles from "./styles.module.css";

function Dropdown({ isOpen, order, handleToggleClick, handleOrderClick }) {
  return (
    <div className={styles.allItems__dropdown} onClick={handleToggleClick}>
      <button className={styles.allItems__orderSelect} type="button">
        {!isMobile() && (order === "recent" ? "최신순" : "좋아요순")}
      </button>
      <div
        className={`${styles.allItems__dropped} ${isOpen ? "" : styles.allItems__droppedDisplay}`}
      >
        <button
          className={`${styles.allItems__orderOption} ${styles.allItems__orderOptionTop}`}
          id="recent"
          onClick={handleOrderClick}
        >
          최신순
        </button>
        <button
          className={`${styles.allItems__orderOption} ${styles.allItems__orderOptionBottom}`}
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
