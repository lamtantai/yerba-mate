"use client";

import BouncingText from "@/app/components/ui/bouncing-text";
import Link from "next/link";
import React from "react";
import { ALL_PRODUCTS as products } from "@/app/lib/data";
import ProductCard from "@/app/components/ui/product-card";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/app/components/button";
import SpreadOut from "@/app/animations/spread-out";
import Header from "@/app/components/header/header";
import { CTAButton } from "@/app/components/ui/button";

const variants = {
  enter: { transition: { staggerChildren: 0.08 } },
};

export default function AllProducts() {
  return (
    <div className="">
      <Header relative color="black" />
      <div className="">
        <div className="px-5">
          <div className="mb-20 md:px-10 xl:mb-32">
            <BouncingText
              line1="our energy"
              colorLine1="var(--color-black)"
              line2="infusions"
              colorLine2="#d6d6d6"
            />
          </div>

          <motion.div
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial="initial"
            animate="enter"
            variants={variants}
          >
            {products.map((product, index) => (
              <SpreadOut key={product.name + index}>
                <div className="aspect-[5/4] lg:aspect-[450/400]">
                  <ProductCard product={product} />
                </div>
              </SpreadOut>
            ))}
          </motion.div>
        </div>

        <div className="md:px-5">
          <div className="relative my-5 overflow-hidden rounded-large md:flex md:justify-end">
            <div className="relative top-0 -z-10 -mb-[--border-radius-large] aspect-[3/2] h-full w-full md:absolute md:right-[calc(33%-var(--border-radius-large)*2)]">
              <picture>
                <source
                  media="(min-width:768px)"
                  srcSet="/build-box-horizontal.jpg"
                />
                <Image
                  src="/build-box.jpg"
                  width={1200}
                  height={500}
                  alt="box with product inside"
                  className="h-full w-full object-cover brightness-90"
                />
              </picture>
            </div>

            <div className="flex min-h-[17.5rem] flex-col justify-between rounded-large bg-gray px-10 py-10 md:aspect-[450/400] md:basis-1/3">
              <h2 className="text-h4/none">
                Subscribe and never miss
                <br />
                Mate Libre again
              </h2>

              <CTAButton href="/">build your box</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
