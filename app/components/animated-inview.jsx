"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { bounce } from "../animations/animations";

export default function AnimatedInView({ variants, fit, children }) {
  return (
    <motion.div
      initial="initial"
      whileInView="enter"
      variants={variants}
      viewport={{ once: true }}
      className={fit ? "h-fit w-fit" : "h-auto w-auto"}
    >
      {children}
    </motion.div>
  );
}

export function ScrollYProgressContainer({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) =>
    console.log(latest),
  );
  return <motion.div ref={ref}>{children}</motion.div>;
}

export function AnimatedText({ line1, line2 }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xLine1 = useTransform(scrollYProgress, [0, 1], ["-60%", "-10%"]);
  const xLine2 = useTransform(scrollYProgress, [0, 1], ["60%", "10%"]);

  return (
    <h2
      className="mb-14 flex h-full flex-col overflow-hidden px-small py-4 text-5xl lg:mb-32 lg:text-center lg:text-6xl 2xl:text-9xl"
      ref={ref}
    >
      <motion.span className="text-gray" variants={bounce}>
        <motion.span className="lg:inline-block" style={{ x: xLine1 }}>
          {line1}
        </motion.span>
      </motion.span>
      <br />
      <motion.span className="text-black" variants={bounce}>
        <motion.span className="lg:inline-block" style={{ x: xLine2 }}>
          {line2}
        </motion.span>
      </motion.span>
    </h2>
  );
}
