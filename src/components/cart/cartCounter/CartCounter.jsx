import React from "react";
import style from "./cartCounter.module.css";
import { useDispatch } from "react-redux";
import { closeCart } from "../../../Redux/cart";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";
const CartCounter = ({ cartItems }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div className="text-black-50 d-flex justify-content-between align-items-center">
      <AiOutlineClose
        size={20}
        className={`pointer ${style.icon}`}
        onClick={() => dispatch(closeCart())}
      />
      <p className="m-0 p-0">
      
        {t("cart1")} ({cartItems}) {t("products")}
      </p>
    </div>
  );
};

export default CartCounter;
