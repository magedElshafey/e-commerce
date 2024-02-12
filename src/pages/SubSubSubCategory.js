import React from 'react'
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProductSlider from "../components/utils/productSlider/ProductSlider";
import ProductCard from "../components/utils/productCard/ProductCard";
import { request } from "../components/utils/axios";
import { useQuery } from "react-query";
import Spinner from "../components/utils/spinner/Spinner";
const SubSubSubCategory = () => {
    const { t } = useTranslation();
    const { mainCategoryTitle, mainCategoryId, subCategoryTitle, subCategoryId, subSubCategoryTitle, subSubCategoryId, subSubSubCategoryTitle , subSubSubCategoryId } = useParams();
    const fetchData = (id) => {
        return request({ url: `/categories/${id}` });
      };
      const { isLoading, data } = useQuery(["sub-sub-sub-categories", subSubSubCategoryId], () =>
        fetchData(subSubSubCategoryId)
      );
  return (
    <>
    {
      isLoading ? <Spinner /> :  <div className="py-4 mt-4 mt-md-0">
      <div >
        <div className='container'>
        <div className="d-flex items-center gap-1 mb-3">
          <p className=" text-black-50">{mainCategoryTitle}</p>
          <p className=" text-black-50"> {`=>`} </p>
        <p className=" text-black-50">{subCategoryTitle}</p>
        <p className=" text-black-50"> {`=>`} </p>
        <p className=" text-black-50">{subSubCategoryTitle}</p>
        <p className=" text-black-50"> {`=>`} </p>
        <p className=" text-black-50">{subSubSubCategoryTitle}</p>
        </div>
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
              <div className='container mt-5'>
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
    }
   </>
  )
}

export default SubSubSubCategory