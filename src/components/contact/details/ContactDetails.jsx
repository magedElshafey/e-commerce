import React from "react";
import style from "./contactDetails.module.css";
import { useTranslation } from "react-i18next";
import add from "../../../assets/address.svg";
import call from "../../../assets/call.svg";
import mail from "../../../assets/mail.svg";
const ContactDetails = ({ data }) => {
  const { t } = useTranslation();
  const hasSocialLinks = Object.values(data).some((value) => value !== "");
  return (
    <>
      {hasSocialLinks && (
        <div className="row justify-content-center mb-4">
          {data.phone && (
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <div
                className={`${style.card} d-flex flex-column align-items-center justify-content-center gap-1`}
              >
                <img alt="icon-img" className={style.img} src={call} />
                <p className={`${style.title} text-uppercase m-0 p-0`}>
                  {t("phone")}
                </p>
                <p className={`${style.desc} m-0 p-0 text-lowercase`}>
                  {data.phone}
                </p>
              </div>
            </div>
          )}
          {data.email && (
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <div
                className={`${style.card} d-flex flex-column align-items-center justify-content-center gap-1`}
              >
                <img alt="icon-img" className={style.img} src={mail} />
                <p className={`${style.title} text-uppercase m-0 p-0`}>
                  {t("email")}
                </p>
                <p className={`${style.desc} m-0 p-0 text-lowercase`}>
                  {data.email}
                </p>
              </div>
            </div>
          )}
          {data.address && (
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
          )}
        </div>
      )}
    </>
  );
};

export default ContactDetails;
