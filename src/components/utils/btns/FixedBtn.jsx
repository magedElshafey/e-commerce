import React, { useState, useEffect } from "react";
import style from "./fixedBtn.module.css";
import { BsArrowUp } from "react-icons/bs";
import { useTranslation } from "react-i18next";
const FixedBtn = () => {
  const { t } = useTranslation();
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  return (
    <div>
      <div
        onClick={scrollToTop}
        className={`${style.arrowContainer} ${
          showArrow ? style.show : style.hide
        }`}
      >
        <BsArrowUp size={20} />
      </div>
      <div className={style.faceContainer}>
        <a
          target="_blank"
          href="www.facebook.com"
          className="d-inline-block m-0 p-2 text-white"
        >
          {t("contact")}
        </a>
      </div>
    </div>
  );
};

export default FixedBtn;
