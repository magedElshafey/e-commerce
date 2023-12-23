import React, { useState, useEffect } from "react";
import style from "./takseet.module.css";
import { useTranslation } from "react-i18next";
const TaksetDetails = ({ data }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeData, setActiveData] = useState([]);
  useEffect(() => {
    setActiveData(data[0].details);
  }, []);
  return (
    <div className="container">
      <p className="text-center mb-1 fw-bold m-0 p-0">
        {t("takseetAvailable")}
      </p>
      <div className="d-flex align-items-center flex-wrap m-0 p-0">
        {data.map((item, index) => (
          <div
            onClick={() => {
              setActiveIndex(index);
              setActiveData(item.details);
            }}
            key={index}
            className={`m-0 p-0 pointer ${style.imgContainer} ${
              activeIndex === index ? style.active : null
            }`}
          >
            <img className={` ${style.img}`} src={item.img} alt="bank-icon" />
          </div>
        ))}
      </div>
      <div className={`p-2 ${style.detailsContainer}`}>
        {activeData && (
          <table className="table">
            <thead>
              <tr className="text-center">
                <th>{t("months")}</th>
                <th>{t("monthlyInstallment")}</th>
              </tr>
            </thead>
            <tbody>
              {activeData.map((item, index) => (
                <tr key={index} className="text-center">
                  <th>{item.monthNum}</th>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TaksetDetails;
/**
 *    <div className={`p-2 ${style.mainContainer} position-relative`}>
        <div
          className={`d-flex align-items-cent flex-wrap ${
            style.banksContainer
          } ${i18n.langauge === "ar" ? style.rtl : style.ltr}`}
        >
          {data.map((item, index) => (
            <div
              onClick={() => setActiveIndex(index)}
              key={index}
              className={`pointer ${style.imgContainer} ${
                activeIndex === index ? style.active : null
              }`}
            >
              
            </div>
          ))}
        </div>
      </div>
 */
