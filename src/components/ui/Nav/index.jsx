import Logo from "../Logo";
import Menus from "../Menus";
import styles from "./styles.module.css";

function Nav({ children }) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Menus />
      </div>
      {children}
    </div>
  );
}

export default Nav;
