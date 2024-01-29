import React from "react";
import style from "./flashSale.module.css";
import Intro from "./intro/Intro";
import { useTranslation } from "react-i18next";
import ProductCard from "../../utils/productCard/ProductCard";
const FlashSale = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="container mb-4">
      <h3 className={`text-center mb-3 fw-bolder ${style.title}`}>
        {t("offers")}
      </h3>
      <Intro />
      <div className="row">
        {data.map((item, index) => (
          <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3" key={index}>
            <ProductCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
