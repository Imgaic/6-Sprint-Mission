import { useState } from "react";

import PaginationProvider from "../contexts/paginationContext";
import "../css/App.css";
import { calculatePageSize } from "../module";
import AllItems from "./AllItems";
import BestItems from "./BestItems";
import Header from "./Header";

function App() {
  const [entireItemsPageSize, setEntireItemsPageSize] =
    useState(calculatePageSize());

  const handlePageSize = () => {
    setEntireItemsPageSize(calculatePageSize());
  };

  window.addEventListener("resize", handlePageSize);

  return (
    <>
      <Header />
      <BestItems className="best-items" pageSize={entireItemsPageSize} />
      <PaginationProvider>
        <AllItems className="entire-items" pageSize={entireItemsPageSize} />
      </PaginationProvider>
    </>
  );
}

export default App;
