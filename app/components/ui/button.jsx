"use client";

import React from "react";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export function SwiperButtonContainer({
  color,
  backgroundColor,
  navClassButtonPrev,
  navClassButtonNext,
}) {
  return (
    <div className="flex gap-1">
      <button
        className={`${navClassButtonPrev} rounded-full bg-gray text-black`}
        style={{ color, backgroundColor }}
      >
        <span className="flex h-button w-button items-center justify-center text-xl">
          <IoArrowBackSharp />
        </span>
      </button>
      <button
        className={`${navClassButtonNext} rounded-full bg-gray text-black`}
        style={{ color, backgroundColor }}
      >
        <span className="flex h-button w-button items-center justify-center text-xl">
          <IoArrowForwardSharp />
        </span>
      </button>
    </div>
  );
}

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

export function CTAButton({
  href,
  children,
  backgroundWhite,
  backgroundColor,
  color,
}) {
  const chars = children.split("");
  return (
    <motion.div
      className="w-fit"
      initial={{
        clipPath: "inset(100% round 64px)",
      }}
      animate={{
        clipPath: "inset(0 0 0 0 round 64px)",
      }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    >
      <Link href={href}>
        <motion.p
          className={`inline-flex h-16 items-center rounded-full px-7 ${backgroundWhite ? "bg-white text-black" : "bg-black text-white"}`}
          initial="initial"
          whileHover="animate"
          style={{ backgroundColor, color }}
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
        </motion.p>
      </Link>
    </motion.div>
  );
}
