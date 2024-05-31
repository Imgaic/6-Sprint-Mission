import BestProductsContainer from "../../container/BestProductsContainer";
import EntireProductListContainer from "../../container/EntireProductListContainer";
import styles from "./styles.module.css";

function ProductList() {
  return (
    <div className={styles.layout}>
      <BestProductsContainer />
      <EntireProductListContainer />
    </div>
  );
}

export default ProductList;
