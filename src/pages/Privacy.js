import React from "react";
import Spinner from "../components/utils/spinner/Spinner";
import { useQuery } from "react-query";
import { request } from "../components/utils/axios";
import Banner from "../components/utils/banner/Banner";
import img from "../assets/privacy.jpg"
const Privacy = () => {
  const fetchData = () => {
    return request({ url: "/privacy" });
  };
  const { isLoading, data } = useQuery("privacy-page", fetchData);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="py-4 mt-5 mt-md-0">
          <Banner alt="terms-photo" img={img} />
          <div className="container my-4">
            <p className="fw-bold text-center fs-4 m-0 p-0 mb-3">
              {data?.data?.data?.page?.title}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.data?.data?.privacy,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Privacy;
