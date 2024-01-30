import React from "react";
import { useTranslation } from "react-i18next";
import style from "./about.module.css";
const AboutDetails = ({ data }) => {
  const { i18n } = useTranslation();
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`mb-4 ${
            index % 2 === 0 ? "row" : "row flex-row-reverse"
          } justify-content-between`}
        >
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <img
              alt="about-us-img"
              src={item.image}
              className={style.mainImg}
            />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <p className="fw-bolder m-0 p-0  mb-3 fs-4">{item.title}</p>
            <p className="text-black-50 m-0 p-0 lh">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutDetails;
