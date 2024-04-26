import "../css/Menu.css";

function Menu({ link, name, className = "", active }) {
  // const color = link === "/items" && "blue"; 템플릿 문자열에서 불린은 문자열 타입으로 자동 형변환되기 때문에 의도하지 않은 상황이 발생할 수 있다.
  let classNames = `menu ${className} `;
  if (active) className += "active";

  return (
    <a className={classNames} href={link}>
      {name}
    </a>
  );
}

export default Menu;
