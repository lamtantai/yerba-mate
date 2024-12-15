"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { IoArrowForwardSharp } from "react-icons/io5";

const clipPathButton = {
  initial: {
    clipPath: "inset(0 0 0 calc(100% - 40px) round 40px)",
  },

  animate: {
    clipPath: "inset(0 0 0 0 round 40px)",
  },
};

export default function ProductCard({ product }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      className="relative h-full w-full overflow-hidden rounded-large"
      style={{
        backgroundColor: product.colorSecondary,
        color: product.colorPrimary,
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative flex h-full w-full flex-col justify-between p-5 md:px-10">
        <h2 className="max-w-[12.5rem] text-h2/none">{product.name}</h2>

        <div className="relative flex justify-end">
          <motion.button
            className="relative flex h-button w-[125px] items-center rounded-full px-4"
            initial="initial"
            animate={isHover ? "animate" : "initial"}
            variants={clipPathButton}
            style={{
              backgroundColor: product.colorPrimary,
              color: product.colorSecondary,
            }}
          >
            <span className="w-full pb-[0.125rem]">
              <motion.p
                className="pr-8 text-sm"
                animate={{
                  x: isHover ? "0%" : "-20%",
                  opacity: isHover ? 1 : 0,
                  transition: { duration: 0.3 },
                }}
              >
                discover
              </motion.p>
            </span>

            <span
              className="absolute right-0 top-0 flex h-button w-button items-center justify-center rounded-full text-xl"
              style={{
                backgroundColor: product.colorPrimary,
              }}
            >
              <IoArrowForwardSharp />
            </span>
          </motion.button>
        </div>

        <div className="absolute bottom-0 left-5 z-10 w-[20%] md:left-10 lg:w-[7rem]">
          <motion.div
            className="relative"
            animate={{ y: isHover ? "25%" : "35%" }}
            transition={{
              duration: 0.3,
              ease: [0.38, 0.005, 0.215, 1],
            }}
          >
            <Image
              src={product.srcImage}
              width={150}
              height={50}
              alt={product.name}
              className="w- h-auto object-cover"
            />
          </motion.div>
        </div>

        <div className="absolute -left-5 bottom-0 w-[45%] md:-left-10 lg:w-[13rem]">
          <motion.div
            className="relative"
            animate={{
              x: isHover ? "0%" : "-20%",
              y: isHover ? "0%" : "20%",
              opacity: isHover ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.38, 0.005, 0.215, 1],
            }}
          >
            <Image
              src={product.srcIllustrationCard}
              width={150}
              height={50}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <Link
        href={product.href}
        className="absolute inset-0 z-30 h-full w-full"
      />
    </motion.div>
  );
}
