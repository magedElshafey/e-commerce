import React, { useState } from "react";
import style from "./productDetails.module.css";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/cart";
import { toast } from "react-hot-toast";
const ProductDetails = ({ data, content }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelectedIndex = (index) => {
    setSelectedIndex(index);
  };
  const [selectedColor, setSelectedColor] = useState(null);
  const [showError, setShowError] = useState(false);
  const [modal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // if (data.color && !selectedColor) {
    //   toast.error(t("cartError"));
    //   setShowError(true);
    //   return;
    // } else {
    //   setShowError(false);

    // }
  };
  return (
    <div className="container mb-4">
      <div className="row mb-3">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <div className="d-flex flex-column align-items-center ">
            <img
              className={`pointer mb-3 ${style.mainImg}`}
              src={data.slider[selectedIndex]}
              alt="product/img"
              onClick={handleShowModal}
            />
            <div className="d-flex flex-wrap gap-2">
              {data.slider.map((item, index) => (
                <img
                  key={index}
                  alt="product/images"
                  src={item}
                  loading="lazy"
                  className={`mt-3 pointer ${style.subImgs}`}
                  onClick={() => handleSelectedIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <div className="d-flex align-items-center m-0 p-0 mb-2 ">
            <AiFillStar className={style.rev} size={15} />
            <AiFillStar className={style.rev} size={15} />
            <AiFillStar className={style.rev} size={15} />
            <AiFillStar className={style.rev} size={15} />
            <AiFillStar className={style.rev} size={15} />
          </div>
          <p className={`${style.title} m-0 p-0 `}>{data.title}</p>
          {/** descreption */}
          <ul className={`me-4 ms-0  my-3 ${style.menu}`}>
            {data.desc.slice(0, 4).map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
          {/*price*/}
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center gap-4">
              <p className={`m-0 p-0 mb-1 ${style.currentPrice}`}>
                {data.disscount
                  ? data.orignalPrice - data.disscount
                  : data.orignalPrice}{" "}
                {t("le")}
              </p>
              {data.disscount && (
                <del className={`m-0 p-0 ${style.orginalPrice}`}>
                  {data.orignalPrice} {t("le")}
                </del>
              )}
            </div>
            <div>
              <p className={`m-0 p-0 mb-2 fw500 `}>
                {data.isAvailable && i18n.language === "ar"
                  ? "متوفر في المخزن"
                  : data.isAvailable && i18n.language === "en"
                  ? "Available in stock"
                  : !data.isAvailable && i18n.language === "ar"
                  ? "غير متوفر"
                  : "unavailable"}
              </p>
              <p className={`m-0 p-0 ${style.gray}`}>
                {t("code")} : {data.code}
              </p>
            </div>
          </div>
          {/**installment */}

          {/**colors*/}
          {data.color.length > 1 && (
            <div>
              <p className={`fw500 m-0 p-0 ${style.color} mb-2`}>
                {t("color")} :{" "}
              </p>
              <div className="my-3 d-flex align-items-center flex-wrap gap-2">
                {data.slider.map((item, index) => (
                  <img
                    key={index}
                    loading="lazy"
                    alt="product-color/img"
                    src={item}
                    className={`${style.coloredImg} py-2 ${
                      selectedColor === index ? style.active : null
                    }`}
                    onClick={() => {
                      handleSelectedIndex(index);
                      setSelectedColor(index);
                      setShowError(false);
                    }}
                  />
                ))}
              </div>
              {showError && <p className="my-2 red error">{t("required")}</p>}
            </div>
          )}
          {/** add to cart */}
          <div className="mt-4">
            <div className="d-flex gap-3 flex-wrap">
              {/**quantity*/}
              <div className={style.qtyContainer}>
                <p className="m-0 p-0">1</p>
              </div>

              <button onClick={() => handleAddToCart(data)} className="newBtn">
                {t("cart")}
              </button>
              <button
                className={`pointer d-flex align-items-center gap-2 justify-content-center ${style.wishBtn} `}
              >
                <AiFillHeart size={20} />
                <p className={`m-0 p-0 `}>{t("whishlist")}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
