import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
const CartEmpty = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column gap-3 align-items-center">
        <p className="p-0 m-0 fw-bold">لا يوجد منتجات في العربة</p>
        <BsFillCartCheckFill size={50} />
      </div>
    </div>
  );
};

export default CartEmpty;
