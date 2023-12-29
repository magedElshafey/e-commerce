import React from "react";
import { useParams } from "react-router-dom";
import FirstArticle from "../components/blog/firstArticle/FirstArticle";
import SecondArticle from "../components/blog/secondArticle/SecondArticle";
import ThirdArticle from "../components/blog/thirdArticle/ThirdArticle";
const Blog = ({ data }) => {
  const { id } = useParams();
  const dataAsArr = data.filter((item) => item.id === +id);
  return (
    <div className="py-4 mt-4 mt-md-0">
      <div className="container">
        <FirstArticle data={dataAsArr[0]} />
        <SecondArticle data={dataAsArr[0]} />
        <ThirdArticle data={dataAsArr[0]} />
      </div>
    </div>
  );
};

export default Blog;
