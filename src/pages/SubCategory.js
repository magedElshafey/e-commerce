import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CategorySlider from "../components/utils/categorySlider/CategorySlider";
import ProductSlider from "../components/utils/productSlider/ProductSlider";
import ProductCard from "../components/utils/productCard/ProductCard";
import { request } from "../components/utils/axios";
import { useQuery } from "react-query";
import Spinner from "../components/utils/spinner/Spinner";
const SubCategory = () => {
  const { t } = useTranslation();

  const { mainCategoryTitle, mainCategoryId, subCategoryTitle, subCategoryId } =
    useParams();
  const fetchData = (id) => {
    return request({ url: `/categories/${id}` });
  };
  const { isLoading, data } = useQuery(["sub-categories", subCategoryId], () =>
    fetchData(subCategoryId)
  );
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="py-4 mt-4 mt-md-0">
          <div>
            <div className="container">
              <div className="d-flex items-center gap-1">
                <p className=" text-black-50">{mainCategoryTitle}</p>
                <p className=" text-black-50"> {`=>`} </p>
                <p className=" text-black-50">{subCategoryTitle}</p>
              </div>
              {data?.data?.data?.categories.length ? (
                <CategorySlider
                  data={data?.data?.data?.categories}
                  path={`/cat/${mainCategoryTitle}/${mainCategoryId}/${subCategoryTitle}/${subCategoryId}`}
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
              <div className="my-5 ">
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
              <div className="container mt-5">
                <div className="row  ">
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
export default SubCategory;
/**
 * <div className="py-4 mt-4 mt-md-0">
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
 */
