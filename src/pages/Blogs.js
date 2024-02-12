import React from "react";
import banner3 from "../assets/blog.jpg";
import Banner from "../components/utils/banner/Banner";
import BlogCard from "../components/utils/blogCard/BlogCard";
import { useBlogsQuery } from "../components/hooks/query/useBlogsQuery";
import Spinner from "../components/utils/spinner/Spinner";
const Blogs = () => {
  const { isLoading, data } = useBlogsQuery();
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="pb-4 pt-5 pt-md-0 mt-5 mt-md-0">
          <Banner alt="banner/img" img={banner3} />
          <div className="container">
            {data?.data?.data?.blogs.map((item, index) => (
              <div key={index} className="pt-2 pb-4  mb-3">
                <BlogCard data={item} isHome={false} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Blogs;
/**
 * <div className="row">
              {data?.data?.data?.blogs.map((item, index) => (
                <div className="col-12 col-md-6 col-lg-4 mb-3" key={index}>
                  <BlogCard data={item} />
                </div>
              ))}
            </div>
 */
