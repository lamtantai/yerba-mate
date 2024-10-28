"use client";
import { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["110%", "0%"]);
  useMotionValueEvent(scrollYProgress, "change", (latest) =>
    console.log(latest),
  );

  return (
    <div className="relative flex h-[150vh] items-center" ref={containerRef}>
      <motion.div className="sticky top-0 flex h-[100vh] items-center justify-center overflow-hidden bg-yellow pt-28">
        <motion.div
          className="flex items-center space-x-4 bg-red"
          style={{ x }}
        >
          {["Item 1", "Item 2", "Item 3", "Item 4"].map((item, idx) => (
            <div
              key={idx}
              className="flex min-w-[300px] items-center justify-center rounded-md bg-green p-6 text-orange"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HorizontalScroll;
