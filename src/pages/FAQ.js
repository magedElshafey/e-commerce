import React from "react";
import FaqDetails from "../components/FAQ/FaqDetails";
import Spinner from "../components/utils/spinner/Spinner";
import { request } from "../components/utils/axios";
import { useQuery } from "react-query";
import img from "../assets/faq.jpg";
const FAQ = () => {
  const fetchData = () => {
    return request({ url: "/fqss" });
  };
  const { isLoading, data } = useQuery("faq-page", fetchData , {
    onSuccess : (data) => console.log("data from faq page" , data)
  });
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="py-4 mt-4 mt-md-0">
          <FaqDetails data={data?.data?.data} img={img} />
        </div>
      )}
    </>
  );
};

export default FAQ;
