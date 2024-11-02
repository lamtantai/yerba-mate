import React from "react";
import { motion } from "framer-motion";

export default function SlideInDown({ children, zIndex }) {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative ${zIndex}`}
    >
      {children}
    </motion.div>
  );
}
