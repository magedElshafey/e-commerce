import React, { useState } from "react";
import style from "./contactForm.module.css";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { request } from "../../utils/axios";
import Spinner from "../../utils/spinner/Spinner";
const ContactForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const sendData = (data) => {
    return request({ url: "/send-message", method: "post", data });
  };
  const { isLoading, mutate } = useMutation(sendData, {
    onSuccess: (data) => {
      console.log(data?.data);
    },
    onError: (data) => {},
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <p className="fw-bold m-0 p-0 mb-2 fs-5">{t("contact")}</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="name"
          >
            {t("name")}
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="inp"
            id="name"
          />
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
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="inp"
            id="email"
          />
        </div>
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="phone"
          >
            {t("phone")}
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            className="inp"
            id="phone"
          />
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
            className="area"
          ></textarea>
        </div>
        <div
          className={`d-flex justify-content-center mb-3 ${style.forgetContainer}`}
        >
          <button type="submit" className={`newBtn`}>
            {t("send")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
