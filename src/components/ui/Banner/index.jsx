import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Banner({ position }) {
  return (
    <section className={`${styles.section} ${styles[position]}`}>
      <div className={styles.content}>
        {position === "top" ? (
          <>
            <h1 className={`${styles.description} ${styles.brNone}`}>
              일상의 모든 물건을 <br />
              거래해 보세요
            </h1>
            <Link className={styles.link} to="/items">
              구경하러 가기
            </Link>
          </>
        ) : (
          <h1 className={styles.description}>
            믿을 수 있는 <br />
            판다마켓 중고거래
          </h1>
        )}
      </div>
    </section>
  );
}

export default Banner;
