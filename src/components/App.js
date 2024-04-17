import BestItems from "./BestItems";
import EntireItems from "./EntireItems";
import Nav from "./Nav";
import "../css/App.css";
import { useEffect, useState } from "react";
import { getItems } from "../api";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [bestItems, setBestItems] = useState([]);
  // const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleLoad = async (orderQuery) => {
    const { list } = await getItems(orderQuery);
    setItems(list);
  };

  const loadBestItems = async () => {
    const { list } = await getItems("favorite");
    setBestItems(list);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  useEffect(() => {
    loadBestItems();
  }, []);

  return (
    <>
      <Nav />
      <BestItems className="best-items" items={bestItems} />
      <EntireItems
        className="entire-items"
        items={items}
        order={order}
        handleOrder={setOrder}
      />
    </>
  );
}

export default App;
