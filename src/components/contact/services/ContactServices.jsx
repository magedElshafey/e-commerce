import React from "react";
import style from "./contactServices.module.css";
import { useTranslation } from "react-i18next";
const ContactServices = ({ data }) => {
  const { i18n } = useTranslation();
  return (
    <div className={style.mainDiv}>
      <div className="container">
        <div className="row justify-content-center">
          {data.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="d-flex flex-column align-items-center justify-content-center gap-1">
                <img alt="icon-img" src={item.img} className={style.img} />
                <p className={`${style.title} m-0 p-0`}>
                  {i18n.language === "ar" ? item.arTitle : item.enTitle}
                </p>
                <p className={`${style.desc} m-0 p-0`}>
                  {i18n.language === "ar" ? item.arDesc : item.enDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactServices;
