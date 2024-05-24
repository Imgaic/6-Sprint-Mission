import Header from "../components/Header";
import LoginLink from "../components/LoginLink";
import ProductDetail from "../components/ProductDetail";

function ProductDetailPage(props) {
  return (
    <>
      <Header>
        <LoginLink />
      </Header>
      <ProductDetail />
    </>
  );
}

export default ProductDetailPage;
