import React, { useRef, useEffect } from "react";
import style from "./cartSidebar.module.css";
import { useDispatch } from "react-redux";
import { closeCart } from "../../../Redux/cart";
import CartItems from "../cartItems/CartItems";
import CartCounter from "../cartCounter/CartCounter";
import SubTotal from "../subTotal/SubTotal";
import CartEmpty from "../cartEmpty/CartEmpty";
const CartSidebar = ({ isCartOpen, cartItemsLength, cartItems }) => {
  const sidebarRef = useRef(null);
  const dispatch = useDispatch();
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      dispatch(closeCart());
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        ref={sidebarRef}
        className={`${style.mainContainer} p-3 ${
          isCartOpen ? style.show : style.hide
        }`}
      >
        <div className="mb-5">
          <CartCounter cartItems={cartItemsLength} />
        </div>
        {cartItemsLength ? <CartItems cartItems={cartItems} /> : <CartEmpty />}
        {cartItemsLength ? <SubTotal items={cartItems} /> : null}
      </div>
      <div
        className={`${style.overlay} ${isCartOpen ? style.show : style.hide} `}
      ></div>
    </>
  );
};

export default CartSidebar;
