import React from "react";
import style from "./success.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Success = ({ cartItems, orderDetails, totalPrice }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="row justify-content-center">
      <div className={`${style.mainContainer} col-12 col-md-6 p-3`}>
        <div className="d-flex flex-column align-items-center gap-3">
          <p className={`m-0 p-0 ${style.thank}`}>{t("thank")} &#x1F389;</p>
          <p className={`m-0 p-0 ${style.rec}`}>{t("rec")}</p>
          <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
            {cartItems.map((item, index) => (
              <div key={index} className={style.imgContainer}>
                <img alt="product-img" src={item.img} className={style.img} />
                <p className={`m-0 p-0 ${style.num}`}>{++index}</p>
              </div>
            ))}
          </div>
          <div className="d-flex align-items-center justify-content-between gap-5">
            <p className={`m-0 p-0 fw500 ${style.info}`}>{t("orderCode")} : </p>
            <p className={`m-0 p-0 fw500 ${style.details}`}>
              {orderDetails.code}
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-5">
            <p className={`m-0 p-0 fw500 ${style.info}`}>{t("date")} : </p>
            <p className={`m-0 p-0 fw500 ${style.details}`}>
              {orderDetails.date}
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-5">
            <p className={`m-0 p-0 fw500 ${style.info}`}>{t("netPrice")} : </p>
            <p className={`m-0 p-0 fw500 ${style.details}`}>{totalPrice}</p>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-5">
            <p className={`m-0 p-0 fw500 ${style.info}`}>{t("payment")} : </p>
            <p className={`m-0 p-0 fw500 ${style.details}`}>
              {orderDetails.method}
            </p>
          </div>
          <button onClick={() => navigate("/")} className="newBtn">
            {t("continue")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
