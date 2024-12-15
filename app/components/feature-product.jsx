"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { useRef, useState } from "react";

import { ALL_PRODUCTS as items } from "../lib/data";

import { motion, useScroll, useTransform } from "framer-motion";

import InfinityText from "./infinity-text";
import useGetWindowWidth from "../hooks/useGetWindowWidth";
import ProductCard from "./ui/product-card";
import SwiperButtonContainer from "./ui/swiper-button-container";

export default function FeatureProduct() {
  const windowWidth = useGetWindowWidth();

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-80%"]);

  return (
    <motion.div
      className="relative mb-24 xl:mt-[-100vh] xl:h-[500vh] xl:overflow-clip"
      ref={container}
    >
      <div className="xl:sticky xl:top-0 xl:flex xl:h-screen xl:flex-col xl:justify-between">
        <div className="xl:absolute xl:top-0 xl:h-screen">
          <div className="mb-10 flex items-center justify-between px-small md:px-16 lg:pt-16 xl:sticky xl:top-0 xl:h-screen xl:items-start">
            <h2 className="text-lg leading-none md:text-xl xl:text-2xl">
              Discover our most popular <br /> yerba mate infusions
            </h2>

            <div className="xl:hidden">
              <SwiperButtonContainer
                prevButtonFor="swiper-button-prev"
                nextButtonFor="swiper-button-next"
              />
            </div>
          </div>
        </div>

        <motion.div
          className="flex h-full xl:w-fit xl:items-center"
          style={{
            x: windowWidth >= 1280 ? x : 0,
          }}
        >
          <Swiper
            modules={[Navigation]}
            loop="true"
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              768: {
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.1,
              },
              1280: { slidesPerView: items.length },
            }}
            speed={900}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="!px-small"
          >
            {items.map((product, index) => (
              <SwiperSlide
                key={index}
                className="w-full overflow-hidden rounded-large xl:!w-[42.5rem]"
              >
                <div className="aspect-[5/4] md:aspect-[10/6] lg:aspect-auto lg:h-[25rem] xl:aspect-[680/480] xl:h-full">
                  <ProductCard product={product} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="pointer-events-none xl:absolute xl:flex xl:h-screen xl:items-end">
          <InfinityText
            list={[
              "Energy infusions",
              "60 mg of caffeine",
              "Awakens the mind",
              "No crash",
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
}
