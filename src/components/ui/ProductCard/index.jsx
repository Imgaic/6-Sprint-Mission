import { useNavigate } from "react-router-dom";

import heartIcon from "../../../assets/icons/ic_heart.svg";
import styles from "./styles.module.css";

function ProductCard({ product, type }) {
  const navigate = useNavigate();
  const { id, images, name, price, favoriteCount } = product;
  const itemType =
    type === "best" ? "bestItems__imgContainer" : "allItems__imgContainer";

  return (
    <div
      className={styles.productCard}
      onClick={() => navigate(`/items/${id}`)}
    >
      <div className={styles[itemType]}>
        <img className={styles.item__img} src={images[0]} alt="item"></img>
      </div>
      <div className={styles.item__descriptionContainer}>
        <div className={styles.item__name}>{name}</div>
        <div
          className={styles.item__price}
        >{`${price.toLocaleString()}원`}</div>
        <div className={styles.item__favoriteContainer}>
          <img src={heartIcon} alt="heart-icon"></img>
          <div className={styles.item__favoriteCount}>{favoriteCount}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
