import React from "react";
import style from "./contactDetails.module.css";
import { useTranslation } from "react-i18next";
import add from "../../../assets/address.svg";
import call from "../../../assets/call.svg";
import mail from "../../../assets/mail.svg";
const ContactDetails = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="row justify-content-center mb-4">
      <div className="col-12 col-md-4 mb-3 mb-md-0">
        <div
          className={`${style.card} d-flex flex-column align-items-center justify-content-center gap-1`}
        >
          <img alt="icon-img" className={style.img} src={call} />
          <p className={`${style.title} text-uppercase m-0 p-0`}>
            {t("phone")}
          </p>
          <p className={`${style.desc} m-0 p-0 text-lowercase`}>{data.phone}</p>
        </div>
      </div>
      <div className="col-12 col-md-4 mb-3 mb-md-0">
        <div
          className={`${style.card} d-flex flex-column align-items-center justify-content-center gap-1`}
        >
          <img alt="icon-img" className={style.img} src={mail} />
          <p className={`${style.title} text-uppercase m-0 p-0`}>
            {t("email")}
          </p>
          <p className={`${style.desc} m-0 p-0 text-lowercase`}>{data.email}</p>
        </div>
      </div>
      <div className="col-12 col-md-4 mb-3 mb-md-0">
        <div
          className={`${style.card} d-flex flex-column align-items-center justify-content-center gap-1`}
        >
          <img alt="icon-img" className={style.img} src={add} />
          <p className={`${style.title} text-uppercase m-0 p-0`}>
            {t("address")}
          </p>
          <p className={`${style.desc} m-0 p-0 text-lowercase`}>
            {data.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
/**
 * <div
      className={`${style.card} d-flex flex-column align-items-center justify-content-center gap-1`}
    >
      <img alt="icon-img" className={style.img} src={data.img} />
      <p className={`${style.title} text-uppercase m-0 p-0`}>
        {i18n.language === "ar" ? data.arTitle : data.enTitle}
      </p>
      <p className={`${style.desc} m-0 p-0 text-lowercase`}>{data.data}</p>
    </div>
 */
