import React from "react";
import style from "./offerCard.module.css";
import { useTranslation } from "react-i18next";
const OfferCard = ({ data }) => {
  const { i18n } = useTranslation();
  return (
    <div className={style.card}>
      <img alt="offer/img" className={style.mainImg} src={data.img} />
      <div>
        <p className={`m-0 p-0 mb-1 ${style.title}`}>
          {i18n.language === "ar" ? data.arTitle : data.title}
        </p>
        <p className={`m-0 p-0 ${style.desc}`}>
          {i18n.language === "ar" ? data.arDesc : data.desc}
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
