import Item from "./Item";
import "../css/EntireItems.css";
import searchIcon from "../assets/icons/ic_search.svg";
// import { useRef } from "react";

function EntireItems({ className, items, order, handleOrder }) {
  const orderView = order === "recent" ? "최신순" : "좋아요순";
  // const dropDownRef = useRef();

  const handleNewestClick = () => {
    handleOrder("recent");
  };

  const handleBestClick = () => {
    handleOrder("favorite");
  };

  const toggleDropDown = () => {
    const dropDownNode = document.querySelector(".entire-items__dropped"); //굳이 ref 안써도 됨
    dropDownNode.classList.toggle("entire-items__dropped--hided");
  };

  return (
    <div className={className}>
      <div className="entire-items__container">
        <h2 className="entire-items__name-tag">전체 상품</h2>
        <div className="entire-items__flex-container">
          <div className="entire-items__search-container">
            <label htmlFor="search" className="entire-items__search-icon">
              <img src={searchIcon} alt="search"></img>
            </label>
            <input
              id="search"
              className="entire-items__search"
              placeholder="검색할 상품을 입력해주세요"
            ></input>
          </div>
          <a className="entire-items__add-item-link" href="/additem">
            상품 등록하기
          </a>
          <div className="entire-items__drop-down" onClick={toggleDropDown}>
            <button className="entire-items__order-select">{orderView}</button>
            <div className="entire-items__dropped entire-items__dropped--hided">
              <button
                className="entire-items__order-option entire-items__order-option--top"
                onClick={handleNewestClick}
              >
                최신순
              </button>
              <button
                className="entire-items__order-option entire-items__order-option--bottom"
                onClick={handleBestClick}
              >
                좋아요순
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="entire-items__layout">
        {items.map((item) => {
          return (
            <Item key={item.id} className="item__img-container" item={item} />
          );
        })}
      </div>
    </div>
  );
}

export default EntireItems;
