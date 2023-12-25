import React from "react";
import style from "./subTotal.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeCart } from "../../../Redux/cart";
import { useTranslation } from "react-i18next";
const SubTotal = ({ totalPrice }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/cart");
    dispatch(closeCart());
  };
  return (
    <div className={style.subTotalContainer}>
      <div className="p-2">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="m-0 p-0 fw-bold">{t("sub")} : </p>
          <p className="m-0 p-0 fw-bold">
            {totalPrice}
            {t("le")}
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button onClick={handleCheckout} className="newBtn">
            {t("checkout")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubTotal;
