import React from "react";
import Spinner from "../components/utils/spinner/Spinner";
import { useQuery } from "react-query";
import { request } from "../components/utils/axios";
import Banner from "../components/utils/banner/Banner";
import img from "../assets/terms-02.jpg"
const Terms = () => {
  const fetchData = () => {
    return request({ url: "/terms" });
  };
  const { isLoading, data } = useQuery("terms-page", fetchData);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="py-4 mt-5 mt-md-0">
          <Banner alt="terms-photo" img={img} />
          <div className="container my-4">
          
            <div
              dangerouslySetInnerHTML={{
                __html: data?.data?.data?.terms,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Terms;
