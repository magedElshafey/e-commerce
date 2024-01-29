import { useQuery } from "react-query";
import { request } from "../../utils/axios";
const fetchBlogs = () => {
  return request({ url: "/blogs" });
};

export const useBlogsQuery = () => {
  return useQuery("blogs", fetchBlogs);
};
