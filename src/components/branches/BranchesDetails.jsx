import React from "react";
import style from "./branches.module.css";
import { useTranslation } from "react-i18next";
const BranchesDetails = ({ data , key }) => {
  const customMap = data.map_link.replace(
    'width="600"',
    'width="100%"' // Change the width to your desired value
  ).replace(
    'height="450"',
    'height="100%"' // Change the height to your desired value
  );
  const { t, i18n } = useTranslation();
  return (
    <div className={`mb-4 ${key % 2 === 0 ? "row flex-row-reverse" : "row"}`}>
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
  );
};

export default BranchesDetails;
