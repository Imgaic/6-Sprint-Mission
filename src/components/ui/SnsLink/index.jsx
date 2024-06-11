import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function SnsLink({ type, page }) {
  return (
    <Link
      className={`${styles.link} ${styles[type]} ${styles[page]}`}
      to={`https://www.${type === "kakaotalk" ? "kakaocorp" : type}.com/`}
      target="_blank"
    ></Link>
  );
}

export default SnsLink;
