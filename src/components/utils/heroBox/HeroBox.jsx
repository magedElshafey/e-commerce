import React from "react";
import style from "./heroBox.module.css";
import { Link } from "react-router-dom";
import MoreBtn from "../moreBtn/MoreBtn";
const HeroBox = ({ title, path, data }) => {
  return (
    <div className="container my-5">
      <p className="fw-bold fs-5">{title}</p>

      <div className={`${style.mainContainer} row`}>
        {data.products.map((item, index) => (
          <div
            key={index}
            className={`col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column justify-content-center align-items-center py-4 ${style.cardContainer}`}
          >
            <img
              loading="lazy"
              alt="product/img"
              src={item.image}
              className={style.mainImg}
            />
            <Link to={`/product/${item.id}`}>
              <p className={`text-black fw-bolder mt-3 ${style.name}`}>
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="my-3">
        <MoreBtn path={path} />
      </div>
    </div>
  );
};

export default HeroBox;
