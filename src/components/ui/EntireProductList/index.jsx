import { useNavigate } from "react-router-dom";

import searchIcon from "../../../assets/icons/ic_search.svg";
import { isDesktop } from "../../../utils/screenSize";
import DropdownContainer from "../../container/DropdownContainer";
import Button from "../Button";
import Pagination from "../Pagination";
import ProductCard from "../ProductCard";
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
      <div className={styles.allItems__container}>
        <h2 className={styles.allItems__nameTag}>
          {isDesktop() ? "전체 상품" : "판매 중인 상품"}
        </h2>
        <div className={styles.allItems__searchContainer}>
          <label htmlFor="search" className={styles.allItems__searchIcon}>
            <img src={searchIcon} alt="search"></img>
          </label>
          <input
            id="search"
            className={styles.allItems__search}
            placeholder="검색할 상품을 입력해주세요"
          ></input>
        </div>
        <Button className="addItem" onClick={() => navigate("/additem")}>
          상품 등록하기
        </Button>
        <DropdownContainer order={order} handleOrderClick={handleOrderClick} />
      </div>
      <div className={styles.allItems__layout}>
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
