import React from "react";
import style from "./weoffer.module.css";
import OfferCard from "../../utils/offerCard/OfferCard";

const Weoffer = ({ data }) => {
  return (
    <div className={`my-4 ${style.mainDiv} d-flex align-items-center`}>
      <div className="container pt-3 pt-md-0">
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-12 col-md-4 col-lg-3 mb-3 mb-lg-0">
              <OfferCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weoffer;
