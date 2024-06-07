import { useEffect, useState } from "react";

import { getProductList } from "../../api/api";
import usePageSize from "../../utils/pageSizeHook";
import BestProducts from "../ui/BestProducts";

function BestProductsContainer() {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const pageSize = usePageSize("best");

  const loadProducts = async (options) => {
    try {
      const list = await getProductList(options);
      setProducts(list);
    } catch (error) {
      if (error.name === "TypeError") {
        setErrorMessage("네트워크를 확인하세요");
      } else if (error.name === "HttpError") {
        setErrorMessage(error.status);
      }
    }
  };

  useEffect(() => {
    loadProducts({
      order: "favorite",
      page: "1",
      pageSize: pageSize,
    });
  }, [pageSize]);

  return !errorMessage && <BestProducts products={products} />;
}

export default BestProductsContainer;
