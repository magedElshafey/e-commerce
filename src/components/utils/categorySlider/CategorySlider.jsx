import React from "react";
import style from "./categorySlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from "../categoryCard/CategoryCard";

const CategorySlider = ({ data, path }) => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    autoplay: true, // Enable autoplay
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    verical: false,
    slidesToScroll: 3,
    initialSlide: 0,
    cssEase: "linear",
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
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
    <>
      <Slider {...settings} className={`text-center ${style.slider}`}>
        {data.map((item, index) => (
          <CategoryCard key={index} data={item} path={path} />
        ))}
      </Slider>
    </>
  );
};

export default CategorySlider;
