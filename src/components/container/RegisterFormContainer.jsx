import { useState } from "react";
import RegisterForm from "@ui/RegisterForm";
import useValidationCheck from "@utils/checkValidationHook";

const Type = "register";

function RegisterFormContainer() {
  const [values, setValues] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });
  const [isVisible, setIsVisible] = useState({
    passwordVisible: false,
    confirmPasswordVisible: false,
  });
  const {
    errorMessages,
    checkEmail,
    checkNickname,
    checkPassword,
    checkConfirmPassword,
  } = useValidationCheck(Type);

  const handleInputChange = (e) => {
    if (e.target.id === "email") {
      checkEmail(e.target.value);
    } else if (e.target.id === "nickname") {
      checkNickname(e.target.value);
    } else if (e.target.id === "password") {
      checkPassword(e.target.value);
    } else if (e.target.id === "confirmPassword") {
      checkConfirmPassword(e.target.value, values.password);
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
