import MenuItem from "@ui/MenuItem";
import styles from "./styles.module.css";

function Menu() {
  return (
    <div>
      <menu className={styles.aligner}>
        <MenuItem link="/" name="자유게시판" />
        <MenuItem link="/items" name="중고마켓" className="active" />
      </menu>
    </div>
  );
}

export default Menu;
