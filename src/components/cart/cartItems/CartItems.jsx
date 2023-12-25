import React from "react";
import style from "./cartItems.module.css";
import add from "../../../assets/Add.svg";
import minus from "../../../assets/Minus.svg";
import close from "../../../assets/Line.svg";
import { useDispatch } from "react-redux";
import { increaseQTY, removeFromCart, decreaseQTY } from "../../../Redux/cart";
import { useTranslation } from "react-i18next";
const CartItems = ({ cartItems }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div>
      {cartItems.map((item, index) => (
        <div key={index} className={`m-0 p-0 pb-3 pt-1 ${style.mainContainer}`}>
          <div className="d-flex justify-content-between">
            {/**img , price , quantity*/}
            <div className="w-75 d-flex gap-2">
              <img alt="product/img" className={style.img} src={item.img} />
              <div>
                <p className={`m-0 p-0 mb-2  ${style.title}`}>
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
                    <p className={`m-0 p-0 ${style.qty}`}>{item.quantity}</p>
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
  );
};

export default CartItems;
/**
 *   <div className={`mb-4 ${style.productContainer}`} key={index}>
          <AiOutlineCloseCircle
            size={20}
            onClick={() => dispatch(removeFromCart(item))}
            className={`pointer ${style.closeIcon} mb-3 `}
          />
          <div className="d-flex align-items-center">
            <img alt="product/img" className={style.img} src={item.img} />
            <div>
              <p className="m-0 p-0 mb-2 fw-bold">{item.title}</p>
              {item.disscount ? (
                <span className="d-block text-black-50 fw-bold mb-2">
                  {item.orignalPrice - item.disscount} جنيه * {item.quantity}
                </span>
              ) : (
                <span className="d-block text-black-50 fw-bold mb-2">
                  {item.originalPrice} جنيه * {item.quantity}
                </span>
              )}

              <div className="d-flex justify-content-center gap-3">
                <div
                  onClick={() => dispatch(increaseQTY(item))}
                  className={`pointer ${style.box}`}
                >
                  <AiOutlinePlus className="pointer" />{" "}
                </div>
                <div className={style.box}>
                  <p className="m-0 p-0">{item.quantity}</p>
                </div>
                <div
                  onClick={() => dispatch(decreaseQTY(item))}
                  className={`pointer ${style.box}`}
                >
                  <AiOutlineMinus className="pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
 */
