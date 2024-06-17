import { useState } from "react";
import LoginForm from "@ui/LoginForm";
import useValidationCheck from "@utils/checkValidationHook";

const Type = "login";

function LoginFormContainer() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const { errorMessages, checkEmail, checkPassword } = useValidationCheck(Type);

  const handleInputChange = (e) => {
    if (e.target.id === "email") {
      checkEmail(e.target.value);
    } else if (e.target.id === "password") {
      checkPassword(e.target.value);
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
