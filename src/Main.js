import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItemPage from "@pages/AddItemPage";
import MainPage from "@pages/MainPage";
import ProductDetailPage from "@pages/ProductDetailPage";
import ProductListPage from "@pages/ProductListPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/items">
          <Route index element={<ProductListPage />} />
          <Route path="/items/:id" element={<ProductDetailPage />} />
        </Route>
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
