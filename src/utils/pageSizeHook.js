import { useEffect, useState } from "react";

import { calculatePageSize } from "./screenSize";

export default function usePageSize(type) {
  const [pageSize, setPageSize] = useState(() => calculatePageSize(type));
  const delay = 300;
  let timer = null;

  const handlePageSize = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setPageSize(calculatePageSize(type));
    }, delay);
  };

  useEffect(() => {
    window.addEventListener("resize", handlePageSize);

    return () => {
      window.removeEventListener("resize", handlePageSize);
    };
  }, []);

  return pageSize;
}
