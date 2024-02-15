import React from "react";
import style from "./doubleBanner.module.css";
const DoubleBanner = ({ img1, alt1, img2, alt2 }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <img alt={alt1} className={style.mainImg} src={img1} />
        </div>
        <div className="col-12 col-md-6">
          <img alt={alt2} className={style.mainImg} src={img2} />
        </div>
      </div>
    </div>
  );
};

export default DoubleBanner;
