"use client";

import { useEffect, useRef } from "react";

import LocomotiveScroll from "locomotive-scroll";

import { useMenu } from "../context/menu-provider";

const SmoothScroll = ({ children }) => {
  const { isMenuOpen } = useMenu();

  const scrollRef = useRef(null);

  const locomotiveInstance = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      locomotiveInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    }

    return () => {
      if (locomotiveInstance.current) locomotiveInstance.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (locomotiveInstance.current && isMenuOpen) {
      locomotiveInstance.current.stop();
      document.querySelector("body").style.overflow = "hidden";
    }
    return () => {
      locomotiveInstance.current.start();
      document.querySelector("body").style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;
