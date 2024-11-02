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

const variants = {
  enter: {
    transition: { staggerChildren: 0.06 },
  },
};

function TextLine({ text, color }) {
  return (
    <motion.span
      className="inline-block"
      variants={bouncingText}
      style={{ color }}
    >
      {text}
    </motion.span>
  );
}

export default function BouncingText({
  line1,
  line2,
  line3,
  colorLine1,
  colorLine2,
  colorLine3,
}) {
  return (
    <motion.h2
      className="overflow-hidden text-huge/none tracking-tight text-white"
      variants={variants}
      initial="initial"
      animate="enter"
    >
      <TextLine text={line1} color={colorLine1} />
      <br />
      <TextLine text={line2} color={colorLine2} />
      <br />

      {/* CONDITIONAL ADDING LINE 3 OF TEXT */}
      {line3 && (
        <>
          <TextLine text={line3} color={colorLine3} />
        </>
      )}
    </motion.h2>
  );
}
