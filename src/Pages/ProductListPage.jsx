import { useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";
import Nav from "../components/ui/Nav";
import ProductList from "../components/ui/ProductList";

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
