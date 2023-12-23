import React from "react";
import style from "./moreDesc.module.css";
import { useTranslation } from "react-i18next";
import StaticContent from "../staticContent/StaticContent";
const MoreDesc = ({ data, content }) => {
  const { t } = useTranslation();
  return (
    <div className={`mb-5 ${style.mainDiv}`}>
      <div className="container py-3">
        <div className="row ">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <div className={style.box}>
              <div className={style.detailsContainer}>
                <p className="m-0 p-3 fw-bold">{t("moreDetails")}</p>
              </div>
              <ul className={`m-0 p-3 ${style.menu}`}>
                {data.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <StaticContent content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDesc;
