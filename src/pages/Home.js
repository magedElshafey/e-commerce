import React from "react";
import AdsSlider from "../components/Home/ADSSlider/AdsSlider";
import Weoffer from "../components/Home/weoffer/Weoffer";
import FlashSale from "../components/Home/flashSale/FlashSale";
import ShopWithCategory from "../components/Home/shopWithCategory/ShopWithCategory";
import DoubleBanner from "../components/utils/doubleBanner/DoubleBanner";
import ProductSlider from "../components/utils/productSlider/ProductSlider";
import HeroBox from "../components/utils/heroBox/HeroBox";
import Banner from "../components/utils/banner/Banner";
import Blogs from "../components/Home/blogs/Blogs";
import ShopNow from "../components/Home/shopNow/ShopNow.jsx";
import { useBlogsQuery } from "../components/hooks/query/useBlogsQuery.js";
import Spinner from "../components/utils/spinner/Spinner.jsx";
import { useTranslation } from "react-i18next";
const Home = ({
  bannerSlider,
  weoffer,
  flashsale,
  shopWithCategory,
  mainCategory,
  bestSaller,
  banner1,
  banner2,
  banner3,
  banner4,
  shop,
  productsForYou,
}) => {
  const { isLoading, data } = useBlogsQuery();
  const { t } = useTranslation();
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="py-4 mt-4 mt-md-0">
          {bannerSlider.length && <AdsSlider data={bannerSlider} />}
          {weoffer.length && <Weoffer data={weoffer} />}
          <FlashSale data={flashsale} />
          <ShopWithCategory data={shopWithCategory} />
          <DoubleBanner
            alt1="banner/img"
            alt2="banner/img"
            img1={banner1}
            img2={banner2}
          />
          <ShopNow data={shop} banner={banner4} />
          <ProductSlider data={productsForYou} title={t("customized")} />
          <Banner alt="banner/img" img={banner3} />
        

          <ProductSlider data={bestSaller} title={t("best")} />

         
          {data?.data?.data?.blogs.length && (
            <Blogs data={data?.data?.data?.blogs} />
          )}
        </div>
      )}
    </>
  );
};

export default Home;
/**
 * 
          <HeroBox
            title={mainCategory.title}
            data={mainCategory}
            path={`/cat/${mainCategory.title}`}
          />
        
 */