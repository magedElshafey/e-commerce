import React from "react";
import AdsSlider from "../components/Home/ADSSlider/AdsSlider";

const Home = ({ bannerSlider }) => {
  return (
    <div className="py-4 mt-4 mt-md-0">
      <AdsSlider data={bannerSlider} />
    </div>
  );
};

export default Home;
