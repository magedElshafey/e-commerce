import React from "react";
import { useTranslation } from "react-i18next";
import style from "./about.module.css";
const AboutDetails = ({ isReversed, data }) => {
  const { i18n } = useTranslation();
  return (
    <div className="mb-4">
      <div
        className={`${
          isReversed ? "row flex-row-reverse" : "row"
        } justify-content-between`}
      >
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <img alt="about-img" src={data.img} className={style.mainImg} />
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <p className="fw-bolder m-0 p-0  mb-3 fs-4">
            {i18n.language === "ar" ? data.arTitle : data.enTitle}
          </p>
          <p className="text-black-50 m-0 p-0 lh">
            {i18n.language === "ar" ? data.arDesc : data.enDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
