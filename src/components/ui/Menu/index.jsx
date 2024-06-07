import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Menu({ link, name, className }) {
  return (
    <li>
      <Link to={link} className={`${styles.menu} ${styles[className]}`}>
        {name}
      </Link>
    </li>
  );
}

export default Menu;
