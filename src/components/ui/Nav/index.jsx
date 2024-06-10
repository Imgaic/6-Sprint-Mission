import Logo from "@ui/Logo";
import Menu from "@ui/Menu";
import styles from "./styles.module.css";

function Nav({ children, page }) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo />
        {page !== "main" && <Menu />}
      </div>
      {children}
    </div>
  );
}

export default Nav;
