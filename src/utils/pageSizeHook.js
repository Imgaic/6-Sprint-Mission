import { useEffect, useState } from "react";
import { calculatePageSize } from "@utils/screenSize";

export default function usePageSize(type) {
  const [pageSize, setPageSize] = useState(() => calculatePageSize(type));
  const delay = 300;
  let timer = null;

  const handlePageSizeChange = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setPageSize(calculatePageSize(type));
    }, delay);
  };

  useEffect(() => {
    window.addEventListener("resize", handlePageSizeChange);

    return () => {
      window.removeEventListener("resize", handlePageSizeChange);
    };
  }, []);

  return pageSize;
}
