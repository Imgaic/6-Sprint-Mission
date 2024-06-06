import { useEffect, useState } from "react";

import { getProductList } from "../../api/api";
import usePageSize from "../../utils/pageSizeHook";
import EntireProductList from "../ui/EntireProductList";

function EntireProductListContainer(props) {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState("1");
  const pageSize = usePageSize("entire");

  const loadProducts = async (options) => {
    const { list } = await getProductList(options);
    setProducts(list);
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
