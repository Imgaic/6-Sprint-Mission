import Button from "@ui/Button";
import ErrorMessage from "@ui/ErrorMessage";
import Input from "@ui/Input";
import invisibleIcon from "@assets/icons/ic_invisible.svg";
import visibleIcon from "@assets/icons/ic_visible.svg";
import styles from "./styles.module.css";

function LoginForm({
  values,
  errorMessages,
  isVisible,
  handleInputChange,
  handleVisibleClick,
}) {
  const { email, password } = values;
  const { emailError, passwordError } = errorMessages;

  return (
    <form className={styles.layout}>
      <div>
        <label htmlFor="email" className={styles.label}>
          이메일
        </label>
        <Input
          className={
            emailError === "initial" || emailError === "" ? "auth" : "authError"
          }
          id="email"
          placeholder="이메일을 입력해주세요"
          onChange={handleInputChange}
          value={email}
        />
        <ErrorMessage errorMessage={emailError} />
      </div>
      <div className={styles.container}>
        <label htmlFor="password" className={styles.label}>
          비밀번호
        </label>
        <img
          src={isVisible ? visibleIcon : invisibleIcon}
          className={styles.visibleButton}
          onClick={handleVisibleClick}
        />
        <Input
          className={
            passwordError === "initial" || passwordError === ""
              ? "auth"
              : "authError"
          }
          id="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleInputChange}
          value={password}
          type={isVisible ? "text" : "password"}
        />
        <ErrorMessage errorMessage={passwordError} />
      </div>
      <Button
        className="auth"
        isDisabled={emailError !== "" || passwordError !== ""}
      >
        로그인
      </Button>
    </form>
  );
}

export default LoginForm;
