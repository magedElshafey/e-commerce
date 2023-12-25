import React from "react";
import { useParams } from "react-router-dom";
const Blog = ({ data }) => {
  const { id } = useParams();
  const dataAsArr = data.filter((item) => item.id === +id);
  return <div></div>;
};

export default Blog;
