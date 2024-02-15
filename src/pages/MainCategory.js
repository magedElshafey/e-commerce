import React from "react";
import { useParams } from "react-router-dom";
import CategorySlider from "../components/utils/categorySlider/CategorySlider";
import ProductSlider from "../components/utils/productSlider/ProductSlider";
import ProductCard from "../components/utils/productCard/ProductCard";
import { useQuery } from "react-query";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/spinner/Spinner";
import { useTranslation } from "react-i18next";
const MainCategory = () => {
  const { t } = useTranslation();
  const params = useParams();
  const fetchData = (id) => {
    return request({ url: `/categories/${id}` });
  };
  const { isLoading, data } = useQuery(["main-categories", params.id], () =>
    fetchData(params.id)
  );

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="py-4 mt-5 mt-md-0">
          <div>
            <div className="container">

            <h3 className="fw-bolder fs-4 m-0 p-0 mb-4">{params.title}</h3>
            {data?.data?.data?.categories.length ?
              <CategorySlider
                data={data?.data?.data?.categories}
                path={`/cat/${params.title}/${params.id}`}
              />
             : null}
            </div>
           
            {data?.data?.data?.productsForYou.length ? (
              <div className="my-5 bg-section d-flex items-center py-3">
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
              <div className=" container mt-5 ">
              

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
    </div>
  );
};

export default MainCategory;
/**
 *  <div className="py-4 mt-4 mt-md-0">
      <div className="container">
        <h3 className="fw-bolder fs-4 m-0 p-0 mb-4">
          {i18n.language === "ar"
            ? specialData[0].mainCategory
            : specialData[0].mainCategoryEn}
        </h3>
        {specialData[0].subCategories && (
          <CategorySlider
            data={specialData[0].subCategories}
            path={`/cat/${specialData[0].path}`}
            length={5}
          />
        )}
        <div className="my-4">
          <ProductSlider data={specialData[0].specialProducts} />
        </div>
        <div className="my-4">
          <ProductSlider data={specialData[0].bestSaller} />
        </div>
        <div className="my-4">
          <ProductSlider data={specialData[0].famous} />
        </div>
        <div className="row mt-5 ">
          {specialData[0].products.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-3">
              <ProductCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
 */
