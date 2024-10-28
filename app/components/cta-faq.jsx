"use client";

import React, { useState } from "react";
import { HiMiniPlusSmall } from "react-icons/hi2";

import { animate, motion } from "framer-motion";

export default function CtaFaq() {
  return (
    <div className="my-20 text-xl lg:flex">
      <h3 className="mb-10 h-fit px-small lg:my-[1.25rem] lg:basis-[45%] xl:text-2xl">
        Frequently asked questions
      </h3>
      <ul className="md:px-5 lg:basis-[55%]">
        <CtaFaqToggler label="What is Yerba Mate?">
          <p>
            Ilex paraguariensis, by its botanical name, or yerba maté, is a tree
            that grows in southern countries of South America, mainly Argentina,
            Brazil, Uruguay and Paraguay. Yerba Mate leaves are naturally
            caffeinated and picked and dried for consumption, traditionally
            infused in a calabash (small container), using the bombilla
            (filtering straw) and by adding hot water.
          </p>
        </CtaFaqToggler>

        <CtaFaqToggler label="What are benefits of Yerba Mate?">
          <ol className="space-y-1">
            <li className="relative pl-8">
              <span className="absolute left-0">1</span>Rich in antioxidants and
              nutrients
            </li>
            <li className="relative pl-8">
              <span className="absolute left-0">2</span>Can boost energy and
              increase mental alertness
            </li>
            <li className="relative pl-8">
              <span className="absolute left-0">3</span>
              Regulates energy levels
            </li>
            <li className="relative pl-8">
              <span className="absolute left-0">4</span>
              Increased sport recuperation
            </li>
            <li className="relative pl-8">
              <span className="absolute left-0">5</span>
              Anti-inflammatory
            </li>
          </ol>
        </CtaFaqToggler>

        <CtaFaqToggler label="Is it safe to drink Yerba Mate everyday?">
          <p>
            Yes! Just like tea or coffee, yerba mate can be consumed regularly.
            However, it’s best to start gradually, especially if you’re not
            accustomed to caffeine. Feel free to incorporate yerba mate
            beverages into your daily routine according to your preferences.
          </p>
        </CtaFaqToggler>
      </ul>
    </div>
  );
}

function CtaFaqToggler({ children, label }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <li
      className="mb-[-2px] rounded-large border-2"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <button className="flex w-full items-center justify-between p-[calc(var(--border-radius-large)/2)] px-small">
        <p className="text-balance text-left leading-none xl:text-2xl">
          {label}
        </p>
        <span className="flex items-center text-3xl">
          <HiMiniPlusSmall />
        </span>
      </button>
      <motion.div
        className="h-0 overflow-hidden font-studioProRegular text-lg leading-tight xl:text-xl"
        initial={{ height: 0 }}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-small pb-16 pt-8">{children}</div>
      </motion.div>
    </li>
  );
}
