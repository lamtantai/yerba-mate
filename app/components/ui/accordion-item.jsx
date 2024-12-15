"use client";

import { useState } from "react";

import { HiMiniPlusSmall } from "react-icons/hi2";

import { motion } from "framer-motion";

export default function AccordionItem({ children, label }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="-mb-[1px] rounded-[2rem] border-2"
      onClick={() => setIsExpanded((prev) => !prev)}
    >
      <button className="flex min-h-16 w-full items-center justify-between px-6">
        <p className="text-left text-xl xl:text-2xl">{label}</p>
        <span className="text-4xl">
          <HiMiniPlusSmall />
        </span>
      </button>

      <motion.div
        className="overflow-hidden text-lg/tight xl:text-xl"
        initial={{ height: 0 }}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6">{children}</div>
      </motion.div>
    </div>
  );
}
