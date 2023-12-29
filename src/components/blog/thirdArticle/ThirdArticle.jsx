import React from "react";
import style from "./thirdArticle.module.css";
const ThirdArticle = ({data}) => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <img alt="blog-img" src={data.third} className={style.thirdBlog} />
        </div>
        <div className="col-12 col-md-6 ">
          <p className={`m-0 p-0 mb-2 fw500 fs-5`}>{data.fifthTitle}</p>
          <p className={`m-0 p-0 mb-3 ${style.desc}`}>{data.fifthDesc}</p>
          <p className={`m-0 p-0 mb-2 fw500 fs-5`}>{data.sixTitle}</p>
          <p className={`m-0 p-0 mb-3 ${style.desc}`}>{data.sixDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdArticle;
