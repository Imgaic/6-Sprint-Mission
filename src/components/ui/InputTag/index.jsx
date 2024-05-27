import Input from "../Input";
import Tag from "../InputtedTag";
import styles from "./styles.module.css";

function InputTag({ id, placeholder, onKeyUp, onDelete, tags }) {
  return (
    <div>
      <Input
        className="input"
        id={id}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
      />
      <div className={styles.tagsPresenter}>
        {tags.length !== 0 &&
          tags.map((tag) => {
            return <Tag tag={tag} key={tag} onDelete={onDelete} />;
          })}
      </div>
    </div>
  );
}

export default InputTag;
