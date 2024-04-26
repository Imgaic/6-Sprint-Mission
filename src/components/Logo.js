import logo from "../assets/logo.png";
import logo_mobile from "../assets/logo_mobile.png";
import "../css/Logo.css";

function Logo() {
  return (
    <a href="/">
      <img
        className="logo__image logo__desktop"
        src={logo}
        alt="판다마켓 로고"
      ></img>
      <img
        className="logo__image logo__mobile"
        src={logo_mobile}
        alt="판다마켓 모바일 로고"
      ></img>
    </a>
  );
}

export default Logo;
