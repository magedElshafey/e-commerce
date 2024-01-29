import React from "react";
import style from "./mainHeader.module.css";
import { GoSearch } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { openCart } from "../../../Redux/cart";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const MainHeader = ({ isLogin, logo }) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const handleAccountNavigate = () =>
    isLogin ? navigate("/accountDetails") : navigate("/login");
  return (
    <div className={`d-none d-md-block ${style.mainDiv}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          {/*logo container*/}
          <Link to="/">
            <img alt="logo-img" src={logo} className={style.logo} />
          </Link>

          {/*search container*/}
          <div className={style.searchContainer}>
            <input
              className={style.inp}
              placeholder={t("search")}
              type="text"
            />
            <GoSearch
              className={`${style.icon} ${
                i18n.language === "ar" ? style.rtl : style.ltr
              }`}
            />
          </div>
          {/*cart , favourite , login */}
          <div className="d-flex align-items-center gap-2">
            <svg
              onClick={() => dispatch(openCart())}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              className="pointer"
            >
              <path
                d="M10 29C11.1046 29 12 28.1046 12 27C12 25.8954 11.1046 25 10 25C8.89543 25 8 25.8954 8 27C8 28.1046 8.89543 29 10 29Z"
                fill="white"
              />
              <path
                d="M23 29C24.1046 29 25 28.1046 25 27C25 25.8954 24.1046 25 23 25C21.8954 25 21 25.8954 21 27C21 28.1046 21.8954 29 23 29Z"
                fill="white"
              />
              <path
                d="M5.2875 9H27.7125L24.4125 20.55C24.2948 20.9692 24.0426 21.3381 23.6948 21.6001C23.3471 21.862 22.9229 22.0025 22.4875 22H10.5125C10.0771 22.0025 9.65293 21.862 9.30515 21.6001C8.95738 21.3381 8.70524 20.9692 8.5875 20.55L4.0625 4.725C4.0027 4.51594 3.8764 4.33207 3.70271 4.20125C3.52903 4.07042 3.31744 3.99977 3.1 4H1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 27C16 27 3.5 20 3.5 11.5C3.5 9.99736 4.02062 8.54113 4.97328 7.37907C5.92593 6.21701 7.25178 5.42092 8.72525 5.12622C10.1987 4.83153 11.7288 5.05645 13.0551 5.76271C14.3814 6.46897 15.4221 7.61294 16 9C16.5779 7.61294 17.6186 6.46897 18.9449 5.76271C20.2712 5.05645 21.8013 4.83153 23.2748 5.12622C24.7482 5.42092 26.0741 6.21701 27.0267 7.37907C27.9794 8.54113 28.5 9.99736 28.5 11.5C28.5 20 16 27 16 27Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              onClick={handleAccountNavigate}
              className="pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M3.875 27C5.10367 24.8714 6.87104 23.1038 8.99944 21.8749C11.1278 20.6459 13.5423 19.9989 16 19.9989C18.4577 19.9989 20.8722 20.6459 23.0006 21.8749C25.129 23.1038 26.8963 24.8714 28.125 27"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
