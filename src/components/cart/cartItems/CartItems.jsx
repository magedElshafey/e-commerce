import React from "react";
import style from "./cartItems.module.css";
import {
  AiOutlineCloseCircle,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { increaseQTY, removeFromCart, decreaseQTY } from "../../../Redux/cart";
const CartItems = ({ cartItems }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {cartItems.map((item, index) => (
        <div className={`mb-4 ${style.productContainer}`} key={index}>
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
      ))}
    </div>
  );
};

export default CartItems;
