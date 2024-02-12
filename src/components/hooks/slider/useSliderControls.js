// useSliderControls.js
import { useRef } from "react";

const useSliderControls = () => {
  const sliderRef = useRef(null);

  const slickNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const slickPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return { sliderRef, slickNext, slickPrev };
};

export default useSliderControls;
