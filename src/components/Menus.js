import "../css/Menus.css";
import Menu from "./Menu";

function Menus() {
  return (
    <div>
      <Menu link="/" name="자유게시판" className="menus__menu" />
      <Menu link="/items" name="중고마켓" className="menus__menu" active />
    </div>
  );
}

export default Menus;
