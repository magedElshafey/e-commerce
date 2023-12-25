import React from "react";
import style from "./addressForm.module.css";
import { useTranslation } from "react-i18next";
const AddressForm = () => {
  const { t } = useTranslation();
  return (
    <div className="formContainer p-3 mb-3">
      <div
        className={`d-flex align-items-center justify-content-between ${style.titleContainer} pb-2 `}
      >
        <p className="fw500 m-0 p-0">{t("shippingAddress")}</p>
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
          <label className="text-black-50 d-block mb-1" htmlFor="governorate">
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
          <button className="newBtn">{t("save")}</button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
