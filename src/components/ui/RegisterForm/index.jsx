import Button from "@ui/Button";
import PasswordInputFormat from "@ui/PasswordInputFormat";
import TextInputFormat from "@ui/TextInputFormat";
import styles from "./styles.module.css";

function RegisterForm({
  values,
  errorMessages,
  isVisible,
  handleInputChange,
  handleVisibleClick,
}) {
  const { email, nickname, password, confirmPassword } = values;
  const { emailError, nicknameError, passwordError, confirmPasswordError } =
    errorMessages;
  const { passwordVisible, confirmPasswordVisible } = isVisible;

  return (
    <form className={styles.layout}>
      <TextInputFormat
        type="email"
        error={emailError}
        value={email}
        onChange={handleInputChange}
      />
      <TextInputFormat
        type="nickname"
        error={nicknameError}
        value={nickname}
        onChange={handleInputChange}
      />
      <PasswordInputFormat
        type="password"
        error={passwordError}
        value={password}
        onChange={handleInputChange}
        onClick={handleVisibleClick}
        visibleType={passwordVisible}
      />
      <PasswordInputFormat
        type="confirmPassword"
        error={confirmPasswordError}
        value={confirmPassword}
        onChange={handleInputChange}
        onClick={handleVisibleClick}
        visibleType={confirmPasswordVisible}
      />
      <Button
        className="register"
        isDisabled={emailError !== "" || passwordError !== ""}
      >
        로그인
      </Button>
    </form>
  );
}

export default RegisterForm;
