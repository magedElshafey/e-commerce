import React from "react";
import style from "./productSlider.module.css";
import { useTranslation } from "react-i18next";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import Slider from "react-slick";
import ProductCard from "../productCard/ProductCard";
import useSliderControls from "../../hooks/slider/useSliderControls";
const ProductSlider = ({ data, title }) => {
  const { i18n } = useTranslation();
  const { sliderRef, slickNext, slickPrev } = useSliderControls();
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,

    speed: 500,

    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    verical: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="container my-4">
      {title && <h3 className={`m-0 p-0 mb-3 fs-4 fw-bolder`}>{title}</h3>}
      {data.length && (
        <div className={`${style.slickControls} mb-3`}>
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
          <ProductCard data={item} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
/**
 * <div className="container mb-4">
      <h3 className={`m-0 p-0 mb-3 fs-4 fw-bolder`}>{data.title}</h3>
     
     
    </div>
 */
