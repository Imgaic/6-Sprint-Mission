import ReturnButton from "../ReturnButton";
import CommentsContainer from "../containers/CommentsContainer";
import ProductPresenterContainer from "../containers/ProductPresenterContainer";
import styles from "./styles.module.css";

function ProductDetail() {
  return (
    <div className={styles.aligner}>
      <ProductPresenterContainer />
      <CommentsContainer />
      <ReturnButton />
    </div>
  );
}

export default ProductDetail;
