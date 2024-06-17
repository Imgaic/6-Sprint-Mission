import Button from "@ui/Button";
import PasswordInputFormat from "@ui/PasswordInputFormat";
import TextInputFormat from "@ui/TextInputFormat";
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
      <TextInputFormat
        type="email"
        error={emailError}
        value={email}
        onChange={handleInputChange}
      />
      <PasswordInputFormat
        type="password"
        error={passwordError}
        value={password}
        onChange={handleInputChange}
        onClick={handleVisibleClick}
        visibleType={isVisible}
      />
      <Button
        className="loginPage"
        isDisabled={emailError !== "" || passwordError !== ""}
      >
        로그인
      </Button>
    </form>
  );
}

export default LoginForm;
