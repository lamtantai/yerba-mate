import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function useSharedScroll() {
  const { scrollY } = useScroll(); // Get framer-motion's scrollY MotionValue
  const [scrollYValue, setScrollYValue] = useState(0); // State to store the current scrollY value

  // Listen for changes on the MotionValue and update local state
  useMotionValueEvent(scrollY, "change", (latestY) => {
    setScrollYValue(latestY);
  });

  return scrollY;
}
