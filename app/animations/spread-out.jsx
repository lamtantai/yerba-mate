"use client";

import { motion } from "framer-motion";

const clippath = {
  initial: {
    clipPath: "inset(70% round var(--border-radius-large))",
  },
  enter: {
    clipPath: "inset(0 round var(--border-radius-large))",
    transition: { duration: 0.6 },
  },
};

export default function SpreadOut({ children }) {
  return (
    <motion.div
      className="h-full"
      initial="initial"
      animate="enter"
      variants={clippath}
    >
      {children}
    </motion.div>
  );
}
