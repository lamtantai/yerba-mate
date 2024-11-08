"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { clipPath, slideIn, slideInLeft } from "../animations/animations";
import Image from "next/image";
import { CTAButton } from "./ui/button";
import useGetWindowWidth from "../hooks/useGetWindowWidth";

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
  const windowWidth = useGetWindowWidth();

  // Update the direction based on screen width
  useEffect(() => {
    const updateDirection = () => {
      setClippathDirection(windowWidth <= 1024 ? "top" : "left");
    };
    // Check on mount and update on resize
    updateDirection();
  }, [windowWidth]);

  return (
    <div
      className={`${isOpen ? "pointer-events-auto" : "pointer-events-none"} fixed top-0 z-50 w-full text-black`}
    >
      <div
        className="h-screen w-full"
        style={{
          visibility: `${isOpen ? "visible" : "hidden"}`,
          transition: "visibility 0.6s cubic-bezier(.38,.005,.215,1)",
        }}
      >
        <motion.div className="relative flex min-h-full flex-col overflow-hidden lg:flex-row">
          <motion.div
            className="absolute left-0 top-0 -z-10 h-full w-full bg-black"
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          />
          {/* TOP CONTAINER */}
          <motion.div
            className="flex grow flex-col rounded-b-large bg-white px-5 pb-6 pt-[calc(var(--header-height))] md:px-[var(--border-radius-large)] lg:grow-0 lg:basis-2/3 lg:rounded-none lg:rounded-r-large"
            {...animate(clipPath(clippathDirection), isOpen)}
          >
            {/* NAV 1 CONTAINER */}
            <nav className="grow pt-6">
              <motion.ul
                className="flex flex-col text-5xl md:text-[6vw]"
                {...animate(parent, isOpen)}
              >
                <motion.li
                  variants={slideInLeft}
                  className="transition-opacity duration-300 hover:opacity-50"
                >
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
                    className="inline-flex items-center py-[0.375rem] transition-opacity duration-300 hover:opacity-50"
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
                    <ul className="pb-8 pt-5 text-2xl lg:text-3xl">
                      {["yerba mate", "our story", "fair trade", "faq"].map(
                        (item, index) => (
                          <li
                            key={index}
                            className="transition-opacity duration-300 hover:opacity-50"
                          >
                            <Link href="/">{item}</Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </motion.div>
                </motion.li>

                <motion.li
                  variants={slideInLeft}
                  className="transition-opacity duration-300 hover:opacity-50"
                >
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
          <motion.div className="relative ml-[-80px] pl-[80px] lg:flex lg:grow lg:flex-col lg:justify-end">
            <motion.div
              className="absolute left-0 top-0 -z-10 hidden h-full w-full lg:block"
              {...animate(clipPath("right"), isOpen)}
            >
              <Image
                src="/mate-menu.jpg"
                width={456}
                height={965}
                alt="Mate image"
                className="h-full w-full object-cover brightness-75"
              />
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

                <CTAButton href="/">build your box</CTAButton>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
