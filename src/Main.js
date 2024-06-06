import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddItemPage from "./Pages/AddItemPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ProductListPage from "./Pages/ProductListPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
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
