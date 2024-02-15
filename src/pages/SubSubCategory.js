import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProductSlider from "../components/utils/productSlider/ProductSlider";
import ProductCard from "../components/utils/productCard/ProductCard";
import { request } from "../components/utils/axios";
import { useQuery } from "react-query";
import Spinner from "../components/utils/spinner/Spinner";
import CategorySlider from "../components/utils/categorySlider/CategorySlider";
const SubSubCategory = () => {
  const { t } = useTranslation();
  const {
    mainCategoryTitle,
    mainCategoryId,
    subCategoryTitle,
    subCategoryId,
    subSubCategoryTitle,
    subSubCategoryId,
  } = useParams();
  const fetchData = (id) => {
    return request({ url: `/categories/${id}` });
  };
  const { isLoading, data } = useQuery(
    ["sub-sub-categories", subSubCategoryId],
    () => fetchData(subSubCategoryId)
  );
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="py-4 mt-4 mt-md-0">
          <div>
            <div className="container">
              <div className="d-flex items-center gap-1 ">
                <p className=" text-black-50">{mainCategoryTitle}</p>
                <p className=" text-black-50"> {`=>`} </p>
                <p className=" text-black-50">{subCategoryTitle}</p>
                <p className=" text-black-50"> {`=>`} </p>
                <p className=" text-black-50">{subSubCategoryTitle}</p>
              </div>
              {data?.data?.data?.categories.length ? (
                <CategorySlider
                  data={data?.data?.data?.categories}
                  path={`/cat/${mainCategoryTitle}/${mainCategoryId}/${subCategoryTitle}/${subCategoryId}/${subSubCategoryTitle}/${subSubCategoryId}`}
                />
              ) : null}
            </div>

            {data?.data?.data?.productsForYou.length ? (
              <div className="my-3 bg-section d-flex items-center py-3">
                <ProductSlider
                  data={data?.data?.data?.productsForYou}
                  title={t("customized")}
                />
              </div>
            ) : null}
            {data?.data?.data?.mostSelling.length ? (
              <div className="my-5">
                <ProductSlider
                  data={data?.data?.data?.mostSelling}
                  title={t("best")}
                />
              </div>
            ) : null}
            {data?.data?.data?.mostRated.length ? (
              <div className="my-5 bg-section d-flex items-center py-3">
                <ProductSlider
                  data={data?.data?.data?.mostRated}
                  title={t("rated")}
                />
              </div>
            ) : null}
            {data?.data?.data?.randomProducts.length ? (
              <div className="mt-5  container">
                <div className="row">
                  {data?.data?.data?.randomProducts.map((item, index) => (
                    <div key={index} className="col-6 col-md-3 col-lg-2 mb-3">
                      <ProductCard data={item} />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default SubSubCategory;
/**
 *  <div className="py-4 mt-4 mt-md-0">
      <div className="container">
        <h3 className="fw-bolder fs-4 m-0 p-0 mb-4">
          {i18n.language === "ar"
            ? subSubCategoryData[0]?.title
            : subSubCategoryData[0]?.enTitle}
        </h3>
        <div className="my-4">
          <ProductSlider data={subSubCategoryData[0]?.specialProducts} />
        </div>
        <div className="my-4">
          <ProductSlider data={subSubCategoryData[0]?.bestSaller} />
        </div>
        <div className="my-4">
          <ProductSlider data={subSubCategoryData[0]?.famous} />
        </div>
        <div className="row mt-5 ">
          {subSubCategoryData[0]?.products.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-3">
              <ProductCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
 */
