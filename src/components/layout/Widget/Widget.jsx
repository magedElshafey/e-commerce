import React, { useState } from "react";
import style from "./widget.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
const Widget = () => {
  // hooks
  const navigate = useNavigate();
  const [showWidget, setShowWidget] = useState(true);
  const { i18n, t } = useTranslation();
  //   logic in design
  const handleNavigate = () => navigate("/shop");
  const handleShowWidget = () => setShowWidget(false);
  return (
    <div className="d-none d-md-block">
      {showWidget && (
        <div className={style.mainDiv}>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              {/*black friday text*/}
              <div className="d-flex align-items-center gap-1">
                <div className={`${style.blackContainer}`}>
                  <p className="m-0 p-0">{t("dis")}</p>
                </div>
                <p className="text-white m-0 p-0">{t("tantawi")}</p>
              </div>
              {/**offer text*/}
              <div className="d-flex align-items-center gap-1">
                <p className={`m-0 p-0 ${style.up} text-white`}>{t("up")}</p>
                <p className={`m-0 p-0 ${style.percent}`}>59%</p>
                <p className={`m-0 p-0 ${style.off} text-white`}>{t("off")}</p>
              </div>
              <button
                onClick={handleNavigate}
                className={`d-flex align-items-center justify-content-center gap-2 ${style.btn}`}
              >
                <span className={`m-0 p-0 ${style.shop}`}>{t("shop")}</span>
                {i18n.language === "en" ? (
                  <FaArrowRightLong size={15} />
                ) : (
                  <FaArrowLeftLong size={15} />
                )}
              </button>
              <button
                onClick={handleShowWidget}
                className={`d-flex align-items-center justify-content-center ${style.closeBtn}`}
              >
                <AiOutlineClose />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Widget;
