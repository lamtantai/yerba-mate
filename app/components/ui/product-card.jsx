"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";
import SpreadOut from "@/app/animations/spread-out";

const clipPathButton = {
  initial: {
    clipPath: "inset(0 0 0 calc(100% - 40px) round 40px)",
  },

  animate: {
    clipPath: "inset(0 0 0 0 round 40px)",
  },
};

export default function ProductCard({ product, href }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <SpreadOut>
      <motion.div
        className="relative overflow-hidden rounded-large"
        style={{
          backgroundColor: product.colorSecondary,
          color: product.colorPrimary,
        }}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
      >
        <div className="relative flex aspect-[5/4] w-full flex-col justify-between p-5 md:px-10 lg:aspect-[450/400]">
          <h2 className="text-h2">{product.name}</h2>

          <div className="flex justify-end">
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
                  backgroundColor: product.color,
                }}
              >
                <IoArrowForwardSharp />
              </span>
            </motion.button>
          </div>

          <div className="absolute bottom-0 left-5 z-10 w-[20%] md:left-10">
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
                className="h-auto w-full"
              />
            </motion.div>
          </div>

          <div className="absolute -left-5 bottom-0 w-[45%] md:-left-10">
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
                src={product.srcIllustration}
                width={150}
                height={50}
                alt={product.name}
                className="h-auto w-full"
              />
            </motion.div>
          </div>
        </div>

        <Link
          href={href}
          className="absolute inset-0 z-30 h-full w-full bg-black opacity-0 duration-300 hover:opacity-5"
        />
      </motion.div>
    </SpreadOut>
  );
}
