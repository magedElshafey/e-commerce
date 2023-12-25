import React from "react";
import { useTranslation } from "react-i18next";
import CheckoutProgress from "../components/utils/checkoutProgress/CheckoutProgress";
import CartTable from "../components/cart/cartTable/CartTable";
import OrderSummary from "../components/utils/orderSummary/OrderSummary";
import { useNavigate } from "react-router-dom";
const Cart = ({ data, totalPrice }) => {
  const navigate = useNavigate();
  const action = () => {
    navigate("/checkout");
  };
  const { t } = useTranslation();
  return (
    <div className="py-4 mt-5 mt-md-0">
      <div className="container mt-5 mt-md-0">
        <h3 className="fw-bolder m-0 p-0 mb-4 text-center">{t("cart1")}</h3>
        <CheckoutProgress />
        <div className="row ">
          <div className="col-12 col-md-8 mb-3 mb-md-0">
            <CartTable data={data} />
          </div>
          <div className="col-12 col-md-4">
            <OrderSummary
              cartItems={data}
              totalPrice={totalPrice}
              action={action}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
