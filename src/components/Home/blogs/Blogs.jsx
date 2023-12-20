import React from "react";
import style from "./Blogs.module.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import BlogCard from "../../utils/blogCard/BlogCard";
import { useTranslation } from "react-i18next";
const Blogs = ({ data }) => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className={`mt-5 p-0 ${style.mainDiv}`}>
        <div className="container py-3">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <p className={`m-0 p-0 ${style.title}`}>{t("news")}</p>
            <Link
              to="/blogs"
              className={`${style.link} m-0 p-0 d-flex align-items-center gap-1`}
            >
              <span className="m-0 p-0">{t("brwoseBlogs")}</span>
              {i18n.language === "en" ? (
                <FaArrowRightLong size={15} />
              ) : (
                <FaArrowLeftLong size={15} />
              )}
            </Link>
          </div>
          <div className="row justify-content-center">
            {data.map((item, index) => (
              <div key={index} className="col-12 col-md-4 mb-3 mb-md-0">
                <BlogCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
