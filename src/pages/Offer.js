import React from "react";
import banner from "../assets/offer.png";
import OfferBanner from "../components/offer/offerBanner/OfferBanner";
import { useTranslation } from "react-i18next";
import ProductCard from "../components/utils/productCard/ProductCard.jsx";
const Offer = ({ categories, allProducts }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="py-4 mt-4 mt-md-0 container">
      <OfferBanner img={banner} />
      <div className="d-flex align-items-center justify-content-center my-3 gap-5">
        <div>
          <p className="filterBtnTitle text-uppercase m-0 p-0 mb-1">
            {t("cat")}
          </p>
          <button className="filterBtn">
            <select className="filterInp">
              <option className="text-capitalize" value="">
                {t("allCat")}
              </option>
              {categories.map((item, index) => (
                <option value={item.path} key={index}>
                  {i18n.language === "ar"
                    ? item.mainCategory
                    : item.mainCategoryEn}
                </option>
              ))}
            </select>
          </button>
        </div>
        <div>
          <p className="filterBtnTitle text-uppercase m-0 p-0 mb-1">
            {t("price")}
          </p>
          <button className="filterBtn">
            <select className="filterInp">
              <option className="text-capitalize" value="">
                {t("allPrice")}
              </option>
              <option>
                2500 {t("le")} - 8000 {t("le")}
              </option>
              <option>
                2500 {t("le")} - 8000 {t("le")}
              </option>
              <option>
                2500 {t("le")} - 8000 {t("le")}
              </option>
              <option>
                2500 {t("le")} - 8000 {t("le")}
              </option>
              <option>
                2500 {t("le")} - 8000 {t("le")}
              </option>
              <option>
                2500 {t("le")} - 8000 {t("le")}
              </option>
              <option>
                2500 {t("le")} - 8000 {t("le")}
              </option>
              <option>
                2500 {t("le")} - 8000 {t("le")}
              </option>
            </select>
          </button>
        </div>
      </div>
      <div className="row">
        {allProducts.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-3 col-xl-2 mb-3" key={index}>
            <ProductCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
