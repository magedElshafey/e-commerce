import React from "react";
import style from "./categorySlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from "../categoryCard/CategoryCard";
import ProductCard from "../productCard/ProductCard";
const CategorySlider = ({ data, path }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true, // Enable autoplay
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: data.length >= 6 ? 6 : data.length > 5 ? 5 : 5,

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
    <>
      {data.length < 4 ? (
        <div className="row">
          <div className="row">
            {data.map((item, index) => (
              <div
                className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0"
                key={index}
              >
                <ProductCard key={item} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Slider {...settings} className={style.slider}>
          {data.map((item, index) => (
            <CategoryCard key={index} data={item} path={path} />
          ))}
        </Slider>
      )}
    </>
  );
};

export default CategorySlider;
