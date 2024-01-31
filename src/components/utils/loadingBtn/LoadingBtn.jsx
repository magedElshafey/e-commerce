import React from "react";
import style from "./loadingBtn.module.css";
const LoadingBtn = ({ text }) => {
  return (
    <button disabled className={style.buttonload}>
      <p className="text-white m-0 p-0">{text}</p>
      <div className={`buttonSpinner ${style.buttonSpinner}`}></div>
    </button>
  );
};

export default LoadingBtn;
