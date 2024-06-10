import Article from "@ui/Article";
import styles from "./styles.module.css";

function ArticleList(props) {
  return (
    <section className={styles.section}>
      <Article
        order="first"
        label="Hot Item"
        phrase="인기 상품을 확인해보세요"
        description="가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요"
      />
      <Article
        order="second"
        label="Search"
        phrase="구매를 원하는 상품을 검색하세요"
        description="구매하고 싶은 물품은 검색해서 쉽게 찾아보세요"
      />
      <Article
        order="third"
        label="Register"
        phrase="판매를 원하는 상품을 등록하세요"
        description="어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요"
      />
    </section>
  );
}

export default ArticleList;
