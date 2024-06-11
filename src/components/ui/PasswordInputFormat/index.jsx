import ErrorMessage from "@ui/ErrorMessage";
import Input from "@ui/Input";
import invisibleIcon from "@assets/icons/ic_invisible.svg";
import visibleIcon from "@assets/icons/ic_visible.svg";
import styles from "./styles.module.css";

function PasswordInputFormat({
  type,
  error,
  value,
  onChange,
  onClick,
  visibleType,
}) {
  return (
    <div className={styles.container}>
      <label htmlFor={type} className={styles.label}>
        {type === "password" ? "비밀번호" : "비밀번호 확인"}
      </label>
      <Input
        className={error === "initial" || error === "" ? "auth" : "authError"}
        id={type}
        placeholder={`${type === "password" ? "비밀번호를 입력해주세요" : "비밀번호를 다시 한 번 입력해주세요"}`}
        value={value}
        onChange={onChange}
        type={visibleType ? "text" : "password"}
      />
      <img
        src={visibleType ? visibleIcon : invisibleIcon}
        className={styles.visibleButton}
        onClick={onClick}
        alt={visibleType ? "eye shaped" : "invisible eye shaped"}
        id={`${type === "password" ? "passwordVisible" : "confirmPasswordVisible"}`}
      />
      {error !== "initial" && error !== "" && (
        <ErrorMessage errorMessage={error} />
      )}
    </div>
  );
}

export default PasswordInputFormat;
