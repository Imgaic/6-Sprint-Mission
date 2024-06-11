import { useState } from "react";
import LoginForm from "@ui/LoginForm";

const EmailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function LoginFormContainer() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    emailError: "initial",
    passwordError: "initial",
  });
  const [isVisible, setIsVisible] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.id === "email") {
      if (!e.target.value || !EmailPattern.test(e.target.value)) {
        setErrorMessages((prev) => ({
          ...prev,
          emailError: !e.target.value
            ? "이메일을 입력해주세요"
            : "잘못된 이메일 형식입니다",
        }));
      } else
        setErrorMessages((prev) => ({
          ...prev,
          emailError: "",
        }));
    } else if (e.target.id === "password") {
      if (!e.target.value || e.target.value.length < 8) {
        setErrorMessages((prev) => ({
          ...prev,
          passwordError: !e.target.value
            ? "비밀번호를 입력해주세요"
            : "비밀번호를 8자 이상 입력해주세요",
        }));
      } else
        setErrorMessages((prev) => ({
          ...prev,
          passwordError: "",
        }));
    }

    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <LoginForm
      values={values}
      errorMessages={errorMessages}
      isVisible={isVisible}
      handleInputChange={handleInputChange}
      handleVisibleClick={() => setIsVisible((prev) => !prev)}
    />
  );
}

export default LoginFormContainer;
