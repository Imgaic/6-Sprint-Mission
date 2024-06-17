import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function MenuItem({ link, name, className }) {
  return (
    <li>
      <Link to={link} className={`${styles.menuItem} ${styles[className]}`}>
        {name}
      </Link>
    </li>
  );
}

export default MenuItem;
