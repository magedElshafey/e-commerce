import React from "react";
import style from "./payment.module.css";
import { useTranslation } from "react-i18next";
const Payment = ({ paymentMethods }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="paymentContainer">
      <p className="m-0 p-0 mb-3 fw500">{t("payment")}</p>
      {paymentMethods.map((item, index) => (
        <div
          key={index}
          className={`${style.mainContainer} d-flex align-items-center justify-content-between mb-3 p-2`}
        >
          <div className="d-flex align-items-center gap-1">
            <input type="radio" id={item.enTitle} name="methods" />
            <label className="fw-500 fs-5" htmlFor={item.enTitle}>
              {i18n.language === "ar" ? item.title : item.enTitle}
            </label>
          </div>
          <div className="d-flex align-items-center gap-1">
            {item.imgs.map((img, indexTwo) => (
              <img
                alt="payment/img"
                className={style.paymentImg}
                key={indexTwo}
                src={img}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Payment;
