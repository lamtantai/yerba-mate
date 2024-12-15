"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

export default memo(function InfinityText({
  list,
  colorPrimary,
  colorSecondary,
}) {
  const repeatedList = [...list, ...list];

  return (
    <div className="my-10 flex h-auto overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex w-fit whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{
          x: "-50%",
          transition: { duration: 11, repeat: Infinity, ease: "linear" },
        }}
      >
        {repeatedList.map((item, index) => (
          <div
            className="flex-shrink-0 text-nowrap pr-14 odd:text-gray even:text-black"
            key={index}
            style={{ color: index % 2 === 0 ? colorPrimary : colorSecondary }}
          >
            <div className="text-5xl !leading-normal lg:text-6xl xl:text-7xl 2xl:text-9xl">
              {item}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
});
