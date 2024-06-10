import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>@codeit - 2024</div>
        <div className={styles.links}>
          <Link className={styles.link} to="/privacy">
            Privacy Policy
          </Link>
          <Link className={styles.link} to="/faq">
            FAQ
          </Link>
        </div>
        <div className={styles.snsLinks}>
          <SnsLink type="facebook" />
          <SnsLink type="twitter" />
          <SnsLink type="youtube" />
          <SnsLink type="instagram" />
        </div>
      </div>
    </footer>
  );
}

function SnsLink({ type }) {
  return (
    <Link
      className={`${styles.snsLink} ${styles[type]}`}
      to={`https://www.${type}.com/`}
      target="_blank"
    ></Link>
  );
}

export default Footer;
