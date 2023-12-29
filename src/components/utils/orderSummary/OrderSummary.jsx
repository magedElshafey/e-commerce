import React, { useState } from "react";
import style from "./summary.module.css";
import { useTranslation } from "react-i18next";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import add from "../../../assets/Add.svg";
import minus from "../../../assets/Minus.svg";
import close from "../../../assets/Line.svg";
import { useDispatch } from "react-redux";
import { increaseQTY, removeFromCart, decreaseQTY } from "../../../Redux/cart";
const OrderSummary = ({ totalPrice, cartItems, action }) => {
  const [showItems, setShowItems] = useState(false);
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const shipping = 25;

  return (
    <div className={style.mainContainer}>
      <p className={`m-0 p-0 pb-2 fw500 ${style.title}`}>{t("summary")}</p>
      <div className="d-flex justify-content-between my-2 align-items-center">
        <p className={`m-0 p-0  text-black-50`}>{t("cartTotal")} : </p>
        <p className="m-0 p-0 text-black-50">
          {totalPrice} {t("le")}
        </p>
      </div>
      <div
        className={`d-flex justify-content-between my-2 align-items-center pb-2 ${style.title}`}
      >
        <div>
          <p className={`m-0 p-0  text-black-50`}>{t("services")} - </p>
          <p className={`m-0 p-0  text-black-50`}> {t("fees")} : </p>
        </div>
        <p className="m-0 p-0 text-black-50">
          {shipping} {t("le")}
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <p className="m-0 p-0 text-black-50">
          ({cartItems.length}) {t("productInCart")}
        </p>
        {showItems ? (
          <IoIosArrowUp
            size={20}
            className="text-black-50 pointer"
            onClick={() => setShowItems(false)}
          />
        ) : (
          <IoIosArrowDown
            size={20}
            className="pointer text-black-50"
            onClick={() => setShowItems(true)}
          />
        )}
      </div>
      {showItems && (
        <div className="mt-4">
          {cartItems.map((item, index) => (
            <div key={index} className={`m-0 p-0 pb-3 pt-1 mb-3`}>
              <div className="d-flex justify-content-between">
                {/**img , price , quantity*/}
                <div className="w-75 d-flex gap-2">
                  <img alt="product/img" className={style.img} src={item.img} />
                  <div>
                    <p className={`m-0 p-0 mb-2  ${style.productTitle}`}>
                      {item.title}
                    </p>
                    <p className={`m-0 p-0 mb-2 ${style.color}`}>
                      {t("color1")} : {t("black")}
                    </p>
                    <div className={style.qtyContainer}>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          onClick={() => dispatch(decreaseQTY(item))}
                          alt="icon"
                          className={`pointer ${style.icon}`}
                          src={minus}
                        />
                        <p className={`m-0 p-0 ${style.qty}`}>
                          {item.quantity}
                        </p>
                        <img
                          onClick={() => dispatch(increaseQTY(item))}
                          alt="icon"
                          className={`pointer ${style.icon}`}
                          src={add}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center">
                  {item.disscount ? (
                    <span className={`d-block ${style.price}`}>
                      {item.orignalPrice - item.disscount} {t("le")} *{" "}
                      {item.quantity}
                    </span>
                  ) : (
                    <span className={`d-block ${style.price}`}>
                      {item.originalPrice} جنيه * {item.quantity}
                    </span>
                  )}
                  <img
                    onClick={() => dispatch(removeFromCart(item))}
                    alt="icon"
                    className={`pointer ${style.close}`}
                    src={close}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={`d-flex align-items-center justify-content-between`}>
        <p className={`${style.net} m-0 p-0 fw500`}>{t("netPrice")} : </p>
        <p className={`${style.net} m-0 p-0 fw500`}>
          {totalPrice + shipping} {t("le")}
        </p>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button onClick={action} className="newBtn">
          {t("checkout")}
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
