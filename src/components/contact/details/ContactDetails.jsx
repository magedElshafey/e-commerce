import React from "react";
import style from "./contactDetails.module.css";
import {
  FaPhoneAlt,
  FaPhone,
  FaLocationArrow,
  FaFacebookF,
  FaInstagramSquare,
  FaTiktok,
  FaSnapchatGhost,
  FaWhatsappSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const ContactDetails = ({ phone, email, socialMedia , address }) => {
  const { i18n, t } = useTranslation();

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex align-items-center gap-2 mb-4">
          <a
            href={`tel:${phone}`}
            className={`${style.desc} m-0 p-0 text-lowercase`}
          >
            {phone}
          </a>
          {i18n.language === "ar" ? (
            <FaPhoneAlt size={20} className="red-color" />
          ) : (
            <FaPhone size={20} className="red-color" />
          )}
        </div>
        <div className="d-flex align-items-center gap-2 mb-4">
          <a
            href={`mailto:${email}`}
            className={`${style.desc} m-0 p-0 text-lowercase`}
          >
            {email}
          </a>
          <MdEmail size={20} className="red-color" />
        </div>
        <div className="d-flex align-items-center gap-2 mb-4">
     
                  <p className={`${style.desc} m-0 p-0 text-lowercase`}>
              {address}
            </p>
               
          <FaLocationArrow size={20} className="red-color" />
        </div>
        {socialMedia.length ? (
          <>
            <p className={`m-0 p-0 mb-3  font-bolder fs-5 ${style.desc}`}>
              {t("social")}
            </p>
            <div className="d-flex items-center gap-2 flex-wrap">
              {socialMedia.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="social-media-icon"
                    src={item.icon}
                    className={style.socialIcon}
                  />
                </a>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default ContactDetails;
/**
 *  <div className="row justify-content-center mb-4">
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
 */
