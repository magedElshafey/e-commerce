import React, { useState } from "react";
import style from "./client.module.css";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
const ClientFAQS = ({ data }) => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(null);
  return (
    <div className={`my-4 ${style.mainContainer}`}>
      <div className={style.titleContainer}>
        <p className="m-0 p-3 fw-bold">{t("clientFaqs")}</p>
      </div>
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className={`pointer  mb-2 ${style.questionContainer}`}
          >
            <div className="d-flex align-items-center justify-content-between">
              <p className="m-0 p-3 fw-bolder">{item.question}</p>
              {activeId === index ? (
                <div className={`p-3 ${style.arrow}`}>
                  <IoIosArrowBack
                    size={30}
                    className={` pointer ${style.icon}`}
                    onClick={() => setActiveId(null)}
                  />
                </div>
              ) : (
                <div className={`p-3 ${style.arrow}`}>
                  <IoIosArrowDown
                    size={30}
                    className={` pointer ${style.icon}`}
                    onClick={() => setActiveId(index)}
                  />
                </div>
              )}
            </div>
            {activeId === index &&
              item.answer.map((item, index) => (
                <li key={index} className="mb-1 px-3 py-2 mt-0">
                  {item}
                </li>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientFAQS;
