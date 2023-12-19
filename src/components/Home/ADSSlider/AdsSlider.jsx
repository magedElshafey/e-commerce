import React, { useRef } from "react";
import style from "./adsSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const AdsSlider = ({ data }) => {
  const { i18n } = useTranslation();
  const sliderRef = useRef(null);
  const slickNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const slickPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="container position-relative">
      {data.length && (
        <div className="controls mb-3">
          <button onClick={slickPrev}>
            {i18n.language === "ar" ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
          <button onClick={slickNext}>
            {i18n.language === "ar" ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>
      )}
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) => (
          <Link key={index} to={item.path}>
            <img
              loading="lazy"
              src={item.img}
              alt="banner/img"
              className={style.mainImg}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default AdsSlider;
