import React from "react";
import style from "./categoryCard.module.css";
import { Link } from "react-router-dom";
const CategoryCard = ({ data, path }) => {
  return (
    <Link to={`${path}/${data.name}`} className={style.card}>
      <img alt="product/img" src={data.image} className={style.mainImg} />
      <p className={style.title}>{data.name}</p>
    </Link>
  );
};

export default CategoryCard;
