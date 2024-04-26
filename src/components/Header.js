import "../css/Header.css";
import LoginLink from "./LoginLink";
import Logo from "./Logo";
import Menus from "./Menus";

function Header() {
  return (
    <div className="header">
      <div className="header__navbar">
        <Logo />
        <Menus />
      </div>
      <LoginLink />
    </div>
  );
}

export default Header;
