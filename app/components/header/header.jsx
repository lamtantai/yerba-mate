"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useMenu } from "../../context/menu-provider";
import Logo from "../logo";
import MenuButton from "./menu-button";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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

export default function Header({
  color,
  buttonColor,
  buttonColorHover,
  relative,
}) {
  const { isMenuOpen, closeMenu } = useMenu();
  const pathname = usePathname();

  useEffect(() => {
    closeMenu();
  }, [closeMenu, pathname]);
  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-20 bg-black"
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      />
      <motion.header
        className={`${relative ? "relative" : "absolute top-0"} z-50 w-full py-[--header-height-padding] text-white`}
        initial="initial"
        animate="visible"
        variants={translateY}
        style={{ color }}
      >
        <div className="flex h-[--header-height-inner] justify-between px-5">
          <div className="flex">
            <Link
              href="/"
              className="mr-5 h-[50px] w-[100px] md:h-[60px] md:w-[120px] xl:mr-14"
            >
              <Logo color={color} />
            </Link>

            <MenuButton
              buttonColor={isMenuOpen ? "gray" : buttonColor}
              buttonColorHover={isMenuOpen ? "gray" : buttonColorHover}
              color={color}
            />
          </div>

          <nav
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
          </nav>
        </div>
      </motion.header>
    </>
  );
}

const NavItem = ({ href, children, backgroundColor }) => {
  return (
    <div className="group flex h-full items-start text-xl">
      <Link href={href} className="relative mt-1">
        {children}
        <span
          className="absolute bottom-0 left-0 h-[2px] w-full origin-[100%_50%] scale-x-0 bg-white transition-transform duration-300 group-hover:origin-[0%_50%] group-hover:scale-x-100"
          style={{ backgroundColor }}
        />
      </Link>
    </div>
  );
};
