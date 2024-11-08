"use client";

// IMPORT SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

// IMPORT FROM REACT
import { useRef, useState } from "react";

// IMPORT DATA
import { ALL_PRODUCTS as items } from "../lib/data";

// IMPORT REACT ICON
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";

import { motion, useScroll, useTransform } from "framer-motion";

import { clipPathButton, slideIn } from "../animations/animations";
import InfinityText from "./infinity-text";
import useGetWindowWidth from "../hooks/useGetWindowWidth";
import ProductCard from "./ui/product-card";
import { SwiperButtonContainer } from "./ui/button";
import useGetPositionOfSwiperSlide from "../hooks/useGetPositionOfSwiperSlide";

const Button = ({ backgroundColor, color, isHover }) => {
  return (
    <div className="flex w-full justify-end">
      <motion.button
        className="relative flex h-button w-[125px] items-center rounded-full px-4"
        initial="initial"
        animate={isHover ? "animate" : "exit"}
        variants={clipPathButton}
        style={{
          backgroundColor,
          color,
        }}
      >
        <span className="flex w-full items-center pb-[0.125rem]">
          <motion.p
            className="pr-8 text-sm leading-none"
            animate={{
              x: isHover ? "0%" : "-20%",
              opacity: isHover ? 1 : 0,
              transition: { duration: 0.3 },
            }}
          >
            discover
          </motion.p>
        </span>

        <span
          className="absolute right-0 top-0 flex h-button w-button items-center justify-center rounded-full text-xl"
          style={{
            backgroundColor,
          }}
        >
          <IoArrowForwardSharp />
        </span>
      </motion.button>
    </div>
  );
};

export default function FeatureProduct() {
  const windowWidth = useGetWindowWidth();

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-80%"]);
  const { isBeginning, isEnd, handleSlideChange } =
    useGetPositionOfSwiperSlide();

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

            {/* CUSTOM ARROW NAVIGATION */}
            <div className="xl:hidden">
              <SwiperButtonContainer
                navClassButtonPrev={`swiper-button-prev ${isBeginning ? "pointer-events-none opacity-50" : ""}`}
                navClassButtonNext={`swiper-button-next ${isEnd ? "pointer-events-none opacity-50" : ""}`}
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
          {/* SWIPER CONTAINER */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1}
            onInit={(swiper) => handleSlideChange(swiper)}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            breakpoints={{
              768: {
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.1,
              },
              1280: { slidesPerView: items.length },
            }}
            speed={500}
            navigation={{
              nextEl: ".swiper-button-next", // Custom buttons
              prevEl: ".swiper-button-prev",
            }}
            className="!px-small"
          >
            {/* SWIPER SLIDE CONTAINER */}
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

        {/* INFINITY TEXT */}
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
