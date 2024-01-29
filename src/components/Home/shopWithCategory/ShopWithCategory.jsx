import React from "react";
import style from "./category.module.css";
import { useTranslation } from "react-i18next";
import CategorySlider from "../../utils/categorySlider/CategorySlider";
const ShopWithCategory = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className={`mb-4 ${style.mainDiv}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <p className={`${style.shop} m-0 p-0 mb-4 text-center`}>
              {t("shopWith")}
            </p>
            <CategorySlider data={data} path="/cat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopWithCategory;
