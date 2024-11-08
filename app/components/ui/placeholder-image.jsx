"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function PlaceHolderImage({ src, backgroundColor }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      className="h-full w-full bg-black"
      style={{ backgroundColor }}
    >
      <Image
        src={src}
        alt="Hero image"
        width={1800}
        height={965}
        className="h-full w-full object-cover"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      />
    </motion.div>
  );
}
