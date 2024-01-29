import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CategorySlider from "../components/utils/categorySlider/CategorySlider";
import ProductSlider from "../components/utils/productSlider/ProductSlider";
import ProductCard from "../components/utils/productCard/ProductCard";

const SubCategory = ({ data }) => {
  const { i18n } = useTranslation();
  const params = useParams();
  const mainCategoryData = data?.filter((item) => item.path === params.title);
  console.log("mainCategoryData", mainCategoryData);
  const subCategoryData = mainCategoryData[0]?.subCategories?.filter(
    (item) => item.path === params.subTitle
  );

  return (
    <div className="py-4 mt-4 mt-md-0">
      <div className="container">
        <h3 className="fw-bolder fs-4 m-0 p-0 mb-4">
          {i18n.language === "ar"
            ? subCategoryData[0]?.title
            : subCategoryData[0]?.enTitle}
        </h3>
        {subCategoryData[0]?.categories && (
          <CategorySlider
            length={4}
            data={subCategoryData[0].categories}
            path={`/cat/${mainCategoryData[0].path}/${subCategoryData[0].path}`}
          />
        )}
        <div className="my-4">
          <ProductSlider data={subCategoryData[0]?.specialProducts} />
        </div>
        <div className="my-4">
          <ProductSlider data={subCategoryData[0]?.bestSaller} />
        </div>
        <div className="my-4">
          <ProductSlider data={subCategoryData[0]?.famous} />
        </div>
        <div className="row mt-5 ">
          {subCategoryData[0]?.products.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-3">
              <ProductCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SubCategory;
/**
 *
 */
