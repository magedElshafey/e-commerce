import React from "react";
import style from "./settings.module.css";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { BiLogoYoutube } from "react-icons/bi";
import { useTranslation } from "react-i18next";
const SettingsHeader = ({ socialMedia }) => {
  const { t, i18n } = useTranslation();
  // handle change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", JSON.stringify(lng));
    window.location.reload();
  };
  return (
    <div className={`d-none d-md-block ${style.mainDiv}`}>
      <div className="container py-2">
        <div className="d-flex align-items-center justify-content-between">
          {/**welcome*/}
          <p className={`m-0 p-0 ${style.welcome} fw-bolder red`}>
            {t("welcome")}
          </p>
          {/**follow us section*/}

          {/*settings sections*/}

          {/*language*/}
          <div className="dropdown">
            <button
              className={`dropdown-toggle ${style.select}`}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {i18n.language === "ar" ? "العربية" : "English"}
            </button>
            <ul className="dropdown-menu">
              <li>
                <span
                  className="dropdown-item pointer"
                  onClick={() => changeLanguage("ar")}
                >
                  {i18n.language === "ar" ? "العربية" : "AR"}
                </span>
              </li>
              <li>
                <span
                  onClick={() => changeLanguage("en")}
                  className="dropdown-item pointer"
                >
                  {i18n.language === "ar" ? "الانجليزية" : "EN"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsHeader;
