import React from "react";
import style from "./categories.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const CategoriesHeader = ({ data }) => {
  const { i18n } = useTranslation();
  return (
    <div className={`d-none d-md-block ${style.mainDiv} py-1`}>
      <div className={`${style.content}`}>
        <div className="container">
          <ul className="m-0 p-0  d-flex align-items-center gap-3">
            {data.map((item, index) => (
              <li className={style.bg} key={index}>
                <Link className={style.link} to={`/cat/${item.path}`}>
                  {i18n.language === "ar"
                    ? item.mainCategory
                    : item.mainCategoryEn}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoriesHeader;
