import React from "react";
import style from "./regForm.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
const RegForm = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p className="fw-bold m-0 p-0 mb-2 fs-5">{t("signUp")}</p>
      <div className="d-flex align-items-center gap-1 mb-4">
        <p className="m-0 p-0 text-black-50">{t("already")}</p>
        <Link to="/login" className={style.title}>
          {t("signIn")}
        </Link>
      </div>
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
            htmlFor="userName"
          >
            {t("userName")}
          </label>
          <input type="text" className="inp" id="userName" />
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
        <div className="mb-3">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="password"
          >
            {t("password")}
          </label>
          <input type="password" className="inp" id="password" />
        </div>
        <div
          className={`d-flex align-items-center mb-5 justify-content-between ${style.forgetContainer}`}
        >
          <div className="d-flex align-items-center gap-1">
            <input type="checkbox" id="check" className="check" />
            <label
              className="d-block m-0  p-0 text-black-50 label"
              htmlFor="check"
            >
              {t("remember")}
            </label>
          </div>
          <Link to="/forget" className="text-black fw-bolder">
            {t("forget")}
          </Link>
        </div>
        <div
          className={`d-flex justify-content-center mb-3 ${style.forgetContainer}`}
        >
          <button className={`newBtn`}>{t("signIn")}</button>
        </div>
        <div className={style.forgetContainer}>
          <div className="faceLine "></div>
        </div>
        <div className={`${style.forgetContainer} mt-3`}>
          <div className="d-flex align-items-center justify-content-between  gap-4">
            <button
              className={`d-flex align-items-center justify-content-between px-2 py-1 ${style.socialBtn} gap-4`}
            >
              <p className="m-0 p-0">{t("google")}</p>
              <img src={google} alt="google/icon" />
            </button>
            <button
              className={`d-flex align-items-center justify-content-between px-2 py-1 ${style.socialBtn} gap-4`}
            >
              <p className="m-0 p-0">{t("facebook")}</p>
              <img src={facebook} alt="google/icon" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegForm;
