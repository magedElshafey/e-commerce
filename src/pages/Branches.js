import React from "react";
import BranchesDetails from "../components/branches/BranchesDetails";
import { useQuery } from "react-query";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/spinner/Spinner";
const Branches = () => {
  const fetchData = () => {
    return request({ url: "/branches" });
  };
  const { isLoading, data } = useQuery("branches", fetchData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="pb-4 pt-5 mt-5 mt-md-0 overflow-x-hidden">
          {data?.data?.data?.branches.map((item, index) => (
            <BranchesDetails data={item} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Branches;
