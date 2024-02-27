import React, { useEffect, useState, useRef } from "react";
import ShopBanner from "../components/shop/ShopBanner";
import banner from "../assets/offer.png";
import { useTranslation } from "react-i18next";
import ProductCard from "../components/utils/productCard/ProductCard.jsx";
import { useQuery } from "react-query";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/spinner/Spinner.jsx";
const Shop = ({ categories }) => {
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const fetchData = (pageNumber) => {
    return request({ url: `/all-products?page=${pageNumber}` });
  };
  const { data, isLoading, isError, isFetching, fetchMore } = useQuery(
    ["products", page],
    () => fetchData(page),
    {
      keepPreviousData: true,
      staleTime: Infinity,
    }
  );
  const observer = useRef();
  const lastProductRef = useRef();

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const fetchMoreProducts = () => {
    fetchMore();
    setPage((prevPage) => prevPage + 1);
  };
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
          fetchMoreProducts();
        }
      },
      { threshold: 1 }
    );

    if (lastProductRef.current) {
      observer.current.observe(lastProductRef.current);
    }

    return () => {
      if (lastProductRef.current) {
        observer.current.unobserve(lastProductRef.current);
      }
    };
  }, [fetchMoreProducts]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="py-4 mt-4 mt-md-0 container">
          <ShopBanner img={banner} />
          <div className="d-flex align-items-center justify-content-center my-3 gap-5">
            <div>
              <p className="filterBtnTitle text-uppercase m-0 p-0 mb-1">
                {t("cat")}
              </p>
              <button className="filterBtn">
                <select className="filterInp">
                  <option className="text-capitalize" value="">
                    {t("allCat")}
                  </option>
                  {categories.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </button>
            </div>
            <div>
              <p className="filterBtnTitle text-uppercase m-0 p-0 mb-1">
                {t("price")}
              </p>
              <button className="filterBtn">
                <select className="filterInp">
                  <option className="text-capitalize" value="">
                    {t("allPrice")}
                  </option>
                  <option>
                    2500 {t("le")} - 8000 {t("le")}
                  </option>
                  <option>
                    2500 {t("le")} - 8000 {t("le")}
                  </option>
                  <option>
                    2500 {t("le")} - 8000 {t("le")}
                  </option>
                  <option>
                    2500 {t("le")} - 8000 {t("le")}
                  </option>
                  <option>
                    2500 {t("le")} - 8000 {t("le")}
                  </option>
                  <option>
                    2500 {t("le")} - 8000 {t("le")}
                  </option>
                  <option>
                    2500 {t("le")} - 8000 {t("le")}
                  </option>
                  <option>
                    2500 {t("le")} - 8000 {t("le")}
                  </option>
                </select>
              </button>
            </div>
          </div>
          <div className="row">
            {data?.data?.data?.products.map((product, index) => {
              if (data?.data?.data?.products.length === index + 1) {
                return (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3"
                    key={product.id}
                    ref={lastProductRef}
                  >
                    <ProductCard data={product} />
                  </div>
                );
              } else {
                return (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3"
                    key={product.id}
                  >
                    <ProductCard data={product} />
                  </div>
                );
              }
            })}
          </div>
          {isFetching ? <div>Fetching more...</div> : null}
          <div ref={observer}></div>
        </div>
      )}
    </>
  );
};

export default Shop;
/**
 * import React, { useEffect, useState } from "react";
import ShopBanner from "../components/shop/ShopBanner";
import banner from "../assets/offer.png";
import { useTranslation } from "react-i18next";
import ProductCard from "../components/utils/productCard/ProductCard.jsx";
import { useInfiniteQuery } from "react-query";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/spinner/Spinner.jsx";
import { useInView } from "react-intersection-observer";
const Shop = ({ categories }) => {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const LIMIT = 10;
  
  const fetchData = (pageNumber) => {
    return request({ url: `/all-products?page=${pageNumber}&_limit=${LIMIT}` });
  };
  const {
    data,

    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    "products",
    ({ pageParam = page }) => fetchData(pageParam),
    {
      getNextPageParam: (lastPage) => {
        console.log("lastPage", lastPage);
        return lastPage.data.nextPage; // Assuming nextPage field exists in your response
      },
    }
  );
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  console.log("hasNextPage", hasNextPage);
  console.log("inView", inView);
  console.log("pages", data?.pages);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="py-4 mt-4 mt-md-0 container">
         
      
          <div className="row">
            {data.pages.map((item, pageIndex) =>
              item?.data?.data?.products.map((product, index) => {
                if (item.length === pageIndex + 1) {
                  return (
                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                      <ProductCard ref={ref} key={product.id} data={product} />
                    </div>
                  );
                }
                return (
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                    <ProductCard key={product.id} data={product} />
                  </div>
                );
              })
            )}
          </div>
          {isFetchingNextPage && <h3>Loading...</h3>}
          <div></div>
        </div>
      )}
    </>
  );
};

export default Shop;

 */
