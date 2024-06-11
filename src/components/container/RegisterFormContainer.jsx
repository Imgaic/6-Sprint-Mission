import { useState } from "react";
import RegisterForm from "@ui/RegisterForm";

const EmailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function RegisterFormContainer() {
  const [values, setValues] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    emailError: "initial",
    nicknameError: "initial",
    passwordError: "initial",
    confirmPasswordError: "initial",
  });
  const [isVisible, setIsVisible] = useState({
    passwordVisible: false,
    confirmPasswordVisible: false,
  });

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
    } else if (e.target.id === "nickname") {
      if (!e.target.value) {
        setErrorMessages((prev) => ({
          ...prev,
          nicknameError: "닉네임을 입력해주세요",
        }));
      } else
        setErrorMessages((prev) => ({
          ...prev,
          nicknameError: "",
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
    } else if (e.target.id === "confirmPassword") {
      if (e.target.value !== values.password) {
        setErrorMessages((prev) => ({
          ...prev,
          confirmPasswordError: "비밀번호가 일치하지 않습니다",
        }));
      } else
        setErrorMessages((prev) => ({
          ...prev,
          confirmPasswordError: "",
        }));
    }

    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleVisibleClick = (e) => {
    setIsVisible((prev) => ({
      ...prev,
      [e.target.id]: !prev[e.target.id],
    }));
  };

  return (
    <RegisterForm
      values={values}
      errorMessages={errorMessages}
      isVisible={isVisible}
      handleInputChange={handleInputChange}
      handleVisibleClick={handleVisibleClick}
    />
  );
}

export default RegisterFormContainer;
