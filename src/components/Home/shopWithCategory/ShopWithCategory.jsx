import React from "react";
import style from "./category.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from "../../utils/categoryCard/CategoryCard";
import { useTranslation } from "react-i18next";

const ShopWithCategory = ({ data }) => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true, // Enable autoplay
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",

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
    <div className={`mb-4 ${style.mainDiv}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <p className={`${style.shop} m-0 p-0 mb-4 text-center`}>
              {t("shopWith")}
            </p>

            <Slider {...settings} className={style.slider}>
              {data.map((item, index) => (
                <CategoryCard key={index} data={item} path="/cat" />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopWithCategory;
