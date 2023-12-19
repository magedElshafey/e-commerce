import React, { useEffect, useRef } from "react";
function useClickOutsideHandler(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
function ClickOutsideWrapper({ children, onClickOutside }) {
  const wrapperRef = useRef();

  useClickOutsideHandler(wrapperRef, onClickOutside);

  return <div ref={wrapperRef}>{children}</div>;
}

export default ClickOutsideWrapper;
