"use client";

// IMPORT SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

// IMPORT FROM REACT
import { useRef, useState } from "react";

// IMPORT DATA
import { MOST_POPULAR_YERBA_MATE as items } from "../lib/data";

// IMPORT REACT ICON
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { clipPathButton, slideIn } from "../animations/animations";
import InfinityText from "./infinity-text";
import useGetWindowWidth from "../hooks/useGetWindowWidth";

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
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-70%"]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverStates, setHoverStates] = useState(
    Array(items.length).fill(false),
  );

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
            <div className="flex gap-2 xl:hidden">
              <button
                className={`swiper-button-prev h-button w-button rounded-full bg-gray text-black ${activeIndex === 0 && "pointer-events-none opacity-40"}`}
              >
                <span className="flex items-center justify-center text-xl">
                  <IoArrowBackSharp />
                </span>
              </button>
              <button
                className={`swiper-button-next h-button w-button rounded-full bg-gray text-black ${activeIndex === items.length - 1 && "pointer-events-none opacity-40"}`}
              >
                <span className="flex items-center justify-center text-xl">
                  <IoArrowForwardSharp />
                </span>
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className="flex h-full xl:w-fit xl:items-center"
          style={{ x: windowWidth >= 1280 ? x : 0 }}
        >
          {/* SWIPER CONTAINER */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              768: {
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.1,
              },
            }}
            speed={500}
            navigation={{
              nextEl: ".swiper-button-next", // Custom buttons
              prevEl: ".swiper-button-prev",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="!px-small"
          >
            {/* SWIPER SLIDE CONTAINER */}
            {items.map((item, index) => (
              <SwiperSlide
                className="relative overflow-hidden rounded-large xl:!aspect-[680/480] xl:!w-[42.5rem]"
                key={item.name}
                style={{ backgroundColor: item.colorSecondary, color: item.colorSecondary }}
              >
                {/* LINK OVERLAY */}
                <motion.div
                  onHoverStart={() => {
                    setHoverStates((prev) =>
                      prev.map((hover, i) => (i === index ? true : hover)),
                    );
                  }}
                  onHoverEnd={() => {
                    setHoverStates((prev) =>
                      prev.map((hover, i) => (i === index ? false : hover)),
                    );
                  }}
                >
                  <Link
                    href="/"
                    className="absolute left-0 top-0 z-30 h-full w-full"
                  />
                </motion.div>
                <div className="relative flex aspect-[5/4] w-full flex-col justify-between p-5 md:aspect-[10/6] md:px-10 lg:aspect-auto lg:h-[25rem] xl:h-full">
                  <h2 className="text-5xl lg:text-6xl">{item.name}</h2>

                  <Button
                    backgroundColor={item.colorSecondary}
                    color={item.colorSecondary}
                    isHover={hoverStates[index]}
                  >
                    {item.name}
                  </Button>

                  {index < items.length - 1 && (
                    <>
                      <div className="absolute bottom-0 left-5 w-[20%] md:left-10">
                        <motion.div
                          className="relative"
                          animate={{ y: hoverStates[index] ? "25%" : "35%" }}
                          transition={{
                            duration: 0.3,
                            ease: [0.38, 0.005, 0.215, 1],
                          }}
                        >
                          <Image
                            src={item.srcImage}
                            width={150}
                            height={50}
                            alt={item.name}
                            className="h-auto w-full"
                          />
                        </motion.div>
                      </div>

                      <div className="absolute -left-5 bottom-0 -z-10 w-[45%] md:-left-10">
                        <motion.div
                          className="relative"
                          animate={{
                            x: hoverStates[index] ? "0%" : "-20%",
                            y: hoverStates[index] ? "0%" : "20%",
                            opacity: hoverStates[index] ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.38, 0.005, 0.215, 1],
                          }}
                        >
                          <Image
                            src={item.srcIllustration}
                            width={150}
                            height={50}
                            alt={item.name}
                            className="h-auto w-full"
                          />
                        </motion.div>
                      </div>
                    </>
                  )}
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
