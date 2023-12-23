import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SubCategory = ({ data }) => {
  const [mainData, setMainData] = useState([]);
  const params = useParams();

  const mainCategoryData = data.filter((item) => item.path === params.title);
  const subCategoryData = mainCategoryData?.subCategories?.filter(
    (item) => item.path === params.subTitle
  );
  console.log("data from mainCategoryData", mainCategoryData.subCategories);
  //   console.log("data from subCategoryData", subCategoryData);
  return <div></div>;
};

export default SubCategory;
/**
 * &&
      item.subCategories.filter(
        (subcategory) => subcategory.path === params.subTitle
      )
        
 */
