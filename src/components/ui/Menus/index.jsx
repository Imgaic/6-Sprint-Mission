import Menu from "../Menu";
import styles from "./styles.module.css";

function Menus() {
  return (
    <div>
      <ul className={styles.aligner}>
        <Menu link="/" name="자유게시판" />
        <Menu link="/items" name="중고마켓" className="active" />
      </ul>
    </div>
  );
}

export default Menus;
