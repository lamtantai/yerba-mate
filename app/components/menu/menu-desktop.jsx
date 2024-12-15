"use client";

import React from "react";

import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

import { slideIn } from "@/app/animations/animations";
import { useMenu } from "@/app/context/menu-provider";

import { CTAButton } from "../ui/button";
import {
  clippathInRight,
  clippathMenuDesktop,
  parent,
  slideInLeft,
} from "./animation";

const animate = (variants, isMenuOpen) => {
  return {
    variants,
    initial: "initial",
    animate: isMenuOpen ? "enter" : "exit",
  };
};

export default function MenuDesktop() {
  const { isMenuOpen } = useMenu();

  return (
    <motion.div
      className={`fixed top-0 z-50 w-full text-black`}
      initial={{ display: "none" }}
      animate={{ display: isMenuOpen ? "block" : "none" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="flex h-dvh overflow-hidden">
        <motion.nav
          className="flex basis-2/3 flex-col justify-between bg-white p-6 px-16 pt-[calc(var(--header-height))]"
          {...animate(clippathMenuDesktop, isMenuOpen)}
        >
          <motion.ul
            className="mt-6 flex flex-col gap-y-3 text-[clamp(3.9375rem,-0.1339rem+6.3616vw,7.5rem)]/none"
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

        <div className="relative flex basis-1/3 items-end">
          <motion.div
            className="shimmer-bg absolute inset-0 -z-10 -ml-[--border-radius-large]"
            {...animate(clippathInRight, isMenuOpen)}
          >
            <Image
              src="/hero-home-01.jpg"
              alt=""
              fill
              sizes="50vw"
              className="h-auto w-full object-cover"
            />
          </motion.div>

          <motion.div
            className="w-full rounded-large bg-gray"
            {...animate(slideIn, isMenuOpen)}
          >
            <div className="px-5 py-10 md:px-16">
              <p className="mb-24 w-4/5 max-w-[25rem] text-3xl/none">
                Subscribe and never miss Mate Libre again
              </p>

              <CTAButton href="/">build your box</CTAButton>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
