import React from "react";
import style from "./subTotal.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeCart } from "../../../Redux/cart";
import { useTranslation } from "react-i18next";
const SubTotal = ({ items }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = items.reduce((acc, product) => {
    acc += product.disscount
      ? (+product.orignalPrice - +product.disscount) * +product.quantity
      : product.orignalPrice * product.quantity;
    return acc;
  }, 0);
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
