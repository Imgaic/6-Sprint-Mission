import { useEffect, useState } from "react";
import EntireProductList from "@ui/EntireProductList";
import { getProductList } from "@api/api";
import usePageSize from "@utils/pageSizeHook";

function EntireProductListContainer(props) {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState("1");
  const [errorMessage, setErrorMessage] = useState("");
  const pageSize = usePageSize("entire");

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
    loadProducts({ order, page, pageSize });
  }, [order, page, pageSize]);

  const handleOrderClick = (e) => {
    setOrder(e.target.id);
  };

  const handlePaginationClick = (e) => {
    if (e.currentTarget.id === "nextPage") {
      if (page !== "5") {
        const nextPage = String(Number(page) + 1);
        setPage(nextPage);
      }
    } else if (e.currentTarget.id === "previousPage") {
      if (page !== "1") {
        const previousPage = String(Number(page) - 1);
        setPage(previousPage);
      }
    } else {
      setPage(e.currentTarget.id);
    }
  };

  if (errorMessage) return;

  return (
    <EntireProductList
      products={products}
      order={order}
      page={page}
      handleOrderClick={handleOrderClick}
      handlePaginationClick={handlePaginationClick}
    />
  );
}

export default EntireProductListContainer;
