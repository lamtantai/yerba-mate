"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InfinityText({ list }) {
  // Duplicate the list to create a seamless scroll
  const repeatedList = [...list, ...list];

  return (
    <div className="flex h-auto overflow-hidden pt-10">
      <motion.ul
        className="flex w-fit"
        initial={{ x: 0 }}
        whileInView={{
          x: "-50%",
          transition: { duration: 11, repeat: Infinity, ease: "linear" },
        }}
      >
        {repeatedList.map((item, index) => (
          <li
            className="text-nowrap pr-14 odd:text-gray even:text-black"
            key={index}
          >
            <div className="text-5xl !leading-normal lg:text-7xl xl:text-9xl">
              {item}
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
