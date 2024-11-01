"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

export default memo(function InfinityText({
  list,
  colorPrimary,
  colorSecondary,
}) {
  // Duplicate the list to create a seamless scroll
  const repeatedList = [...list, ...list];

  return (
    <div className="my-10 flex h-auto overflow-hidden">
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
            style={{ color: index % 2 === 0 ? colorPrimary : colorSecondary }}
          >
            <div className="text-5xl !leading-normal lg:text-6xl xl:text-7xl 2xl:text-9xl">
              {item}
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
});
