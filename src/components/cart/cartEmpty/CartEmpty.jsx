import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
const CartEmpty = () => {
  const { t } = useTranslation();
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center m-0 p-0">
      <div className="d-flex flex-column gap-3 align-items-center m-0 p-0">
        <p className="p-0 m-0 fw-bold">
          {t("emptyCart")}
        </p>
        <BsFillCartCheckFill size={50} />
      </div>
    </div>
  );
};

export default CartEmpty;
