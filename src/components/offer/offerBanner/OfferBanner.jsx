import React from "react";
import style from "./offerBanner.module.css";
import { useTranslation } from "react-i18next";
const OfferBanner = ({ img }) => {
  const { t } = useTranslation();
  return (
    <div className={style.mainContainer}>
      <img alt="offer-banner" src={img} className={style.mainImg} />
      <div className={style.overlay}>
        <div className="d-flex flex-column align-items-center">
          <p className="fw-bolder fs-4 m-0 p-0  text-white">{t("offers")}</p>
          <p className="text-white n-0 p-0">{t("offerDesc")}</p>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
