import React from "react";
import BranchesDetails from "../components/branches/BranchesDetails";

const Branches = ({ data }) => {
  return (
    <div className="pt-4 mt-5 mt-md-0 overflow-x-hidden">
      {data.map((item, index) => (
        <BranchesDetails data={item} key={index} />
      ))}
    </div>
  );
};

export default Branches;
