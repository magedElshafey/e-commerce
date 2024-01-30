import React from "react";
import style from "./blogCard.module.css";
import useTruncateString from "../../hooks/useTruncateString";
import { useTranslation } from "react-i18next";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const BlogCard = ({ data, isHome }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={`${style.card} ${isHome ? "h-400" : null}`}>
      <div
        className={`d-flex ${
          isHome ? "flex-column" : " flex-column flex-md-row"
        }    align-items-center gap-3`}
      >
        <div>
          <img
            alt="blog/img"
            className={`${style.mainImg} ${isHome ? "mx-auto" : null}`}
            src={data.image}
          />
        </div>
        <div>
          <p className={`m-0 p-0  ${style.title}`}>{data.title}</p>
          <p className={`m-0 p-0 mb-3 ${style.desc}`}>
            {useTruncateString(data.description)}
          </p>
          <p className="text-black-50 text-uppercase">{data.created_at}</p>
          <button
            onClick={() => navigate(`/blog/${data.id}`)}
            className={style.btn}
          >
            <span>{t("more")}</span>
            {i18n.language === "en" ? (
              <FaArrowRightLong size={15} />
            ) : (
              <FaArrowLeftLong size={15} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
/**
 *   <div className="d-flex justify-content-center">
        <img alt="blog/img" className={style.mainImg} src={data.image} />
      </div>
      <p className={`m-0 p-0 mt-2 ${style.title}`}>
        {useTruncateString(data.title)}
      </p>
      <p className={`m-0 p-0 ${style.desc}`}>
        {useTruncateString(data.description)}
      </p>

      <button
        onClick={() => navigate(`/blog/${data.id}`)}
        className={style.btn}
      >
        <span>{t("more")}</span>
        {i18n.language === "en" ? (
          <FaArrowRightLong size={15} />
        ) : (
          <FaArrowLeftLong size={15} />
        )}
      </button>
 */
