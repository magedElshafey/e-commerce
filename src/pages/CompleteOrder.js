import React from "react";
import { useTranslation } from "react-i18next";
import CheckoutProgress from "../components/utils/checkoutProgress/CheckoutProgress";
import Success from "../components/complete/Success";
const CompleteOrder = ({ cartItems, orderDetails, totalPrice }) => {
  const { t } = useTranslation();
  return (
    <div className="py-4 mt-5 mt-md-0">
      <div className="container mt-5 mt-md-0">
        <h3 className="fw-bolder m-0 p-0 mb-4 text-center">{t("order")}</h3>
        <CheckoutProgress />
        <Success
          cartItems={cartItems}
          orderDetails={orderDetails}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};

export default CompleteOrder;
