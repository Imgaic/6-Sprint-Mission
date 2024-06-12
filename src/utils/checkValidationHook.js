import { useState } from "react";

const EmailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

export default function useValidationCheck(type) {
  const [errorMessages, setErrorMessages] = useState(() => {
    if (type === "login") {
      return {
        emailError: "initial",
        passwordError: "initial",
      };
    } else {
      return {
        emailError: "initial",
        nicknameError: "initial",
        passwordError: "initial",
        confirmPasswordError: "initial",
      };
    }
  });

  const checkEmail = (value) => {
    if (!value || !EmailPattern.test(value)) {
      setErrorMessages((prev) => ({
        ...prev,
        emailError: !value
          ? "이메일을 입력해주세요"
          : "잘못된 이메일 형식입니다",
      }));
    } else
      setErrorMessages((prev) => ({
        ...prev,
        emailError: "",
      }));
  };

  const checkNickname = (value) => {
    if (!value) {
      setErrorMessages((prev) => ({
        ...prev,
        nicknameError: "닉네임을 입력해주세요",
      }));
    } else
      setErrorMessages((prev) => ({
        ...prev,
        nicknameError: "",
      }));
  };

  const checkPassword = (value) => {
    if (!value || value.length < 8) {
      setErrorMessages((prev) => ({
        ...prev,
        passwordError: !value
          ? "비밀번호를 입력해주세요"
          : "비밀번호를 8자 이상 입력해주세요",
      }));
    } else
      setErrorMessages((prev) => ({
        ...prev,
        passwordError: "",
      }));
  };

  const checkConfirmPassword = (value, password) => {
    if (value !== password) {
      setErrorMessages((prev) => ({
        ...prev,
        confirmPasswordError: "비밀번호가 일치하지 않습니다",
      }));
    } else
      setErrorMessages((prev) => ({
        ...prev,
        confirmPasswordError: "",
      }));
  };

  return type === "login"
    ? {
        errorMessages,
        checkEmail,
        checkPassword,
      }
    : {
        errorMessages,
        checkEmail,
        checkNickname,
        checkPassword,
        checkConfirmPassword,
      };
}
