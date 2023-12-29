import React from "react";
import style from "./secondArticle.module.css";
const SecondArticle = ({ data }) => {
  return (
    <div>
      <p className={`m-0 p-0 mb-2 fw500 fs-5`}>{data.secondTitle}</p>
      <p className={`m-0 p-0 mb-3 ${style.desc}`}>{data.secondDesc}</p>
      <div className="row justify-content-center">
        {data.sub.map((item, index) => (
          <div
            key={index}
            className="col-12 col-md-6  mb-3 d-flex flex-column flex-md-row align-items-center justify-content-center"
          >
            <img alt="blog-sub/img" className={style.subImg} src={item} />
          </div>
        ))}
      </div>
      <p className={`m-0 p-0 mb-2 fw500 fs-5`}>{data.thiredTitle}</p>
      <p className={`m-0 p-0 mb-3 ${style.desc}`}>{data.thirdDesc}</p>
      <p className={`m-0 p-0 mb-2 fw500 fs-5`}>{data.fourthTitle}</p>
      <p className={`m-0 p-0 mb-3 ${style.desc}`}>{data.fourthDesc}</p>
    </div>
  );
};

export default SecondArticle;
