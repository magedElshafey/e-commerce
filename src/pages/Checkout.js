import React from "react";
import { useTranslation } from "react-i18next";
import CheckoutProgress from "../components/utils/checkoutProgress/CheckoutProgress";
import Addresses from "../components/checkout/address/Addresses";
import AddressForm from "../components/checkout/adressForm/AddressForm";
import OrderSummary from "../components/utils/orderSummary/OrderSummary";
import Payment from "../components/checkout/payment/Payment";
import { useNavigate } from "react-router-dom";
const Checkout = ({ address, totalPrice, paymentMethods, cartItems }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const action = () => {
    navigate("/complete");
  };
  return (
    <div className="py-4 mt-5 mt-md-0">
      <div className="container mt-5 mt-md-0">
        <h3 className="fw-bolder m-0 p-0 mb-4 text-center">{t("checkoutD")}</h3>
        <CheckoutProgress />
        <div className="row">
          <div className="col-12 col-md-7 mb-3 mb-md-0">
            {address.length ? <Addresses address={address} /> : <AddressForm />}
            <Payment paymentMethods={paymentMethods} />
          </div>
          <div className="col-12 col-md-5">
            <OrderSummary
              totalPrice={totalPrice}
              cartItems={cartItems}
              action={action}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
