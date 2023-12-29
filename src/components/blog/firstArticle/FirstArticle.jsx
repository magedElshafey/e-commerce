import React from "react";
import style from "./FirstArticle.module.css";
const FirstArticle = ({ data }) => {
  return (
    <div>
      <h3 className="m-0 p-0 fw-bolder mb-3">{data.title}</h3>
      <div className="d-flex align-items-center gap-5 mb-2">
        {data.author.map((item, index) => (
          <div key={index} className="d-flex align-items-center gap-1">
            <img alt="icon" src={item.img} className={style.img} />
            <p className={`m-0 p-0 ${style.desc}`}>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="row justify-content-center mb-3">
        <img alt="main-img" src={data.mainImg} className={style.mainImg} />
      </div>
      <p className={`m-0 p-0 mb-3 ${style.desc}`}>{data.desc}</p>
    </div>
  );
};

export default FirstArticle;
