import { useNavigate } from "react-router-dom";
import DropdownContainer from "@container/DropdownContainer";
import Button from "@ui/Button";
import Pagination from "@ui/Pagination";
import ProductCard from "@ui/ProductCard";
import { isDesktop } from "@utils/screenSize";
import searchIcon from "@assets/icons/ic_search.svg";
import styles from "./styles.module.css";

function EntireProductList({
  products,
  order,
  page,
  handleOrderClick,
  handlePaginationClick,
}) {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.nameTag}>
          {isDesktop() ? "전체 상품" : "판매 중인 상품"}
        </h2>
        <div className={styles.searchContainer}>
          <label htmlFor="search" className={styles.searchIcon}>
            <img src={searchIcon} alt="magnifying glasses"></img>
          </label>
          <input
            id="search"
            className={styles.search}
            placeholder="검색할 상품을 입력해주세요"
          ></input>
        </div>
        <Button className="addItem" onClick={() => navigate("/additem")}>
          상품 등록하기
        </Button>
        <DropdownContainer order={order} handleOrderClick={handleOrderClick} />
      </div>
      <div className={styles.layout}>
        {products.length !== 0 &&
          products.map((product) => {
            return (
              <ProductCard key={product.id} type="all" product={product} />
            );
          })}
      </div>
      <Pagination page={page} handlePaginationClick={handlePaginationClick} />
    </div>
  );
}

export default EntireProductList;
