import React, { useState } from "react";
import style from "./contactForm.module.css";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { request } from "../../utils/axios";
import toast from "react-hot-toast";
import useNameValidation from "../../hooks/validation/useNameValidation";
import useEmailValidation from "../../hooks/validation/useEmailValidation";
import usePhoneNumberValidator from "../../hooks/validation/usePhoneNumberValidator";
import LoadingBtn from "../../utils/loadingBtn/LoadingBtn";
const ContactForm = () => {
  const { t } = useTranslation();
  const { name, error: nameError, handleNameChange } = useNameValidation();
  const { email, emailError, handleEmailChange } = useEmailValidation();
  const { phoneNumber, phoneError, handlePhoneChange } =
    usePhoneNumberValidator();
  const [msg, setMsg] = useState("");
  const sendData = (data) => {
    return request({ url: "/contact-us", method: "post", data });
  };
  const { isLoading, mutate } = useMutation(sendData, {
    onSuccess: (data) => {
      toast.success(data?.data?.message);
      handleNameChange("");
      handlePhoneChange("");
      setMsg("");
      handleEmailChange("");
    },
    onError: (data) => {
      toast.error(data?.data?.data?.message);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phoneNumber.trim() || !msg.trim() || !email.trim()) {
      toast.error(t("req"));
    } else if (nameError || emailError || phoneError) {
      return;
    } else {
      const user_message = { name, email, phone: phoneNumber, message: msg };
      console.log("user", user_message);
      mutate(user_message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-100 contact-form">
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="name"
          >
            {t("name")}
          </label>
          <input
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            type="text"
            className="inp w-100"
            id="name"
            required
          />
          {nameError && <p className="error my-1">{nameError}</p>}
        </div>
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="email"
          >
            {t("email")}
          </label>
          <input
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            type="email"
            className="inp w-100"
            id="email"
            required
          />
          {emailError && <p className="error my-1">{emailError}</p>}
        </div>
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="phone"
          >
            {t("phone")}
          </label>
          <input
            value={phoneNumber}
            onChange={(e) => handlePhoneChange(e.target.value)}
            type="text"
            className="inp w-100"
            id="phone"
            required
          />
          {phoneError && <p className="error my-1">{phoneError}</p>}
        </div>
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="msg"
          >
            {t("msg")}
          </label>
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="area w-100"
            required
          ></textarea>
        </div>
        <div
          className={`d-flex justify-content-center  ${style.forgetContainer}`}
        >
          {isLoading ? (
            <LoadingBtn text={t("sending")} />
          ) : (
            <button type="submit" className={`newBtn`}>
              {t("send")}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
