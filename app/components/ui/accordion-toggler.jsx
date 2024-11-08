import { useState } from "react";
import { HiMiniPlusSmall } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function AccordionToggler({ children, label }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <li
      className="mb-[-2px] rounded-large border-2"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <button className="flex w-full items-center justify-between p-[calc(var(--border-radius-large)/2)] px-small">
        <p className="text-balance text-left text-xl leading-none xl:text-2xl">
          {label}
        </p>
        <span className="flex items-center text-4xl">
          <HiMiniPlusSmall />
        </span>
      </button>
      <motion.div
        className="h-0 overflow-hidden text-lg leading-tight xl:text-xl"
        initial={{ height: 0 }}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-small pb-16 pt-8">{children}</div>
      </motion.div>
    </li>
  );
}
