import ProductCard from "@ui/ProductCard";
import styles from "./styles.module.css";

function BestProducts({ products }) {
  return (
    <div>
      <h2 className={styles.label}>베스트 상품</h2>
      <div className={styles.layout}>
        {products.length !== 0 &&
          products.map((product) => (
            <ProductCard key={product.id} type="best" product={product} />
          ))}
      </div>
    </div>
  );
}

export default BestProducts;
