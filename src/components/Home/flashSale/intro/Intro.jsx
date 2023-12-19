import React from "react";
import style from "./intro.module.css";
import Timer from "../timer/Timer";
import { Link } from "react-router-dom";
// icons
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="d-flex align-items-center flex-column flex-md-row gap-3 gap-md-0 justify-content-between mb-4">
      <div className="d-flex  gap-3">
        <div className="d-flex align-items-center gap-1">
          <p className={`m-0 p-0 ${style.end}`}>{t("end")}</p>
          <Timer />
        </div>
      </div>
      <Link
        to="/offer"
        className={`d-flex align-items-center gap-1 ${style.link}`}
      >
        <span className="m-0 p-0">{t("browse")}</span>
        {i18n.language === "en" ? (
          <FaArrowRightLong className={style.icon} size={15} />
        ) : (
          <FaArrowLeftLong className={style.icon} size={15} />
        )}
      </Link>
    </div>
  );
};

export default Intro;
