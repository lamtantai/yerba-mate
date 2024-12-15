"use client";

import { motion } from "framer-motion";

const bouncingText = {
  initial: {
    y: "300%",
  },

  enter: {
    y: ["300%", "-10%", 0, "-7%", 0, "-5%", 0],
    transition: { duration: 2, ease: [0.33, 1, 0.68, 1] },
  },
};

export default function BouncingText({
  line1,
  line2,
  line3,
  colorPrimary,
  colorAccent,
}) {
  return (
    <motion.h1
      className="overflow-hidden text-huge/[1.1] tracking-tight text-white"
      variants={{
        enter: {
          transition: { staggerChildren: 0.06 },
        },
      }}
      initial="initial"
      animate="enter"
    >
      <motion.span variants={bouncingText} style={{ color: colorPrimary }}>
        {line1}
      </motion.span>
      <br />
      <motion.span variants={bouncingText} style={{ color: colorAccent }}>
        {line2}
      </motion.span>
      <br />
      <motion.span variants={bouncingText} style={{ color: colorAccent }}>
        {line3}
      </motion.span>
    </motion.h1>
  );
}
