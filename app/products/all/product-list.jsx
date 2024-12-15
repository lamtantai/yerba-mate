"use client";

import React from "react";

import { motion } from "framer-motion";

import SpreadOut from "@/app/animations/spread-out";

import ProductCard from "@/app/components/ui/product-card";

export default function ProductList({ products }) {
  return (
    <motion.div
      className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      initial="initial"
      animate="enter"
      variants={{
        enter: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {products.map((product, index) => (
        <SpreadOut key={product.name + index}>
          <div className="aspect-[5/4] lg:aspect-[4/3]">
            <ProductCard product={product} />
          </div>
        </SpreadOut>
      ))}
    </motion.div>
  );
}
