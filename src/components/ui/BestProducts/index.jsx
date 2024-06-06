import ProductCard from "../ProductCard";
import styles from "./styles.module.css";

function BestProducts({ products }) {
  return (
    <div>
      <h2 className={styles.bestItems__nameTag}>베스트 상품</h2>
      <div className={styles.bestItems__layout}>
        {products.length !== 0 &&
          products.map((product) => {
            return (
              <ProductCard key={product.id} type="best" product={product} />
            );
          })}
      </div>
    </div>
  );
}

export default BestProducts;
