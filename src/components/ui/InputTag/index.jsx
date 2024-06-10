import Input from "@ui/Input";
import Tag from "@ui/InputtedTag";
import styles from "./styles.module.css";

function InputTag({
  id,
  placeholder,
  onKeyUp,
  onDelete,
  onChange,
  tags,
  value,
}) {
  return (
    <div>
      <Input
        className="input"
        id={id}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
        onChange={onChange}
        value={value}
      />
      <div className={styles.tagsPresenter}>
        {tags.map((tag) => (
          <Tag tag={tag} key={tag} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default InputTag;
