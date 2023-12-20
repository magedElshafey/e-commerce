import React from "react";
import style from "./blogCard.module.css";
import useTruncateString from "../../hooks/useTruncateString";
import { useTranslation } from "react-i18next";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
const BlogCard = ({ data }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={style.card}>
      <div className="d-flex justify-content-center">
        <img alt="blog/img" className={style.mainImg} src={data.img} />
      </div>
      <p className={`m-0 p-0 mt-2 ${style.title}`}>
        {useTruncateString(data.title)}
      </p>
      <p className={`m-0 p-0 ${style.desc}`}>{useTruncateString(data.desc)}</p>

      <button className={style.btn}>
        <span>{t("more")}</span>
        {i18n.language === "en" ? (
          <FaArrowRightLong size={15} />
        ) : (
          <FaArrowLeftLong size={15} />
        )}
      </button>
    </div>
  );
};

export default BlogCard;
