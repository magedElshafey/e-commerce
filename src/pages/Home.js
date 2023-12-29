import React from "react";
import AdsSlider from "../components/Home/ADSSlider/AdsSlider";
import Weoffer from "../components/Home/weoffer/Weoffer";
import FlashSale from "../components/Home/flashSale/FlashSale";
import ShopWithCategory from "../components/Home/shopWithCategory/ShopWithCategory";
import DoubleBanner from "../components/utils/doubleBanner/DoubleBanner";
import banner1 from "../assets/banner-01.png";
import banner2 from "../assets/banner-02.png";
import banner3 from "../assets/banner-03.png";
import ProductSlider from "../components/utils/productSlider/ProductSlider";
import HeroBox from "../components/utils/heroBox/HeroBox";
import Banner from "../components/utils/banner/Banner";
import Blogs from "../components/Home/blogs/Blogs";
import ShopNow from "../components/Home/shopNow/ShopNow.jsx";
const Home = ({
  bannerSlider,
  weoffer,
  flashsale,
  shopWithCategory,
  rooms,
  bestSaller,
  blogs,
  allProducts,
}) => {
  return (
    <div className="py-4 mt-4 mt-md-0">
      <AdsSlider data={bannerSlider} />
      <Weoffer data={weoffer} />
      <FlashSale data={flashsale} />
      <ShopWithCategory data={shopWithCategory} />
      <DoubleBanner
        alt1="banner/img"
        alt2="banner/img"
        img1={banner1}
        img2={banner2}
      />
      <ShopNow data={allProducts} />
      <ProductSlider data={flashsale} />
      <HeroBox
        title="غرف مريحة يصعب عليك تركها"
        data={rooms}
        path="/cat/gallery"
      />
      <Banner alt="banner/img" img={banner3} />
      <ProductSlider data={bestSaller} />
      <Blogs data={blogs} />
    </div>
  );
};

export default Home;
