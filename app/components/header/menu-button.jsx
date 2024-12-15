"use state";

import React, { useState } from "react";

import { motion } from "framer-motion";
import { useMenu } from "@/app/context/menu-provider";

const translateX = {
  animate: {
    x: "150%",
    transition: { duration: 0.6, ease: [0.38, 0.005, 0.215, 1] },
  },
  exit: { x: 0, transition: { duration: 0.6, ease: [0.38, 0.005, 0.215, 1] } },
};

const variants = {
  animate: {
    transition: { staggerChildren: 0.05 },
  },

  exit: {
    transition: { staggerChildren: 0.05 },
  },
};

export default function MenuButton({ buttonColor, buttonColorHover, color }) {
  const { isMenuOpen, toggleMenu } = useMenu();

  const [isHover, setIsHover] = useState(false);

  return (
    <motion.button
      className="relative flex h-button w-button items-center justify-center"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => toggleMenu()}
      variants={variants}
      animate={isHover ? "animate" : "exit"}
    >
      <span
        className="absolute inset-0 z-10 rounded-full bg-[--color-header-button] opacity-50 transition-all duration-500 hover:bg-[--color-header-button-hover] hover:opacity-70"
        style={{
          backgroundColor: isHover ? buttonColorHover : buttonColor,
        }}
      ></span>

      <span className="flex h-[10px] w-5 flex-col justify-between">
        {[...Array(3)].map((_, index) => (
          <MenuLine key={index} color={isMenuOpen ? "black" : color} />
        ))}
      </span>
    </motion.button>
  );
}

const MenuLine = ({ color }) => {
  return (
    <span className="relative h-[2px] w-full overflow-hidden">
      <motion.span
        className="absolute right-0 h-full w-full bg-white"
        style={{ backgroundColor: color }}
        variants={translateX}
      ></motion.span>

      <motion.span
        className="absolute right-[150%] h-full w-full bg-white"
        style={{ backgroundColor: color }}
        variants={translateX}
      ></motion.span>
    </span>
  );
};
