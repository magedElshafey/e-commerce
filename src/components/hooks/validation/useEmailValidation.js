// useEmailValidation.js
import { useState } from "react";
import { useTranslation } from "react-i18next";
const useEmailValidation = (initialValue = "") => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError("");
    } else if (!regex.test(value)) {
      setEmailError(t("emailError"));
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    validateEmail(value);
  };
  return {
    email,
    emailError,
    handleEmailChange,
    setEmail,
  };
};

export default useEmailValidation;
