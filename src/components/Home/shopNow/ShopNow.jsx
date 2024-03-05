import React from "react";
import style from "./shopNow.module.css";
import { useTranslation } from "react-i18next";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../utils/productCard/ProductCard";
// import shopBanner from "../../../assets/shopNow.png";
const ShopNow = ({ data, banner }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/shop");
  return (
    <div className={`mb-3 bg-section d-flex items-center py-3`}>
      <div className="container">
        <div className="row  align-items-center justify-content-center">
          <div className="col-12 col-md-8 mb-4 mb-md-0">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <p className={`m-0 p-0 ${style.shop}`}>{t("shopNow")}</p>
              <button
                onClick={handleNavigate}
                className={`d-flex align-items-center justify-content-center gap-3 ${style.btn}`}
              >
                <span className="m-0 p-0">{t("browseAll")}</span>
                {i18n.language === "ar" ? (
                  <FaLongArrowAltLeft size={20} />
                ) : (
                  <FaLongArrowAltRight size={20} />
                )}
              </button>
            </div>
            <div className="row">
              {data.slice(0, 8).map((item, index) => (
                <div key={index} className="col-6 col-lg-4 col-xl-3 mb-3">
                  <ProductCard data={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-end">
            <a href={banner.url} target="_blank" rel="noreferrer">
              <img
                alt="shop-banner"
                src={banner.image}
                className={style.mainImg}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
