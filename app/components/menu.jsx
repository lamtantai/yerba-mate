"use client";

import React, { useEffect, useState } from "react";
import Button from "./button";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { clipPath, slideIn, slideInLeft } from "../animations/animations";
import Image from "next/image";

const NAV_ITEMS = [
  {
    title: "about us",
    link: "/",
  },
  {
    title: "retailers",
    link: "/",
  },
  {
    title: "whole sale",
    link: "/",
  },
  {
    title: "faq",
    link: "/",
  },
  {
    title: "contact",
    link: "/",
  },
];

const parent = {
  enter: {
    transition: { staggerChildren: 0.08 },
  },

  exit: {
    transition: { staggerChildren: 0.08 },
  },
};

const animate = (variants, isOpen) => {
  return {
    variants,
    initial: "initial",
    animate: isOpen ? "enter" : "exit",
  };
};

export default function Menu({ isOpen }) {
  const [isDropdown, setIsDropdown] = useState(false);
  const [clippathDirection, setClippathDirection] = useState("top");

  // Update the direction based on screen width
  useEffect(() => {
    const updateDirection = () => {
      setClippathDirection(window.innerWidth <= 1024 ? "top" : "left");
    };
    // Check on mount and update on resize
    updateDirection();
    window.addEventListener("resize", updateDirection);

    return () => window.removeEventListener("resize", updateDirection);
  }, []);

  return (
    <div
      className={`${isOpen ? "pointer-events-auto" : "pointer-events-none"} fixed top-0 z-40 w-full`}
    >
      <div
        className="h-screen w-full"
        style={{
          visibility: `${isOpen ? "visible" : "hidden"}`,
          transition: "all 0.6s cubic-bezier(.38,.005,.215,1)",
        }}
      >
        <motion.div className="flex min-h-full flex-col overflow-hidden lg:flex-row">
          {/* TOP CONTAINER */}
          <motion.div
            className="flex grow flex-col rounded-b-large bg-white px-5 pb-6 pt-[calc(var(--header-height-inner)+var(--header-height-padding)*2)] md:px-[var(--border-radius-large)] lg:grow-0 lg:basis-2/3 lg:rounded-none lg:rounded-r-large"
            {...animate(clipPath(clippathDirection), isOpen)}
          >
            {/* NAV 1 CONTAINER */}
            <nav className="grow pt-6">
              <motion.ul
                className="flex flex-col text-5xl md:text-[6vw]"
                {...animate(parent, isOpen)}
              >
                <motion.li variants={slideInLeft}>
                  <Link
                    href="/products/all"
                    className="inline-block py-[0.375rem]"
                  >
                    products
                  </Link>
                </motion.li>

                <motion.li variants={slideInLeft}>
                  <button
                    href="/"
                    className="inline-flex items-center py-[0.375rem]"
                    onClick={() => setIsDropdown((prev) => !prev)}
                  >
                    explore
                    <MdKeyboardArrowDown />
                  </button>

                  {/* EXPAND MENU LIST  */}
                  <motion.div
                    className="overflow-hidden"
                    variants={{
                      initial: { height: 0 },
                      animate: { height: 170 },
                    }}
                    animate={isDropdown ? "animate" : "initial"}
                  >
                    <ul className="pb-8 pt-5 text-2xl">
                      {["yerba mate", "our story", "fair trade", "faq"].map(
                        (item, index) => (
                          <li key={index}>
                            <Link href="/">{item}</Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </motion.div>
                </motion.li>

                <motion.li variants={slideInLeft}>
                  <Link href="/" className="inline-block py-[0.375rem]">
                    <span>community</span>
                  </Link>
                </motion.li>
              </motion.ul>
            </nav>

            {/* NAV 2 CONTAINER */}
            <div className="pt-10">
              <nav className="flex justify-between">
                <motion.ul
                  className="flex basis-1/2 flex-col text-xl"
                  {...animate(parent, isOpen)}
                >
                  {NAV_ITEMS.map((item, index) => (
                    <motion.li variants={slideIn} key={index}>
                      <Link href={item.link}>{item.title}</Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
            </div>
          </motion.div>

          {/* BOTTOM CONTAINER */}
          <motion.div className="relative -z-10 ml-[-80px] pl-[80px] lg:flex lg:grow lg:flex-col lg:justify-end">
            <motion.div
              className="absolute left-0 top-0 -z-10 hidden h-full w-full lg:block"
              {...animate(clipPath("right"), isOpen)}
            >
              <Image
                src="/mate-menu.jpg"
                width={456}
                height={965}
                alt="Mate image"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-black opacity-40" />
            </motion.div>

            <motion.div
              className="rounded-t-large bg-gray lg:min-h-[280px] lg:rounded-large"
              {...animate(slideIn, isOpen)}
            >
              <motion.div
                className="h-full px-5 py-10 md:px-16 lg:flex lg:flex-col lg:justify-between lg:p-10"
                {...animate(parent, isOpen)}
              >
                <motion.p
                  className="mb-8 max-w-[15rem] text-xl leading-none tracking-tight"
                  variants={slideIn}
                >
                  Subscribe and never miss Mate Libre again
                </motion.p>

                <motion.div variants={slideIn}>
                  <Button>build your box</Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
