import ErrorMessage from "@ui/ErrorMessage";
import Input from "@ui/Input";
import styles from "./styles.module.css";

function TextInputFormat({ type, error, value, onChange }) {
  return (
    <div>
      <label htmlFor={type} className={styles.label}>
        {type === "email" ? "이메일" : "닉네임"}
      </label>
      <Input
        className={error === "initial" || error === "" ? "auth" : "authError"}
        id={type}
        placeholder={`${type === "email" ? "이메일" : "닉네임"}을 입력해주세요`}
        value={value}
        onChange={onChange}
      />
      {error !== "initial" && error !== "" && (
        <ErrorMessage errorMessage={error} />
      )}
    </div>
  );
}

export default TextInputFormat;
