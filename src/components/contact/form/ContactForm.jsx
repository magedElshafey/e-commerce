import React from "react";
import style from "./contactForm.module.css";
import { useTranslation } from "react-i18next";
const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p className="fw-bold m-0 p-0 mb-2 fs-5">{t("contact")}</p>
      <form>
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="name"
          >
            {t("name")}
          </label>
          <input type="text" className="inp" id="name" />
        </div>
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="email"
          >
            {t("email")}
          </label>
          <input type="email" className="inp" id="email" />
        </div>
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="phone"
          >
            {t("phone")}
          </label>
          <input type="number" className="inp" id="phone" />
        </div>
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="msg"
          >
            {t("msg")}
          </label>
          <textarea className="area"></textarea>
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
