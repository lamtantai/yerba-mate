"use client";
import { motion } from "framer-motion";

const waving = {
  initial: {
    y: "0%",
  },
  animate: {
    y: ["0%", "-15%", "0%"],
    transition: {
      duration: 0.8,
      repeat: Infinity,
    },
  },
};

const parent = {
  animate: {
    transition: { staggerChildren: 0.075 },
    scale: 1.05,
  },
  exit: {
    transition: { staggerChildren: 0.075 },
  },
};

export default function Button({ href, children, bgWhite }) {
  const chars = children.split("");
  return (
    <div className="">
      <motion.a
        href={href}
        className={`inline-flex h-16 items-center rounded-full px-7 ${bgWhite ? "bg-white text-black" : "bg-black text-white"}`}
        initial="initial"
        whileHover="animate"
      >
        <motion.span className="pb-[0.025rem]" variants={parent}>
          {chars.map((char, index) => (
            <motion.span
              className="inline-block text-xl leading-none"
              key={index + char}
              variants={waving}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </motion.a>
    </div>
  );
}
