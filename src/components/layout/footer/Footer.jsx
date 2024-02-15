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
  logo,
}) => {
  const { i18n, t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div className={style.mainDiv}>
      <div className="container pt-3">
        <div className="row justify-content-center">
          <div className="col-6 col-md-3 mb-3">
            <Link to="/">
              <img alt="logo" className={style.logo} src={logo} />
            </Link>
            <p className="m-0 p-0 mb-3">{t("slogan")}</p>
            {socialMedia.length ? (
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
            ) : null}
          </div>
          <div className="col-6 col-md-3 mb-3">
            <h5 className=" m-0 p-0 mb-3 fw-bolder">{t("importantLinks")}</h5>
            <ul className="m-0 p-0">
              {importantLinks.links.map((link, index) => (
                <li key={index} className="mb-2 p-0">
                  <Link
                    to={link.path}
                    className={`text-black-50 ${style.link}`}
                  >
                    {i18n.language === "ar" ? link.title : link.enTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <h5 className="text-black m-0 p-0 mb-3 fw-bolder">
              {t("categories")}
            </h5>

            <ul className="m-0 p-0">
              {categories.map((category, index) => (
                <li key={index} className="mb-2 p-0">
                  <Link
                    to={`/cat/${category.name}/${category.id}`}
                    className={`text-black-50 ${style.link}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <h5 className="text-black m-0 p-0 mb-3 fw-bolder">
              {t("account")}
            </h5>
            <ul className="m-0 p-0">
              {account.links.map((link, index) => (
                <li key={index} className="mb-2 p-0">
                  <Link
                    to={link.path}
                    className={`text-black-50 ${style.link}`}
                  >
                    {i18n.language === "ar" ? link.title : link.enTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`${style.lowerFooter} text-center text-black-50`}>
          <div className="my-2">
            <a
              href="https://www.facebook.com/profile.php?id=61555335491116"
              target="_blank"
              rel="noreferrer"
              className="m-0 p-0 text-black-50"
            >
              {i18n.language === "en"
                ? `Copyright © ${currentYear} ${
                    i18n.language === "ar" ? "القمة" : "Al- Qema"
                  } . All rights reserved`
                : `جميع الحقوق محفوظة لشركة ${
                    i18n.language === "ar" ? "القمة" : "Al- Qema"
                  }  ${currentYear}`}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
