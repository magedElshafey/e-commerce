import React from "react";
import style from "./subTotal.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeCart } from "../../../Redux/cart";
const SubTotal = ({ items }) => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const totalPrice = items.reduce((acc, product) => {
    acc += product.disscount
      ? (+product.orignalPrice - +product.disscount) * +product.quantity
      : product.orignalPrice * product.quantity;
    return acc;
  }, 0);
  const handleCheckout = () => {
    if (isLogin) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
    dispatch(closeCart());
  };
  return (
    <div className={style.subTotalContainer}>
      <div className="p-2">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="m-0 p-0 fw-bold">إجمالي العربة : </p>
          <p className="m-0 p-0 fw-bold">{totalPrice} جنيه</p>
        </div>
        <button onClick={handleCheckout} className={style.btn}>
          إستكمال الطلب
        </button>
      </div>
    </div>
  );
};

export default SubTotal;
