import { useState } from "react";

const useValidateEmail = () => {
  const [email, setEmail] = useState("");
  const [emailCheckError, setEmailCheckError] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(emailValue);
    setIsValidEmail(isValid);
    isValid
      ? setEmailCheckError(null)
      : setEmailCheckError(
          "Please enter a valid email address of the form name@domain.xyz"
        );
  };

  return {
    email,
    emailCheckError,
    isValidEmail,
    handleEmailChange,
  };
};

export default useValidateEmail;
