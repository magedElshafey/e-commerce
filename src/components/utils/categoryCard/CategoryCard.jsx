import React from "react";
import style from "./categoryCard.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const CategoryCard = ({ data, path }) => {
  const { i18n } = useTranslation();
  return (
    <Link to={`${path}/${data.path}`} className={style.card}>
      <img
        alt="product/img"
        src={data.img || data.mainImg}
        className={style.mainImg}
      />
      <p className={style.title}>
        {i18n.language === "ar"
          ? data.mainCategory || data.title
          : data.mainCategoryEn || data.enTitle}
      </p>
    </Link>
  );
};

export default CategoryCard;
