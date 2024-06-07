import ProductDescription from "@ui/ProductDescription";
import ProductImage from "@ui/ProductImage";
import styles from "./styles.module.css";

function ProductPresenter({ product }) {
  return (
    <div className={styles.productPresenter}>
      <ProductImage src={product?.images?.[0]} />
      {product && <ProductDescription product={product} />}
    </div>
  );
}

export default ProductPresenter;
