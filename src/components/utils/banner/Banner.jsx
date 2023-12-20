import React from "react";
import style from "./banner.module.css";
const Banner = ({ img, alt }) => {
  return (
    <div className={`mb-4 ${style.mainDiv}`}>
      <div className="row">
        <div className="col-12">
          <img alt={alt} className={style.mainImg} src={img} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
