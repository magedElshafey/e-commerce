import React from "react";
import style from "./FirstArticle.module.css";
import icon from "../../../assets/user-circle.svg";
const FirstArticle = ({ data }) => {
  return (
    <div>
      <h3 className="m-0 p-0 fw-bolder mb-3 text-center">{data.title}</h3>

      <div className="row justify-content-center mb-4">
        <img alt="main-img" src={data.image} className={style.mainImg} />
      </div>
      <p className={`m-0 p-0 mb-3 ${style.desc}`}>{data.description}</p>
      <div className="d-flex align-items-center justify-content-start gap-2">
        <img alt="icon" src={icon} className={style.img} />
        <p className={`m-0 p-0 ${style.desc}`}>{data.created_at}</p>
      </div>
    </div>
  );
};

export default FirstArticle;
/**
 *
 */
