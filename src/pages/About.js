import React from "react";
import AboutDetails from "../components/about/AboutDetails";
import { useQuery } from "react-query";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/spinner/Spinner";
const About = () => {
  const fetchData = () => {
    return request({ url: "/about-us" });
  };
  const { isLoading, data } = useQuery("about-us", fetchData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="py-4 mt-4 mt-md-0">
          <div className="container">
            <AboutDetails data={data?.data?.data?.aboutUs} />
          </div>
        </div>
      )}
    </>
  );
};

export default About;
