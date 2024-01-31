import React from "react";
import style from "./weoffer.module.css";
import OfferCard from "../../utils/offerCard/OfferCard";

const Weoffer = ({ data }) => {
  return (
    <>
      {data.length && (
        <div className="container my-4">
          <div className="row justify-content-center">
            {data.map((item, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3 mb-3 mb-lg-0">
                <div className={` ${style.card}`}>
                  <OfferCard data={item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Weoffer;
