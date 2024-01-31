import { useState } from "react";
import { useTranslation } from "react-i18next";
const usePhoneNumberValidator = () => {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState("");

  const [phoneError, setPhoneError] = useState("");

  const validatePhoneNumber = (value) => {
    const regex = /^[0-9]+$/;
    if (!value) {
      setPhoneError("");
    } else if (value.length !== 11 || !regex.test(value)) {
      setPhoneError(t("phoneError"));
    } else {
      setPhoneError("");
    }
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    validatePhoneNumber(value);
  };

  return {
    phoneNumber,
    phoneError,
    handlePhoneChange,
  };
};
export default usePhoneNumberValidator;
