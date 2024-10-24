"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { IoBagOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import Menu from "./menu";

const createTranslateX = (direction) => ({
  initial: { x: direction === "left" ? "-140%" : 0 },
  animate: {
    x: direction === "left" ? "0%" : "140%",
    transition: { duration: 0.6, ease: [0.38, 0.005, 0.215, 1] },
  },
  exit: {
    x: direction === "left" ? "-140%" : 0,
    transition: { duration: 0.6, ease: [0.38, 0.005, 0.215, 1] },
  },
});

const translateY = {
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: [0.38, 0.005, 0.215, 1] },
  },

  hidden: {
    y: "-100%",
    transition: { duration: 0.6, ease: [0.38, 0.005, 0.215, 1] },
  },
};

const scale = {
  initial: {
    transform: "scaleX(0)",
  },

  animate: {
    transform: "scaleX(1)",
    transition: { duration: 0.3, ease: [0.38, 0.005, 0.215, 1] },
    transformOrigin: "left center",
  },
};

const variants = {
  animate: {
    transition: { staggerChildren: 0.05 },
  },

  exit: {
    transition: { staggerChildren: 0.05 },
  },
};

const MenuLine = () => {
  return (
    <span className="relative h-[2px] w-full overflow-hidden">
      <motion.span
        className="absolute left-0 top-0 h-full w-full bg-white"
        variants={createTranslateX("left")}
      ></motion.span>
      <motion.span
        className="absolute left-0 top-0 h-full w-full bg-white"
        variants={createTranslateX("right")}
      ></motion.span>
    </span>
  );
};

const IconButton = ({ href, icon, showBadge = false }) => (
  <motion.li className="mr-2 rounded-full bg-gray/20 hover:bg-gray/50">
    <Link
      href={href}
      className="relative flex size-10 items-center justify-center"
    >
      <span className="text-2xl">{icon}</span>
      {showBadge && (
        <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-black text-sm">
          0
        </span>
      )}
    </Link>
  </motion.li>
);

const NavItem = ({ href, children, className }) => {
  return (
    <motion.li
      className={twMerge("flex h-full items-start text-xl", className)}
      initial="initial"
      whileHover="animate"
    >
      <Link href={href} className="relative mt-1">
        {children}
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] w-full bg-white"
          variants={scale}
          transition={{ duration: 0.3, ease: [0.38, 0.005, 0.215, 1] }}
          style={{ transformOrigin: "right center" }}
        />
      </Link>
    </motion.li>
  );
};

export default function Header() {
  const [isHover, setIsHover] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastYRef = useRef(0);
  const { scrollY } = useScroll();

  // Handle side effects for body overflow when the menu is toggled
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
  }, [isMenuOpen]);

  // Track scroll changes to toggle header visibility
  useMotionValueEvent(scrollY, "change", (y) => {
    const different = y - lastYRef.current;
    if (Math.abs(different) >= 50) {
      setIsHeaderHidden(different > 0); // Hide on scroll down, show on scroll up

      lastYRef.current = y;
    }
  });

  return (
    <>
      <Menu isOpen={isMenuOpen} />
      <motion.header
        className="fixed top-0 z-50 w-full py-[var(--header-height-padding)] font-studioProBold"
        variants={translateY}
        animate={isHeaderHidden ? "hidden" : "visible"}
      >
        <div className="flex h-[var(--header-height-inner)] justify-between px-5">
          {/* LEFT */}
          <nav className="flex h-full">
            <div className="mr-5 h-[50px] w-[100px] md:h-[60px] md:w-[120px] xl:mr-14">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 118 60"
                  fill="white"
                >
                  <g>
                    <path d="M39.8,30.8H45v28.8h-5.2V30.8z"></path>
                    <path d="M48.8,33c0-1.8,1.4-3.2,3.2-3.2c1.8,0,3.2,1.5,3.2,3.2c0,1.8-1.4,3.2-3.2,3.2C50.2,36.2,48.8,34.8,48.8,33z M49.3,38.6h5.2v21h-5.2V38.6z"></path>
                    <path d="M64.3,57.1L64.3,57.1l-0.1,2.5H59V30.8h5.2c0,0,0,6.9-0.2,10.4h0.1c1.4-2,3.9-3,6.3-3c5.8,0,9.2,4.4,9.2,10.9S76,60,70.5,60C67.9,60,65.6,59,64.3,57.1z M74.1,49.1c0-4.2-2-6.8-5.1-6.8c-3.2,0-5,2.7-5,6.8s2,6.7,5.1,6.7S74.1,53.2,74.1,49.1z"></path>
                    <path d="M82.7,38.6h5.2v3.9H88c0.9-2,3.1-4,6.8-4c0.6,0,1,0.1,1.3,0.2v5.2H96c0,0-0.5-0.2-1.8-0.2c-4.1,0-6.3,2.4-6.3,6.9v9h-5.2V38.6z"></path>
                    <path d="M97.3,49.1c0-6.6,4.4-10.9,10.4-10.9s10.1,4.1,10.1,10.4c0,0.5,0,0.9,0,1.7h-14.9c0,3.6,2.2,5.5,5.1,5.5c2.3,0,3.7-1.1,4.4-2.9h5.2c-0.6,4.1-4.7,7.1-9.7,7.1C101.6,60,97.3,55.3,97.3,49.1z M112.4,46.9c-0.2-2.9-2.1-4.5-4.7-4.5c-2.8,0-4.6,1.8-4.8,4.5H112.4z"></path>
                    <path d="M0,5.6h5.2v2.8h0.1c1.1-1.9,3.4-3.2,5.8-3.2c2.9,0,4.8,1.2,5.9,3.3h0.1c1.5-2.1,4.1-3.3,6.7-3.3c5.3,0,7.9,3.3,7.9,8.2v13.1h-5.2V13.8c0-3-1.5-4.3-3.8-4.3c-2.8,0-4.2,2.3-4.2,5.8v11.4h-5.2V13.7c0-2.8-1.5-4.3-3.8-4.3c-2.8,0-4.1,2.3-4.1,5.8v11.4H0V5.6z"></path>
                    <path d="M34.8,20.8c0-4.8,3.9-6.3,9.5-6.8l4.1-0.3c0-3.3-1.5-4.7-3.8-4.7c-2.6,0-3.8,1.3-3.8,3.3h-5.3c0-4.3,3.7-7.2,9.1-7.2c5.8,0,9.1,3.2,9.1,8.1v9c0,2.7,0.2,3.2,0.7,3.9v0.3h-5c-0.4-0.6-0.6-2-0.6-2.8h-0.1c-1.2,2.2-4,3.2-6.8,3.2C37.7,27,34.8,24.5,34.8,20.8z M48.5,18v-0.9l-4.2,0.4c-2.6,0.3-3.9,1.2-3.9,2.8c0,1.6,1.4,2.7,3.4,2.7C46.8,23.1,48.5,20.9,48.5,18z"></path>
                    <path d="M58.9,21.7V9.6h-3.4v-4h3.4V0h5.2v5.6h3.9v4h-3.9v10.2c0,2.1,0.9,2.6,2.8,2.6c0.4,0,0.9,0,1.1-0.1v4.3c-0.6,0.1-1.7,0.2-2.9,0.2C60.8,26.8,58.9,24.6,58.9,21.7z"></path>
                    <path d="M69.4,16.1c0-6.6,4.4-10.9,10.4-10.9c6,0,10.1,4.1,10.1,10.4c0,0.5,0,0.9,0,1.7H74.9c0,3.6,2.2,5.5,5.1,5.5c2.3,0,3.7-1.1,4.4-2.9h5.2c-0.6,4.1-4.7,7.1-9.7,7.1C73.7,27,69.4,22.3,69.4,16.1z M84.5,13.9c-0.2-2.9-2.1-4.5-4.7-4.5c-2.8,0-4.6,1.8-4.8,4.5H84.5z"></path>
                  </g>
                </svg>
              </Link>
            </div>

            {/* BUTTON MENU */}
            <motion.button
              className="mr-14 flex size-10 items-center justify-center rounded-full bg-gray/20 hover:bg-gray/50"
              variants={variants}
              initial="initial"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              animate={isHover ? "animate" : "exit"}
            >
              <span className="flex h-[10px] w-5 flex-col justify-between">
                {[...Array(3)].map((_, i) => (
                  <MenuLine key={i} />
                ))}
              </span>
            </motion.button>

            <ul className="hidden space-x-11 text-white lg:flex">
              <NavItem href="/">products</NavItem>
              <NavItem href="/">
                <span className="flex items-center">
                  explore
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </span>
              </NavItem>
              <NavItem href="/">community</NavItem>
            </ul>
          </nav>

          {/* RIGHT */}
          <div className="h-full">
            <ul className="flex text-white">
              {/* <li className="mr-11 hidden font-studioProBold text-lg md:flex md:items-center lg:text-xl">
              <Link href="/">build your box</Link>
            </li> */}
              <NavItem href="/" className="mr-11 hidden md:flex">
                build your box
              </NavItem>

              <IconButton href="/" icon={<IoPersonOutline />} />
              <IconButton href="/" icon={<IoBagOutline />} showBadge />
            </ul>
          </div>
        </div>
      </motion.header>
    </>
  );
}
