import React from "react";
import { useParams } from "react-router-dom";
import FirstArticle from "../components/blog/firstArticle/FirstArticle";
import SecondArticle from "../components/blog/secondArticle/SecondArticle";
import ThirdArticle from "../components/blog/thirdArticle/ThirdArticle";
import { useQuery } from "react-query";
import Spinner from "../components/utils/spinner/Spinner";
import { request } from "../components/utils/axios";
const Blog = () => {
  const { id } = useParams();

  const fetchBlog = (id) => {
    return request({ url: `/blogs/${id}` });
  };
  const { isLoading, data } = useQuery(["blog-details"], () => fetchBlog(id));
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="pb-4 mt-5 pt-5 mt-md-0">
          <div className="container mt-5 mt-md-0">
            <FirstArticle data={data?.data?.data?.blog} />
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
/**
 * <SecondArticle data={dataAsArr[0]} />
            <ThirdArticle data={dataAsArr[0]} />
 */
