import React from "react";
import style from "./branches.module.css";
import { useTranslation } from "react-i18next";
const BranchesDetails = ({ data }) => {
  const srcRegex = /src="([^"]+)"/;
  const match = data.map_link.match(srcRegex);
  const src = match ? match[1] : "";
  const handleClick = () => {
    // Open the location in a new tab
    window.open(src, "_blank");
  };

  const { t } = useTranslation();
  return (
    <div
      className={`${style.card} py-2 d-flex flex-column align-items-center justify-content-center gap-2`}
    >
      <div>
        <p className="m-0 p-0">
          {t("city")} : {data.city}
        </p>
      </div>
      <div>
        <p className="m-0 p-0">
          {t("government")} : {data.government}
        </p>
      </div>
      <div>
        <p className="m-0 p-0">
          {t("address")} : {data.address}
        </p>
      </div>
      <div>
        <p className="m-0 p-0">
          {t("phone")} : {data.phone}
        </p>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="/#" onClick={handleClick}>
          {t("location")}
        </a>
      </div>
    </div>
  );
};

export default BranchesDetails;
/**
 *  <div className={`mb-4 ${key % 2 === 0 ? "row flex-row-reverse" : "row"}`}>
      <div
        className={`col-12 col-md-5 p-0 m-0 ${style.box} ${
          key % 2 === 0 ? style.bgSection : style.bgGray
        }`}
      >
        <div className="p-3 d-flex flex-column  align-items-center gap-1">
          <div>
            <p className="m-0 p-0">
              {t("city")} :  {data.city }
            </p>
          </div>
          <div>
            <p className="m-0 p-0">
              {t("government")} :{" "}
              { data.government }
            </p>
          </div>
          <div>
            <p className="m-0 p-0">
              {t("address")} :{" "}
              { data.address}
            </p>
          </div>
          <div>
            <p className="m-0 p-0">
              {t("phone")} : {data.phone}
            </p>
          </div>
         
        </div>
      </div>
      <div className="p-0 m-0 col-12 col-md-7">
      <div dangerouslySetInnerHTML={{ __html: customMap }} />
      </div>
    </div>
 */
