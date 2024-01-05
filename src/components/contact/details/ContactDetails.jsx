import React from "react";
import style from "./contactDetails.module.css";
import { useTranslation } from "react-i18next";
const ContactDetails = ({ data }) => {
  const { i18n } = useTranslation();
  return (
    <div
      className={`${style.card} d-flex flex-column align-items-center justify-content-center gap-1`}
    >
      <img alt="icon-img" className={style.img} src={data.img} />
      <p className={`${style.title} text-uppercase m-0 p-0`}>
        {i18n.language === "ar" ? data.arTitle : data.enTitle}
      </p>
      <p className={`${style.desc} m-0 p-0`}>{data.data}</p>
    </div>
  );
};

export default ContactDetails;
