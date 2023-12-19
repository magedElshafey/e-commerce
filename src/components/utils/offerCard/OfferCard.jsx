import React from "react";
import style from "./offerCard.module.css";
const OfferCard = ({ data }) => {
  return (
    <div className={style.card}>
      <img alt="offer/img" className={style.mainImg} src={data.img} />
      <div>
        <p className={`m-0 p-0 mb-1 ${style.title}`}>{data.title}</p>
        <p className={`m-0 p-0 ${style.desc}`}>{data.desc}</p>
      </div>
    </div>
  );
};

export default OfferCard;
