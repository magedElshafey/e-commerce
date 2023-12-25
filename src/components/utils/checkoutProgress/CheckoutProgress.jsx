import React, { useEffect, useState } from "react";
import style from "./progress.module.css";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
const CheckoutProgress = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [activeCart, setActiveCart] = useState(false);
  const [greenCart, setGreenCart] = useState(false);
  const [activeCheckout, setActiveCheckout] = useState(false);
  const [greenCheckout, setGreenCheckout] = useState(false);
  const [activeComplete, setActiveComplete] = useState(false);
  useEffect(() => {
    if (pathname === "/cart") {
      setActiveCart(true);
    } else if (pathname === "/checkout") {
      setGreenCart(true);
      setActiveCheckout(true);
    } else if (pathname === "/complete") {
      setGreenCart(true);
      setGreenCheckout(true);
      setActiveComplete(true);
    }
  }, []);
  return (
    <div className="d-flex align-items-center justify-content-center gap-3 gap-md-5 mb-5">
      {/**cart*/}
      <div
        className={`d-flex align-items-center gap-1 gap-md-2 pb-2 ${
          activeCart ? style.border : greenCart ? style.greenBorder : null
        }`}
      >
        <div
          className={`d-flex align-items-center justify-content-center ${
            style.stepContainer
          } ${activeCart ? style.active : null} ${
            greenCart ? style.green : null
          }  `}
        >
          1
        </div>
        <p
          className={`m-0 p-0 ${style.title} ${
            greenCart ? style.greenText : null
          }`}
        >
          {t("cart1")}
        </p>
      </div>
      <div
        className={`d-flex align-items-center gap-1 gap-md-2 pb-2 ${
          activeCheckout
            ? style.border
            : greenCheckout
            ? style.greenBorder
            : null
        }`}
      >
        <div
          className={`d-flex align-items-center justify-content-center ${
            style.stepContainer
          } ${
            activeCheckout
              ? style.active
              : greenCheckout
              ? style.green
              : style.notActive
          } `}
        >
          2
        </div>
        <p
          className={`m-0 p-0 ${style.title} ${
            activeCheckout
              ? style.active
              : greenCheckout
              ? style.greenText
              : style.notActive
          } `}
        >
          {t("checkoutD")}
        </p>
      </div>
      <div
        className={`d-flex align-items-center gap-1 gap-md-2 pb-2 ${
          activeComplete ? style.border : null
        }`}
      >
        <div
          className={`d-flex align-items-center justify-content-center ${
            style.stepContainer
          } ${activeComplete ? style.active : style.notActive}  `}
        >
          3
        </div>
        <p
          className={`m-0 p-0 ${style.title} ${
            activeComplete ? style.active : style.notActive
          }`}
        >
          {t("order")}
        </p>
      </div>
    </div>
  );
};

export default CheckoutProgress;
