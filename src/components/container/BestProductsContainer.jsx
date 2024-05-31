import { useEffect, useState } from "react";

import { getProductList } from "../../api/api";
import usePageSize from "../../utils/pageSizeHook";
import BestProducts from "../ui/BestProducts";

function BestProductsContainer() {
  const [products, setProducts] = useState([]);
  const pageSize = usePageSize("best");

  const loadProducts = async (options) => {
    const { list } = await getProductList(options);
    setProducts(list);
  };

  useEffect(() => {
    loadProducts({
      order: "favorite",
      page: "1",
      pageSize: pageSize,
    });
  }, [pageSize]);

  return <BestProducts products={products} />;
}

export default BestProductsContainer;
