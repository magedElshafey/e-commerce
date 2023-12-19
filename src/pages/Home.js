import React from "react";
import AdsSlider from "../components/Home/ADSSlider/AdsSlider";
import Weoffer from "../components/Home/weoffer/Weoffer";
import FlashSale from "../components/Home/flashSale/FlashSale";

const Home = ({ bannerSlider, weoffer, flashsale }) => {
  return (
    <div className="py-4 mt-4 mt-md-0">
      <AdsSlider data={bannerSlider} />
      <Weoffer data={weoffer} />
      <FlashSale data={flashsale} />
    </div>
  );
};

export default Home;
