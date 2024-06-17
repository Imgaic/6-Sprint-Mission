import { useNavigate } from "react-router-dom";
import Button from "@ui/Button";
import Nav from "@ui/Nav";
import ProductDetail from "@ui/ProductDetail";

function ProductDetailPage() {
  const navigate = useNavigate();

  return (
    <>
      <Nav>
        <Button className="login" onClick={() => navigate("/login")}>
          로그인
        </Button>
      </Nav>
      <ProductDetail />
    </>
  );
}

export default ProductDetailPage;
