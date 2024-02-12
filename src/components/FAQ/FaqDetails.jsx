import React, { useState } from "react";
import style from "./faq.module.css";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const FaqDetails = ({ data, img }) => {
  const { i18n, t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <img alt="faq-img" src={img} className={style.mainImg} />
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <p className="m-0 p-0 fs-4 mb-4 text-center fw-bolder">{t("faq")}</p>
          <div className={style.faqContainer}>
            {data.fqss.map((item, index) => (
              <div key={index}>
                <div className=" d-flex align-items-center justify-content-between">
                  <p className={`m-0 p-3 fw-bold red`}>{item.question}</p>
                  {activeIndex === null ? (
                    <div className="p-3">
                      <IoIosArrowDown
                        className="pointer "
                        size={20}
                        onClick={() => setActiveIndex(index)}
                      />
                    </div>
                  ) : (
                    <div className="p-3">
                      <IoIosArrowUp
                        size={20}
                        className="pointer"
                        onClick={() => setActiveIndex(null)}
                      />
                    </div>
                  )}
                </div>
                {activeIndex === index && (
                  <div
                    className="p-2"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqDetails;
