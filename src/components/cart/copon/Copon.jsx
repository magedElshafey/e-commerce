import React from "react";
import style from "./copon.module.css";
import { useTranslation } from "react-i18next";
const Copon = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p className={`m-0 p-0 mb-2 ${style.title}`}>{t("haveCopon")}</p>
      <p className="m-0 p-0 text-black-50 mb-2">{t("addCopon")}</p>
      <div className={style.coponContainer}>
        <input className={style.inp} type="text" placeholder={t("coponCode")} />
        <button className={style.btn}>{t("activate")}</button>
      </div>
    </div>
  );
};

export default Copon;
