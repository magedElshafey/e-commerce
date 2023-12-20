import React from "react";
import style from "./moreBtn.module.css";
import { useNavigate, Link } from "react-router-dom";
const MoreBtn = ({ path }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`${path}`)} className={style.btn}>
      <Link className="text-white">مشاهدة المزيد</Link>
    </button>
  );
};

export default MoreBtn;
