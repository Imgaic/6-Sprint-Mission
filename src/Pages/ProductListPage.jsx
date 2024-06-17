import { useNavigate } from "react-router-dom";
import Button from "@ui/Button";
import Nav from "@ui/Nav";
import ProductList from "@ui/ProductList";

function ProductListPage() {
  const navigate = useNavigate();

  return (
    <>
      <Nav>
        <Button className="login" onClick={() => navigate("/login")}>
          로그인
        </Button>
      </Nav>
      <ProductList />
    </>
  );
}

export default ProductListPage;
