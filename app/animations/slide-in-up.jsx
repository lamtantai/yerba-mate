import React from "react";
import { motion } from "framer-motion";

export default function SlideInUp({ children, zIndex }) {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative ${zIndex}`}
    >
      {children}
    </motion.div>
  );
}
