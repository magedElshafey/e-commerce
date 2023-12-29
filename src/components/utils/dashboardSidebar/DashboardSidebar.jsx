import React, { useEffect } from "react";
import style from "./dashboardSidebar.module.css";
import camera from "../../../assets/camera.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-social-sharing/dist-modules/common";
const DashboardSidebar = ({ data, activeIndex, setActiveIndex }) => {
  const { i18n } = useTranslation();
  useEffect(() => {
    setActiveIndex(0);
  }, []);
  return (
    <div className={style.mainContainer}>
      <div className="d-flex justify-content-center mb-4">
        <div className="d-flex flex-column align-items-center gap-2">
          <div className={style.imgContainer}>
            <img className={style.avImg} alt="av-img" src={data.img} />
            <div
              className={`${style.cameraContainer} ${
                i18n.language === "ar" ? style.rtl : style.ltr
              }`}
            >
              <img
                alt="camera-icon"
                className={`pointer ${style.camera} `}
                src={camera}
              />
            </div>
          </div>
          <p className={`m-0 p-0 ${style.name}`}>{data.name}</p>
        </div>
      </div>
      <ul className="m-0 p-0">
        {data.details.map((item, index) => (
          <li
            key={index}
            className={`mb-1  ${activeIndex === index ? style.red : null}`}
          >
            <Link
              onClick={() => setActiveIndex(index)}
              className={`text-black fw500 pointer  ${
                activeIndex === index ? style.red : null
              }`}
              to={item.path}
            >
              {i18n.language === "ar" ? item.arTitle : item.enTitle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
