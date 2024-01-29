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
            <li className={style.bg}>
              <Link className={style.link} to="/offer">
                {i18n.language === "ar" ? "عروض الطنطاوي" : "El-Tantawy offers"}
              </Link>
            </li>
            {data.map((item, index) => (
              <li className={style.bg} key={index}>
                <Link
                  className={style.link}
                  to={`/cat/${item.id}/${item.name}`}
                >
                  {item.name}
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
