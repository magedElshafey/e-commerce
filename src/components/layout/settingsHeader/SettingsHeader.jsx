import React from "react";
import style from "./settings.module.css";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { BiLogoYoutube } from "react-icons/bi";
import { useTranslation } from "react-i18next";
const SettingsHeader = () => {
  const { t, i18n } = useTranslation();
  // handle change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", JSON.stringify(lng));
    window.location.reload();
  };
  return (
    <div className={`d-none d-md-block ${style.mainDiv}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          {/**welcome*/}
          <p className={`m-0 p-0 ${style.welcome} text-white`}>
            {t("welcome")}
          </p>
          {/**follow us section*/}
          <div className="d-flex align-items-center gap-1">
            <p className={`m-0 p-0 text-white ${style.follow}`}>
              {t("follow")}
            </p>

            <AiOutlineTwitter className="text-white pointer" size={15} />

            <BsFacebook className="text-white pointer" size={15} />

            <FaPinterestP className="text-white pointer" size={15} />

            <BiLogoYoutube className="text-white pointer" size={15} />

            <AiOutlineInstagram className="text-white pointer" size={15} />
            <p className={`text-white m-0 px-4 ${style.line}`}>|</p>
            {/*settings sections*/}
            <div className="d-flex align-items-center gap-4">
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
      </div>
    </div>
  );
};

export default SettingsHeader;
