import React from "react";
import style from "./bgimg.module.css";
import bg from "../../../assets/bg.png";
const BgImg = ({ img }) => {
  return (
    <div>
      <img
        alt="bg/img"
        src={img ? img : bg}
        className={`${style.mainImg} ${img ? style.height : style.fullHeight}`}
      />
    </div>
  );
};

export default BgImg;
