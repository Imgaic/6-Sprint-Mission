import { useEffect, useState } from "react";
import BestProducts from "@ui/BestProducts";
import { getProductList } from "@api/api";
import usePageSize from "@utils/pageSizeHook";

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

  if (errorMessage) return;

  return <BestProducts products={products} />;
}

export default BestProductsContainer;
