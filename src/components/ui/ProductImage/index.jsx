import styles from "./styles.module.css";

function ProductImage({ src }) {
  return <img className={styles.productImage} src={src} alt="상품" />;
}

export default ProductImage;
