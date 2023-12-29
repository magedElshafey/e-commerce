import React, { useState } from "react";
import style from "./addresses.module.css";
import { useTranslation } from "react-i18next";
import close from "../../../assets/Line.svg";
const Addresses = ({ address }) => {
  const { t } = useTranslation();
  const [activeAddress, setActiveAddress] = useState(null);
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <p className="m-0 p-0 mb-3 fw500">{t("shippingAddress")}</p>
      <div className="row mb-4">
        {address.map((item, index) => (
          <div
            key={index}
            className={`col-12 col-md-6 col-lg-3 mb-3 ${style.mainContainer}`}
          >
            <div
              className={`p-2 d-flex flex-column align-items-center gap-2  ${
                style.container
              } ${activeAddress === item.id ? style.active : null}`}
            >
              <p className="m-0 p-0 ">{item.name}</p>
              <p className="m-0 p-0 ">{item.st}</p>
              <p className="m-0 p-0 ">{item.governemt}</p>
              <p className="m-0 p-0 ">{item.phone}</p>
              <p className="m-0 p-0 ">{item.city}</p>
              <p className="m-0 p-0 ">{item.country}</p>
              <div className="d-flex align-items-center flex-column justify-content-between gap-2 mt-3">
                {activeAddress !== item.id && (
                  <>
                    <button
                      className={style.btn}
                      onClick={() => setActiveAddress(item.id)}
                    >
                      {t("ship")}
                    </button>
                    <button
                      onClick={() => setShowForm(true)}
                      className={style.edit}
                    >
                      {t("edit")}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <button onClick={() => setShowForm(true)} className="newBtn">
          {t("newAd")}
        </button>
      </div>
      <div className={`${style.overlay} ${showForm ? style.show : style.hide}`}>
        <div className={` p-3   ${style.formContainer} `}>
          <div
            className={`d-flex align-items-center justify-content-between ${style.titleContainer} pb-2 `}
          >
            <p className="fw500 m-0 p-0">{t("shippingAddress")}</p>
            <img
              alt="icon"
              className={`pointer ${style.close}`}
              src={close}
              onClick={() => setShowForm(false)}
            />
          </div>
          <form className="mt-3">
            <div className="mb-3">
              <label className="text-black-50 d-block mb-1" htmlFor="fn">
                {t("fn")}
              </label>
              <input type="text" id="fn" className="checkInp" />
            </div>
            <div className="mb-3">
              <label className="text-black-50 d-block mb-1" htmlFor="ln">
                {t("ln")}
              </label>
              <input type="text" id="ln" className="checkInp" />
            </div>
            <div className="mb-3">
              <label className="text-black-50 d-block mb-1" htmlFor="phone">
                {t("phone")}
              </label>
              <input type="text" id="phone" className="checkInp" />
            </div>
            <div className="mb-3">
              <label className="text-black-50 d-block mb-1" htmlFor="st">
                {t("st")}
              </label>
              <input type="text" id="st" className="checkInp" />
            </div>
            <div className="mb-3">
              <label
                className="text-black-50 d-block mb-1"
                htmlFor="governorate"
              >
                {t("governorate")}
              </label>
              <select className="checkInp" id="governorate">
                <option disabled value="">
                  {t("governorate")}
                </option>
                <option>cairo</option>
                <option>mansoura</option>
                <option>giza</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="text-black-50 d-block mb-1" htmlFor="city">
                {t("city")}
              </label>
              <select className="checkInp" id="city">
                <option value="">{t("governorate")}</option>
                <option>talkha</option>
                <option>mansoura</option>
                <option>smouha</option>
              </select>
            </div>
            <div className="d-flex justify-content-center">
              <button className="newBtn">{t("edit")}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
