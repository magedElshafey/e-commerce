// useNameValidation.js
import { useState } from "react";
import { useTranslation } from "react-i18next";
const useNameValidation = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const validateName = (value) => {
    // Regular expression to match only alphabetic characters and spaces
    const regex = /^[a-zA-Z\s]*$/;

    if (!value.trim()) {
      setError("");
    } else if (!regex.test(value)) {
      setError(t("nameError"));
    } else {
      setError("");
    }
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    validateName(value);
  };

  return {
    name,
    error,
    handleNameChange,
    setName,
  };
};

export default useNameValidation;
