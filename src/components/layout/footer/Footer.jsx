import React from "react";
import style from "./footer.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Footer = ({
  categories,
  importantLinks,
  socialMedia,
  account,
  payment,
}) => {
  const { i18n, t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <div className={style.mainDiv}>
      <div className="container pt-2">
        <div className="row justify-content-center">
          <div className="col-6 col-md-3 mb-3">
            <h1 className="m-0 p-0 text-white fw-bolder mb-3">
              {i18n.language === "ar" ? "لوجو" : "Logo"}
            </h1>
            <p className="m-0 p-0 mb-3 text-white-50">{t("slogan")}</p>
            <h3 className="text-white m-0 p-0 mb-3 fw-bolder">{t("social")}</h3>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              {socialMedia.links.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="social/img"
                    src={item.img}
                    className={style.socialIcon}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <h3 className="text-white m-0 p-0 mb-3 fw-bolder">
              {t("importantLinks")}
            </h3>
            <ul className="m-0 p-0">
              {importantLinks.links.map((link, index) => (
                <li key={index} className="mb-2 p-0">
                  <Link
                    to={link.path}
                    className={`text-white-50 ${style.link}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <h3 className="text-white m-0 p-0 mb-3 fw-bolder">
              {t("categories")}
            </h3>

            <ul className="m-0 p-0">
              {categories.map((category, index) => (
                <li key={index} className="mb-2 p-0">
                  <Link
                    to={`/cat/${category.path}`}
                    className={`text-white-50 ${style.link}`}
                  >
                    {category.mainCategory}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <h3 className="text-white m-0 p-0 mb-3 fw-bolder">
              {t("account")}
            </h3>
            <ul className="m-0 p-0">
              {account.links.map((link, index) => (
                <li key={index} className="mb-2 p-0">
                  <Link
                    to={link.path}
                    className={`text-white-50 ${style.link}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 mb-3 mainLine"></div>
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row gap-2 gap-md-0 text-white pb-3">
          <p className="m-0 p-0">
            {i18n.language === "en"
              ? `Copyright © ${currentYear} TechMarvel. All rights reserved`
              : `جميع الحقوق محفوظة لشركة TechMarvel ${currentYear}`}
          </p>
          <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
            {payment.map((item, index) => (
              <div className={style.paymentContainer} key={index}>
                <img
                  alt="payment/img"
                  src={item}
                  className={style.paymentImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
