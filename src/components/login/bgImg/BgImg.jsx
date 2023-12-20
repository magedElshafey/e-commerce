import React from "react";
import style from "./bgimg.module.css";
import bg from "../../../assets/bg.png";
const BgImg = () => {
  return (
    <div>
      <img alt="bg/img" src={bg} className={style.mainImg} />
    </div>
  );
};

export default BgImg;
