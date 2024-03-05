import React from "react";
import style from "./productCard.module.css";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import { addToCart } from "../../../Redux/cart";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import StarRatings from "react-star-ratings";
const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const navigateProductDetails = (id) => navigate(`/product/${id}`);
  return (
    <div
      className={`pb-3 ${style.card} `}
      style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
    >
      {data.hasOffer ? (
        <div className={style.label}>
          {data?.offer?.type === "fixed"
            ? i18n.language === "ar"
              ? `خصم ${data?.offer?.discount} جنيه`
              : `${data?.offer?.discount} L.E Discount`
            : i18n.language === "ar"
            ? `خصم ${data?.offer?.discount} %`
            : `${data?.offer?.discount}% discount`}
        </div>
      ) : null}

      {/**img */}
      <div className="d-flex justify-content-center my-3">
        <img alt="product/img" className={style.mainImg} src={data.image} />
      </div>
      {/*reveiw*/}
      {data.rating.avg ? (
        <div className="d-flex align-items-center gap-1 flex-wrap mb-2">
          <div>
            <StarRatings
              rating={data?.rating?.avg} // Average rating value
              starRatedColor="gold" // Color of the filled stars
              starEmptyColor="lightgray" // Color of the empty stars
              numberOfStars={5} // Total number of stars
              starDimension="15px" // Size of the stars
              starSpacing="2px" // Spacing between stars
            />
          </div>

          <p
            className={`m-0 p-0 mt-1 ${style.rev}`}
          >{`(${data.rating.sum})`}</p>
        </div>
      ) : null}

      {/* title*/}
      <Link
        to={`/product/${data.id}`}
        className={`m-0 p-0  mb-2 ${style.title}`}
      >
        {data.name.substr(0, 25)}...
      </Link>
      {/*price*/}
      <div className="mb-4">
        <p className="m-0 p-0 fw-bolder sans">
          {data?.hasOffer
            ? data?.offer?.priceAfterDiscount
            : data?.discount
            ? data.price_after_discount
            : data.price}{" "}
          .00 {t("le")}
        </p>
        {data.discount && (
          <del className="red m-0 p-0 sans">
            {data.price}.00 {t("le")}
          </del>
        )}
        {/**
         *  <p className="fw-bolder m-0 p-0  ">
          {data.discount ? data.price_after_discount : data.price}
          
        </p>
        
         */}
      </div>
      <div
        className={`${style.iconContainer} ${
          i18n.language === "ar" ? style.right : style.left
        }  d-flex align-items-center justify-content-center gap-2 flex-wrap`}
      >
        <div className={style.circule}>
          <BsCart className={style.icon} />
        </div>
        <div className={style.circule2}>
          <AiOutlineHeart className={style.icon} />
        </div>
        <div
          onClick={() => navigateProductDetails(data.id)}
          className={style.circule3}
        >
          <AiOutlineEye className={style.icon} />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
/**
 *  <div className="d-flex align-items-center gap-1 mb-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8.275 11.9188L11.425 13.9188C11.8312 14.175 12.3312 13.7938 12.2125 13.325L11.3 9.73752C11.2753 9.63807 11.2792 9.53369 11.3113 9.43638C11.3434 9.33907 11.4023 9.2528 11.4812 9.18752L14.3062 6.83127C14.675 6.52502 14.4875 5.90627 14.0062 5.87502L10.3187 5.63752C10.2181 5.63166 10.1214 5.59663 10.0404 5.53669C9.95935 5.47675 9.89754 5.39451 9.8625 5.30002L8.4875 1.83752C8.4511 1.73745 8.38479 1.65102 8.29758 1.58994C8.21037 1.52886 8.10647 1.49609 8 1.49609C7.89352 1.49609 7.78963 1.52886 7.70241 1.58994C7.6152 1.65102 7.54889 1.73745 7.5125 1.83752L6.1375 5.30002C6.10245 5.39451 6.04064 5.47675 5.95962 5.53669C5.87859 5.59663 5.78186 5.63166 5.68125 5.63752L1.99375 5.87502C1.5125 5.90627 1.325 6.52502 1.69375 6.83127L4.51875 9.18752C4.59771 9.2528 4.65661 9.33907 4.68868 9.43638C4.72075 9.53369 4.72467 9.63807 4.7 9.73752L3.85625 13.0625C3.7125 13.625 4.3125 14.0813 4.79375 13.775L7.725 11.9188C7.8072 11.8665 7.90259 11.8387 8 11.8387C8.09741 11.8387 8.1928 11.8665 8.275 11.9188Z"
              fill="#FA8232"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8.275 11.9188L11.425 13.9188C11.8312 14.175 12.3312 13.7938 12.2125 13.325L11.3 9.73752C11.2753 9.63807 11.2792 9.53369 11.3113 9.43638C11.3434 9.33907 11.4023 9.2528 11.4812 9.18752L14.3062 6.83127C14.675 6.52502 14.4875 5.90627 14.0062 5.87502L10.3187 5.63752C10.2181 5.63166 10.1214 5.59663 10.0404 5.53669C9.95935 5.47675 9.89754 5.39451 9.8625 5.30002L8.4875 1.83752C8.4511 1.73745 8.38479 1.65102 8.29758 1.58994C8.21037 1.52886 8.10647 1.49609 8 1.49609C7.89352 1.49609 7.78963 1.52886 7.70241 1.58994C7.6152 1.65102 7.54889 1.73745 7.5125 1.83752L6.1375 5.30002C6.10245 5.39451 6.04064 5.47675 5.95962 5.53669C5.87859 5.59663 5.78186 5.63166 5.68125 5.63752L1.99375 5.87502C1.5125 5.90627 1.325 6.52502 1.69375 6.83127L4.51875 9.18752C4.59771 9.2528 4.65661 9.33907 4.68868 9.43638C4.72075 9.53369 4.72467 9.63807 4.7 9.73752L3.85625 13.0625C3.7125 13.625 4.3125 14.0813 4.79375 13.775L7.725 11.9188C7.8072 11.8665 7.90259 11.8387 8 11.8387C8.09741 11.8387 8.1928 11.8665 8.275 11.9188Z"
              fill="#FA8232"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8.275 11.9188L11.425 13.9188C11.8312 14.175 12.3312 13.7938 12.2125 13.325L11.3 9.73752C11.2753 9.63807 11.2792 9.53369 11.3113 9.43638C11.3434 9.33907 11.4023 9.2528 11.4812 9.18752L14.3062 6.83127C14.675 6.52502 14.4875 5.90627 14.0062 5.87502L10.3187 5.63752C10.2181 5.63166 10.1214 5.59663 10.0404 5.53669C9.95935 5.47675 9.89754 5.39451 9.8625 5.30002L8.4875 1.83752C8.4511 1.73745 8.38479 1.65102 8.29758 1.58994C8.21037 1.52886 8.10647 1.49609 8 1.49609C7.89352 1.49609 7.78963 1.52886 7.70241 1.58994C7.6152 1.65102 7.54889 1.73745 7.5125 1.83752L6.1375 5.30002C6.10245 5.39451 6.04064 5.47675 5.95962 5.53669C5.87859 5.59663 5.78186 5.63166 5.68125 5.63752L1.99375 5.87502C1.5125 5.90627 1.325 6.52502 1.69375 6.83127L4.51875 9.18752C4.59771 9.2528 4.65661 9.33907 4.68868 9.43638C4.72075 9.53369 4.72467 9.63807 4.7 9.73752L3.85625 13.0625C3.7125 13.625 4.3125 14.0813 4.79375 13.775L7.725 11.9188C7.8072 11.8665 7.90259 11.8387 8 11.8387C8.09741 11.8387 8.1928 11.8665 8.275 11.9188Z"
              fill="#FA8232"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8.275 11.9188L11.425 13.9188C11.8312 14.175 12.3312 13.7938 12.2125 13.325L11.3 9.73752C11.2753 9.63807 11.2792 9.53369 11.3113 9.43638C11.3434 9.33907 11.4023 9.2528 11.4812 9.18752L14.3062 6.83127C14.675 6.52502 14.4875 5.90627 14.0062 5.87502L10.3187 5.63752C10.2181 5.63166 10.1214 5.59663 10.0404 5.53669C9.95935 5.47675 9.89754 5.39451 9.8625 5.30002L8.4875 1.83752C8.4511 1.73745 8.38479 1.65102 8.29758 1.58994C8.21037 1.52886 8.10647 1.49609 8 1.49609C7.89352 1.49609 7.78963 1.52886 7.70241 1.58994C7.6152 1.65102 7.54889 1.73745 7.5125 1.83752L6.1375 5.30002C6.10245 5.39451 6.04064 5.47675 5.95962 5.53669C5.87859 5.59663 5.78186 5.63166 5.68125 5.63752L1.99375 5.87502C1.5125 5.90627 1.325 6.52502 1.69375 6.83127L4.51875 9.18752C4.59771 9.2528 4.65661 9.33907 4.68868 9.43638C4.72075 9.53369 4.72467 9.63807 4.7 9.73752L3.85625 13.0625C3.7125 13.625 4.3125 14.0813 4.79375 13.775L7.725 11.9188C7.8072 11.8665 7.90259 11.8387 8 11.8387C8.09741 11.8387 8.1928 11.8665 8.275 11.9188Z"
              fill="#FA8232"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8.275 11.9188L11.425 13.9188C11.8312 14.175 12.3312 13.7938 12.2125 13.325L11.3 9.73752C11.2753 9.63807 11.2792 9.53369 11.3113 9.43638C11.3434 9.33907 11.4023 9.2528 11.4812 9.18752L14.3062 6.83127C14.675 6.52502 14.4875 5.90627 14.0062 5.87502L10.3187 5.63752C10.2181 5.63166 10.1214 5.59663 10.0404 5.53669C9.95935 5.47675 9.89754 5.39451 9.8625 5.30002L8.4875 1.83752C8.4511 1.73745 8.38479 1.65102 8.29758 1.58994C8.21037 1.52886 8.10647 1.49609 8 1.49609C7.89352 1.49609 7.78963 1.52886 7.70241 1.58994C7.6152 1.65102 7.54889 1.73745 7.5125 1.83752L6.1375 5.30002C6.10245 5.39451 6.04064 5.47675 5.95962 5.53669C5.87859 5.59663 5.78186 5.63166 5.68125 5.63752L1.99375 5.87502C1.5125 5.90627 1.325 6.52502 1.69375 6.83127L4.51875 9.18752C4.59771 9.2528 4.65661 9.33907 4.68868 9.43638C4.72075 9.53369 4.72467 9.63807 4.7 9.73752L3.85625 13.0625C3.7125 13.625 4.3125 14.0813 4.79375 13.775L7.725 11.9188C7.8072 11.8665 7.90259 11.8387 8 11.8387C8.09741 11.8387 8.1928 11.8665 8.275 11.9188Z"
              fill="#FA8232"
            />
          </svg>
        </div>
        <p className={`m-0 p-0 ${style.rev}`}>(4.6)</p>
      </div>
 */
