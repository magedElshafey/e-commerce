import React from "react";
import style from "./cartTable.module.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { increaseQTY, removeFromCart, decreaseQTY } from "../../../Redux/cart";
import add from "../../../assets/Add.svg";
import minus from "../../../assets/Minus.svg";
import close from "../../../assets/Line.svg";
import Copon from "../copon/Copon";
const CartTable = ({ data }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div>
      <table className="table mb-5">
        <thead>
          <tr>
            <th>{t("product")}</th>
            <th>{t("qty")}</th>
            <th>{t("price")}</th>
            <th>{t("subTotal")}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className={`d-flex gap-2 ${style.cellWidth}`}>
                <img alt="product/img" className={style.img} src={item.img} />
                <div>
                  <p className={`m-0 p-0 mb-2   ${style.title}`}>
                    {item.title}
                  </p>
                  <p className={`m-0 p-0 mb-2 ${style.color}`}>
                    {t("color1")} : {t("black")}
                  </p>
                  <div
                    onClick={() => dispatch(removeFromCart(item))}
                    className={`pointer d-flex align-items-center gap-1 ${style.removeContainer}`}
                  >
                    <img alt="icon" className={` ${style.close}`} src={close} />
                    <p className={`m-0 p-0 ${style.remove}`}>{t("remove")}</p>
                  </div>
                </div>
              </td>
              <td className={style.smallCellWidth}>
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
              </td>
              <td className={style.smallCellWidth}>
                {item.disscount ? (
                  <span className={`d-block ${style.price}`}>
                    {item.orignalPrice - item.disscount} {t("le")}
                  </span>
                ) : (
                  <span className={`d-block ${style.price}`}>
                    {item.originalPrice} {t("le")}
                  </span>
                )}
              </td>
              <td className={style.smallCellWidth}>
                {item.disscount ? (
                  <span className={`d-block ${style.total}`}>
                    {(item.orignalPrice - item.disscount) * item.quantity}{" "}
                    {t("le")}
                  </span>
                ) : (
                  <span className={`d-block ${style.total}`}>
                    {item.originalPrice * item.quantity} {t("le")}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Copon />
    </div>
  );
};

export default CartTable;
