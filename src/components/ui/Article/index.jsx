import first from "@assets/home_01.png";
import second from "@assets/home_02.png";
import third from "@assets/home_03.png";
import styles from "./styles.module.css";

function Article({ order, label, phrase, description }) {
  const ImageSource = {
    first,
    second,
    third,
  };
  const ImageAlt = {
    first: "판다가 상품을 좋아합니다",
    second: "돋보기로 상품을 검색합니다",
    third: "상품을 등록합니다",
  };

  return order === "first" || order === "third" ? (
    <article className={styles.container}>
      <img
        className={styles.image}
        src={ImageSource[order]}
        alt={ImageAlt[order]}
      />
      <div>
        <div className={styles.label}>{label}</div>
        <h2 className={styles.phrase}>{phrase}</h2>
        <p className={`${styles.description} ${styles[order]}`}>
          {description}
        </p>
      </div>
    </article>
  ) : (
    <article className={`${styles.container} ${styles.right}`}>
      <div className={styles.aligner}>
        <div className={styles.label}>{label}</div>
        <h2 className={styles.phrase}>{phrase}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <img
        className={styles.image}
        src={ImageSource[order]}
        alt={ImageAlt[order]}
      />
    </article>
  );
}

export default Article;
