import React, { useState } from "react";
import style from "./mobileHeader.module.css";
import { useTranslation } from "react-i18next";
import ClickOutsideWrapper from "../../hooks/useClickOutside";

import { useDispatch } from "react-redux";
import {
  AiOutlineMenu,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { useQuery } from "react-query";
import { request } from "../../utils/axios";
import { GoSearch } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import MenuSidebar from "../menuSidebar/MenuSidebar";
import { openCart } from "../../../Redux/cart";
const MobileHeader = ({ data, logo, isLogin }) => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  //   logic in design
  const handleShowSidebar = () => setShowSidebar(true);
  const navigate = useNavigate();
  const handleAccountNavigate = () =>
    isLogin ? navigate("/accountDetails") : navigate("/login");
  const [keyword, setKeyWord] = useState("");
  const [showKeywordsMenu, setShowKeyWordsMenu] = useState(false);
  // handle show keywords menu

  const handleChangeKeyword = (e) => {
    setKeyWord(e.target.value);
    setShowKeyWordsMenu(e.target.value.trim() !== "");
  };
  const handleKeywordsFetching = (text) => {
    return request({ url: `/auto-complete?keyword=${text}` });
  };
  const { isLoading, data: keywords } = useQuery(
    ["auto-complete", keyword],
    () => handleKeywordsFetching(keyword),
    {
      enabled: keyword.trim() !== "",
      onSuccess: (data) => console.log("keywords", data?.data?.data),
    }
  );
  return (
    <div className="d-md-none">
      <div className={style.navContainer}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/">
              <img alt="logo/img" src={logo} className={style.logo} />
            </Link>
            <div className="d-flex align-items-center gap-1">
              <AiOutlineShoppingCart
                onClick={() => dispatch(openCart())}
                size={20}
                className={`pointer ${style.cart}`}
              />
              <AiOutlineHeart size={20} className={`pointer ${style.heart}`} />
              <AiOutlineUser
                onClick={handleAccountNavigate}
                size={20}
                className={`pointer ${style.heart}`}
              />
              <AiOutlineMenu
                onClick={handleShowSidebar}
                size={30}
                className={`${style.icon} pointer`}
              />
            </div>
          </div>
          <div className={`mt-2 ${style.inputContainer} dropdown `}>
            <input
              className={`${style.inp} dropdown-toggle`}
              data-bs-toggle="dropdown"
              aria-expanded="false"
              placeholder={t("search")}
              type="text"
              onChange={handleChangeKeyword}
              value={keyword}
            />
            <GoSearch
              className={`${style.search} ${
                i18n.language === "ar" ? style.rtl : style.ltr
              }`}
            />
            <div
              className={`dropdown-menu t  ${
                showKeywordsMenu ? "showw" : "hidee"
              }`}
            >
              {isLoading ? (
                <div className="d-flex justify-content-center align-items-center">
                  <div className="spinner2"></div>
                </div>
              ) : (
                <div>
                  {keywords?.data?.data?.keywords?.map((item, index) => (
                    <p
                      onClick={() => {
                        setKeyWord(item);
                        setShowKeyWordsMenu(false);
                      }}
                      key={index}
                      className="dropdown-item text-end pointer"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/**
           *  <div className={`mt-2 ${style.inputContainer}`}>
            <input
              type="text"
              className={style.inp}
              placeholder={t("search")}
            />
            <GoSearch
              className={`${style.search} ${
                i18n.language === "ar" ? style.rtl : style.ltr
              }`}
            />
          </div>
           */}
        </div>
      </div>
      <MenuSidebar
        data={data}
        showMenu={showSidebar}
        setShowMenu={setShowSidebar}
      />
    </div>
  );
};

export default MobileHeader;
/**
 *  <div className="d-md-none">
      <div className={style.navContainer}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            

          

           
          </div>
         
        </div>
      </div>
     
    </div>
 */
