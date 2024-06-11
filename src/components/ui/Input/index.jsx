import styles from "./styles.module.css";

function Input({
  className,
  id,
  placeholder,
  onChange = null,
  onKeyUp = null,
  value,
  type,
}) {
  return (
    <input
      className={styles[className]}
      id={id}
      name={id}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      value={value}
      type={type}
    ></input>
  );
}

export default Input;
