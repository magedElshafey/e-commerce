import { useState } from "react";
import { useTranslation } from "react-i18next";
const usePhoneNumberValidator = () => {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState("");

  const [phoneError, setPhoneError] = useState("");

  const validatePhoneNumber = (value) => {
    const regex = /^[0-9]{11}$/; // Adjusted regex for 11-digit phone number
    if (!value) {
      setPhoneError("");
    } else if (!regex.test(value)) {
      setPhoneError(t("phoneError"));
    } else {
      setPhoneError("");
    }
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
    validatePhoneNumber(value);
  };

  return {
    phoneNumber,
    phoneError,
    handlePhoneChange,
    setPhoneNumber,
  };
};
export default usePhoneNumberValidator;
