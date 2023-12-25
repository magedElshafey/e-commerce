import React from "react";
import banner3 from "../assets/banner-03.png";
import Banner from "../components/utils/banner/Banner";
import BlogCard from "../components/utils/blogCard/BlogCard";
const Blogs = ({ data }) => {
  return (
    <div className="py-4 mt-4 mt-md-0">
      <Banner alt="banner/img" img={banner3} />
      <div className="container">
        <div className="row">
          {data.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={index}>
              <BlogCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
