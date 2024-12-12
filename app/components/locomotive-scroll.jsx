"use client";

import { useEffect, useRef } from "react";

import LocomotiveScroll from "locomotive-scroll";

import { useMenu } from "../context/menu-provider";

const SmoothScroll = ({ children }) => {
  const { isMenuOpen } = useMenu();
  const scrollRef = useRef(null);
  const locomotiveInstance = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll once
    if (scrollRef.current) {
      locomotiveInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    }

    // Clean up on unmount
    return () => {
      if (locomotiveInstance.current) locomotiveInstance.current.destroy();
    };
  }, []);

  useEffect(() => {
    // Control Locomotive Scroll and body overflow based on `isMenuOpen`
    if (locomotiveInstance.current) {
      isMenuOpen
        ? locomotiveInstance.current.stop()
        : locomotiveInstance.current.start();
    }
  }, [isMenuOpen]);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;
