import BestItems from "./BestItems";
import EntireItems from "./EntireItems";
import Nav from "./Nav";
import "../css/App.css";
import { useEffect, useState } from "react";
import { getItems } from "../api";
import PageContext from "../contexts/pageContext";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [bestItems, setBestItems] = useState([]);
  const [page, setPage] = useState("1");
  // const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleLoad = async (options) => {
    const { list } = await getItems(options);
    setItems(list);
  };

  const loadBestItems = async (options) => {
    const { list } = await getItems(options);
    setBestItems(list);
  };

  useEffect(() => {
    loadBestItems({ order: "favorite", page: "1" });
  }, []);

  useEffect(() => {
    handleLoad({ order, page });
  }, [order, page]);

  return (
    <>
      <Nav />
      <BestItems className="best-items" items={bestItems} />
      <PageContext.Provider value={{ page, setPage }}>
        <EntireItems
          className="entire-items"
          items={items}
          order={order}
          handleOrder={setOrder}
        />
      </PageContext.Provider>
    </>
  );
}

export default App;
