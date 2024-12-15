"use client";

import BouncingText from "@/app/components/ui/bouncing-text";
import React from "react";

import { CTAButton } from "@/app/components/ui/button";

import { motion } from "framer-motion";
import { slideIn } from "@/app/animations/animations";

export default function ProductHeader({ currentProductPage }) {
  return (
    <div className="pt-8 lg:flex lg:min-h-[calc(100vh-(var(--header-height)))] lg:flex-col lg:justify-between lg:pb-[10vh]">
      <BouncingText
        line1={currentProductPage.name}
        line2="energy"
        line3="infusion"
        colorPrimary={currentProductPage.colorPrimary}
        colorAccent={currentProductPage.colorAccent}
      />

      <div className="mt-10 space-y-8">
        <motion.p
          className="text-lg/none lg:text-xl"
          variants={slideIn}
          initial="initial"
          animate="enter"
        >
          From <br />
          2.92$/ can
        </motion.p>

        <CTAButton
          href="/"
          backgroundColor={currentProductPage.colorPrimary}
          color={currentProductPage.colorSecondary}
        >
          build your box
        </CTAButton>
      </div>
    </div>
  );
}
