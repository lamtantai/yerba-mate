"use client";

import React from "react";

import { motion } from "framer-motion";

import Link from "next/link";

import { slideIn } from "@/app/animations/animations";
import { useMenu } from "@/app/context/menu-provider";

import { CTAButton } from "../ui/button";
import { clippathMenuMobile, parent, slideInLeft } from "./animation";

const animate = (variants, isMenuOpen) => {
  return {
    variants,
    initial: "initial",
    animate: isMenuOpen ? "enter" : "exit",
  };
};

export default function MenuMobile() {
  const { isMenuOpen } = useMenu();

  return (
    <motion.div
      className="fixed top-0 z-50 w-full text-black"
      initial={{ display: "none" }}
      animate={{ display: isMenuOpen ? "block" : "none" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="flex h-dvh flex-col overflow-hidden">
        <motion.nav
          className="flex grow flex-col justify-between bg-white p-6 pt-[calc(var(--header-height))] md:px-16"
          {...animate(clippathMenuMobile, isMenuOpen)}
        >
          <motion.ul
            className="mt-6 flex flex-col gap-y-3 text-[clamp(3rem,2.4583rem+2.3112vw,3.9375rem)]/none"
            {...animate(parent, isMenuOpen)}
          >
            {["products", "explore", "community"].map((item) => (
              <motion.li
                variants={slideInLeft}
                className="w-fit transition-opacity duration-300 hover:opacity-50"
                key={item}
              >
                <Link href={item === "products" ? "/products/all" : "/"}>
                  {item}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.ul
            className="flex flex-col text-xl"
            {...animate(parent, isMenuOpen)}
          >
            {["about us", "retailers", "whole sale", "faq", "contact"].map(
              (item) => (
                <motion.li variants={slideIn} key={item}>
                  <Link href="/">{item}</Link>
                </motion.li>
              ),
            )}
          </motion.ul>
        </motion.nav>

        <motion.div
          className="rounded-t-large bg-gray"
          {...animate(slideIn, isMenuOpen)}
        >
          <div className="px-5 py-10 md:px-16">
            <p className="mb-8 w-4/5 max-w-[25rem] text-xl/none">
              Subscribe and never miss
              <br /> Mate Libre again
            </p>

            <CTAButton href="/">build your box</CTAButton>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
