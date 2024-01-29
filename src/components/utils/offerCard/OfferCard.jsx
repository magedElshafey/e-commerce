import React from "react";
import style from "./offerCard.module.css";

import useTruncateString from "../../hooks/useTruncateString";
const OfferCard = ({ data }) => {
  return (
    <div className="py-2 px-2 d-flex flex-column gap-2 align-items-center">
      <img alt="offer/img" className={style.mainImg} src={data.image} />
      <div>
        <p className={`m-0 p-0 text-center fw-bold  ${style.title}`}>
          {data.title}
        </p>
        <p className={`m-0 p-0 text-center ${style.desc}`}>
          {useTruncateString(data.description)}
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
