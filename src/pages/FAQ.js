import React from "react";
import FaqDetails from "../components/FAQ/FaqDetails";

const FAQ = ({ data }) => {
  return (
    <div className="py-4 mt-4 mt-md-0">
      <FaqDetails data={data} />
    </div>
  );
};

export default FAQ;
