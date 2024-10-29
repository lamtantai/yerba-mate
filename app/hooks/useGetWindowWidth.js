import { useEffect, useState } from "react";

export default function useGetWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const getWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    getWindowWidth();
    window.addEventListener("resize", getWindowWidth);

    return () => {
      window.removeEventListener("resize", getWindowWidth);
    };
  }, []);

  return windowWidth;
}
