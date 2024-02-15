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

const ContactDetails = ({ phone, email, socialMedia, address }) => {
  const { i18n, t } = useTranslation();

  return (
    <div className="row justify-content-center justify-content-md-between">
      <div className="col-12 col-md-6 mb-3 mb-md-0">
        <div className="d-flex flex-column align-items-center">
          <p className="fw-bold fs-5 mb-3">{t("contact")}</p>
          <div className="d-flex align-items-center gap-2 mb-2">
            <a
              href={`tel:${phone}`}
              className={`${style.desc} m-0 p-0 text-lowercase`}
            >
              {phone}
            </a>
            {i18n.language === "ar" ? (
              <FaPhoneAlt size={20} />
            ) : (
              <FaPhone size={20} />
            )}
          </div>
          <div className="d-flex align-items-center gap-2 mb-4">
            <a
              href={`mailto:${email}`}
              className={`${style.desc} m-0 p-0 text-lowercase`}
            >
              {email}
            </a>
            <MdEmail size={20} />
          </div>
          <div className="d-flex align-items-center gap-2 mb-4">
            <p className={`${style.desc} m-0 p-0 text-lowercase`}>{address}</p>

            <FaLocationArrow size={20} />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 mb-3 mb-md-0">
        <div className="d-flex flex-column align-items-center">
          {socialMedia.length ? (
            <>
              <p className="fw-bold fs-5 mb-3">{t("social")}</p>
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
      </div>
    </div>
  );
};

export default ContactDetails;
/**
 *   <>
      <div className="d-flex flex-column align-items-center">
    
        
       
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
 */
