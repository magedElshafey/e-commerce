import React from "react";
import style from "./banner.module.css";
const Banner = ({ img, alt }) => {
  return (
    <div className={`mb-4 ${style.mainDiv}`}>
      <div className="row">
        <div className="col-12">
          <a href={img.url} target="_blank" rel="noreferrer">
            <img alt={alt} className={style.mainImg} src={img.image} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
