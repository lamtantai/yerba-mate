"use client";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      smooth: true,
    });
  }, []);

  return <div data-scroll-container>{children}</div>;
};

export default SmoothScroll;
