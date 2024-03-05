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
        {data.title}
      </h3>
      {data.description ? (
        <p className="text-center mb-3 text-black-50">{data.description}</p>
      ) : null}
      <div className="row  align-items-center justify-content-center">
        <div className="col-12 col-md-8">
          <div className="row justify-content-between">
            {data.products.map((item, index) => (
              <div className="col-6 col-lg-4 col-xl-3 mb-3" key={index}>
                <ProductCard data={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-end">
          <img alt="offer-img" className={style.mainImg} src={data.image} />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
/**
 *    <Intro />
 *   <div className="row">
       
      </div>
 */
