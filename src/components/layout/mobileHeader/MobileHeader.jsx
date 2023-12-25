import React, { useState } from "react";
import style from "./mobileHeader.module.css";
import { useTranslation } from "react-i18next";
import ClickOutsideWrapper from "../../hooks/useClickOutside";
import logo from "../../../assets/logo-ar.png";
import { useDispatch } from "react-redux";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { BiLogoYoutube } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import MenuSidebar from "../menuSidebar/MenuSidebar";
import { openCart } from "../../../Redux/cart";
const MobileHeader = ({ data, cartItemsLength, isLogin }) => {
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
  return (
    <div className="d-md-none">
      <div className={style.navContainer}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            {/*logo container*/}
            <div className="d-flex align-items-center gap-1">
              <img alt="logo/img" src={logo} className={style.logo} />
            </div>
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
          <div className={`mt-2 ${style.inputContainer}`}>
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
