import React from "react";
import style from "./branches.module.css";
import { useTranslation } from "react-i18next";
const BranchesDetails = ({ data }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={`mb-4 ${data.isReversed ? "row flex-row-reverse" : "row"}`}>
      <div
        className={`col-12 col-md-5 p-0 m-0 ${style.box} ${
          data.isReversed ? style.bgSection : style.bgGray
        }`}
      >
        <div className="p-3 d-flex flex-column  align-items-center gap-1">
          <div>
            <p className="m-0 p-0">
              {t("city")} : {i18n.language === "ar" ? data.city : data.enCity}
            </p>
          </div>
          <div>
            <p className="m-0 p-0">
              {t("government")} :{" "}
              {i18n.language === "ar" ? data.governemnt : data.enGovernment}
            </p>
          </div>
          <div>
            <p className="m-0 p-0">
              {t("address")} :{" "}
              {i18n.language === "ar" ? data.address : data.enAddress}
            </p>
          </div>
          <div>
            <p className="m-0 p-0">
              {t("phone")} : {data.phone}
            </p>
          </div>
          <div>
            <a
              href={data.website}
              target="_blank"
              rel="noreferrer"
              className="m-0 p-0 text-black"
            >
              {t("website")}
            </a>
          </div>
        </div>
      </div>
      <div className="p-0 m-0 col-12 col-md-7">
        <iframe
          title="Map"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1709.4481998465017!2d31.370104461145008!3d31.029135941539135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1703069205588!5m2!1sen!2seg"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default BranchesDetails;
