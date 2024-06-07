import { Link } from "react-router-dom";
import logo from "@assets/logo.png";
import logo_mobile from "@assets/logo_mobile.png";
import styles from "./styles.module.css";

function Logo() {
  return (
    <Link to="/">
      <img
        className={`${styles.image} ${styles.desktop}`}
        src={logo}
        alt="판다마켓 로고"
      ></img>
      <img
        className={`${styles.image} ${styles.mobile}`}
        src={logo_mobile}
        alt="판다마켓 모바일 로고"
      ></img>
    </Link>
  );
}

export default Logo;
