import { useState } from "react";

const EmailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

export default function useValidationCheck(type) {
  const initialErrorMessages =
    type === "login"
      ? {
          emailError: "initial",
          passwordError: "initial",
        }
      : {
          emailError: "initial",
          nicknameError: "initial",
          passwordError: "initial",
          confirmPasswordError: "initial",
        };

  const [errorMessages, setErrorMessages] = useState(initialErrorMessages);

  const setError = (field, message) => {
    setErrorMessages((prev) => ({ ...prev, [field]: message }));
  };

  const checkEmail = (value) => {
    setError(
      "emailError",
      !value
        ? "이메일을 입력해주세요"
        : EmailPattern.test(value)
          ? ""
          : "잘못된 이메일 형식입니다",
    );
  };

  const checkNickname = (value) => {
    setError("nickNameError", !value ? "닉네임을 입력해주세요" : "");
  };

  const checkPassword = (value) => {
    setError(
      "passwordError",
      !value
        ? "비밀번호를 입력해주세요"
        : value.length < 8
          ? "비밀번호를 8자 이상 입력해주세요"
          : "",
    );
  };

  const checkConfirmPassword = (value, password) => {
    setError(
      "confirmPasswordError",
      value === password ? "" : "비밀번호가 일치하지 않습니다",
    );
  };

  const validators = {
    checkEmail,
    checkPassword,
  };

  if (type !== "login") {
    validators.checkNickname = checkNickname;
    validators.checkConfirmPassword = checkConfirmPassword;
  }

  return { errorMessages, ...validators };
}
