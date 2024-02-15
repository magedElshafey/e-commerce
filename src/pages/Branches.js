import React from "react";
import BranchesDetails from "../components/branches/BranchesDetails";
import { useQuery } from "react-query";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/spinner/Spinner";
import branchesImg from "../assets/location.jpg";
import Banner from "../components/utils/banner/Banner";
import { useTranslation } from "react-i18next";
const Branches = () => {
  const { t } = useTranslation();
  const fetchData = () => {
    return request({ url: "/branches" });
  };
  const { isLoading, data } = useQuery("branches", fetchData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Banner alt="branches-banner" img={branchesImg} />
          <div className="container">
            <p className="text-center my-3 fw-bolder red fs-4">
              {t("branches")}
            </p>
            <div className="row justify-content-center my-4">
              {data?.data?.data?.branches.map((item, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
                  <BranchesDetails data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Branches;
/**
 *  <div className="pb-4 pt-5 mt-5 mt-md-0 overflow-x-hidden">
          {data?.data?.data?.branches.map((item, index) => (
            <BranchesDetails data={item} key={index} />
          ))}
        </div>
 */
