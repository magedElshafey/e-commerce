import React from "react";
import style from "./adsSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useSliderControls from "../../hooks/slider/useSliderControls";
const AdsSlider = ({ data }) => {
  const { i18n } = useTranslation();
  const { sliderRef, slickNext, slickPrev } = useSliderControls();

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
        <div className="controls mb-3 mt-5 mt-md-0 pt-4 pt-md-0 ">
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
        
            <img
              loading="lazy"
              src={item}
              alt="banner/img"
              className={style.mainImg}
            />
        
        ))}
      </Slider>
    </div>
  );
};

export default AdsSlider;
