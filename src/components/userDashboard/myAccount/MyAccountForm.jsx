import React from "react";
import style from "./myAccountForm.module.css";
import { useTranslation } from "react-i18next";
const MyAccountForm = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p className={`fw500 m-0 p-0 mb-2 ${style.title}`}>{t("accDetails")}</p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className={`${style.label} d-block mb-1`}>
            {t("name")}
          </label>
          <input type="text" id="name" className="inp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className={`${style.label} d-block mb-1`}>
            {t("email")}
          </label>
          <input type="email" id="email" className="inp" />
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className={`${style.label} d-block mb-1`}>
            {t("phone")}
          </label>
          <input type="number" id="phone" className="inp" />
        </div>
        <p className={`fw500 m-0 p-0 mb-2 ${style.title}`}>{t("password")}</p>
        <div className="mb-3">
          <label htmlFor="password" className={`${style.label} d-block mb-1`}>
            {t("oldPass")}
          </label>
          <input type="password" id="password" className="inp" />
        </div>
        <div className="mb-4">
          <label htmlFor="newPass" className={`${style.label} d-block mb-1`}>
            {t("newPass")}
          </label>
          <input type="password" id="newPass" className="inp" />
        </div>
        <button className="newBtn">{t("save")}</button>
      </form>
    </div>
  );
};

export default MyAccountForm;
