import styles from "./styles.module.css";

function Input({
  className,
  id,
  placeholder,
  onChange = null,
  onKeyUp = null,
}) {
  return (
    <input
      className={styles[className]}
      id={id}
      name={id}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
    ></input>
  );
}

export default Input;
