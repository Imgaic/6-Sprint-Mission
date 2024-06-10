import { useNavigate } from "react-router-dom";
import ArticleList from "@ui/ArticleList";
import Banner from "@ui/Banner";
import Button from "@ui/Button";
import Footer from "@ui/Footer";
import Nav from "@ui/Nav";

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <Nav page="main">
        <Button className="mainPageLogin" onClick={() => navigate("/login")}>
          로그인
        </Button>
      </Nav>
      <Banner position="top" />
      <ArticleList />
      <Banner position="bottom" />
      <Footer />
    </>
  );
}

export default MainPage;
