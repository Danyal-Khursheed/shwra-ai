import { useState, useEffect } from "react";

const useScreenWidth = (targetWidth = 768): boolean => {
  const [isBelowWidth, setIsBelowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth < targetWidth : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsBelowWidth(window.innerWidth < targetWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [targetWidth]);

  return isBelowWidth;
};

export default useScreenWidth;
