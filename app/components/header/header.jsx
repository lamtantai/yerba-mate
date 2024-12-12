"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { MdKeyboardArrowDown } from "react-icons/md";
import Menu from "../menu";
import { useMenu } from "../../context/menu-provider";
import Logo from "../logo";

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
  initial: {
    y: "-100%",
  },

  visible: {
    y: "0%",
    transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
  },

  hidden: {
    y: "-100%",
    transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
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

const MenuLine = ({ color }) => {
  return (
    <span className="relative h-[2px] w-full overflow-hidden">
      <motion.span
        className="absolute left-0 top-0 h-full w-full bg-white"
        variants={createTranslateX("left")}
        style={{ backgroundColor: color }}
      ></motion.span>
      <motion.span
        className="absolute left-0 top-0 h-full w-full bg-white"
        variants={createTranslateX("right")}
        style={{ backgroundColor: color }}
      ></motion.span>
    </span>
  );
};

const HeaderButtonBackground = ({ buttonColor, buttonColorHover }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.span
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      className="absolute top-0 h-full w-full rounded-full bg-[--color-header-button] hover:bg-[--color-header-button-hover]"
      style={{
        opacity: isHover ? 0.7 : 0.5,
        backgroundColor: isHover ? buttonColorHover : buttonColor,
        transition: "all 0.5s",
      }}
    ></motion.span>
  );
};

const NavItem = ({ className, href, children, backgroundColor }) => {
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
          style={{ transformOrigin: "right center", backgroundColor }}
        />
      </Link>
    </motion.li>
  );
};

export default function Header({
  color,
  buttonColor,
  buttonColorHover,
  relative,
}) {
  const [isHover, setIsHover] = useState(false);

  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <>
      <Menu isOpen={isMenuOpen} />
      <motion.header
        className={`${relative ? "relative" : "absolute top-0"} z-50 w-full py-[--header-height-padding] text-white`}
        initial="initial"
        animate="visible"
        variants={translateY}
        style={{ color }}
      >
        <div className="flex h-[--header-height-inner] justify-between px-5">
          {/* LEFT */}
          <div className="flex">
            <div className="mr-5 h-[50px] w-[100px] md:h-[60px] md:w-[120px] xl:mr-14">
              <Link href="/">
                <Logo color={color} isMenuOpen={isMenuOpen} />
              </Link>
            </div>

            {/* BUTTON MENU */}
            <motion.button
              className="relative mr-14 flex size-10 items-center justify-center rounded-full"
              variants={variants}
              initial="initial"
              onHoverStart={() => setIsHover(true)}
              onHoverEnd={() => setIsHover(false)}
              onClick={() => toggleMenu()}
              animate={isHover ? "animate" : "exit"}
            >
              <HeaderButtonBackground
                buttonColor={isMenuOpen ? "gray" : buttonColor}
                buttonColorHover={isMenuOpen ? "gray" : buttonColorHover}
              />
              <span className="flex h-[10px] w-5 flex-col justify-between">
                {[...Array(3)].map((_, index) => (
                  <MenuLine key={index} color={isMenuOpen ? "black" : color} />
                ))}
              </span>
            </motion.button>
          </div>
          <nav className="flex h-full">
            <ul
              className={`hidden space-x-11 lg:flex ${isMenuOpen && "lg:hidden"}`}
            >
              <NavItem href="/products/all" backgroundColor={color}>
                products
              </NavItem>
              <NavItem href="/" backgroundColor={color}>
                explore
              </NavItem>
              <NavItem href="/" backgroundColor={color}>
                community
              </NavItem>
            </ul>
          </nav>
        </div>
      </motion.header>
    </>
  );
}
