"use client";

import React, { useState } from "react";

import "swiper/css";

import Image from "next/image";

import { useMotionValueEvent, useScroll } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import SpreadOut from "@/app/animations/spread-out";
import SwiperButtonContainer from "@/app/components/ui/swiper-button-container";

export default function ProductImageContainer({ currentProductPage }) {
  const { scrollY } = useScroll();
  const [scrollYValue, setScrollYValue] = useState(0);

  useMotionValueEvent(scrollY, "change", (latestY) => {
    setScrollYValue(latestY);
  });

  return (
    <div className="relative px-5 lg:order-last">
      <SpreadOut>
        <div className="lg:sticky lg:top-[--header-height] lg:h-[calc(100vh-var(--header-height)-1.25rem)]">
          <div
            className={`lg:clip-path-gallery-initial bottom-0 left-0 w-full transition-all duration-500 lg:absolute lg:h-[calc(100vh-2.5rem)] ${scrollYValue > 50 && "lg:clip-path-0"}`}
          >
            <Swiper
              modules={[Autoplay, Navigation]}
              loop="true"
              slidesPerView={1}
              speed={900}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{
                delay: 2500,
              }}
              className="relative aspect-square h-full rounded-large lg:aspect-auto"
            >
              <div className="absolute bottom-[5%] right-[5%] z-50">
                <SwiperButtonContainer
                  prevButtonFor="swiper-button-prev"
                  nextButtonFor="swiper-button-next"
                  color={currentProductPage.colorSecondary}
                  backgroundColor={currentProductPage.colorPrimary}
                />
              </div>

              {currentProductPage.srcAllImage.map((image, index) => (
                <SwiperSlide className="shimmer-bg relative" key={index}>
                  <Image
                    src={image}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    alt={"product image"}
                    className="h-auto w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </SpreadOut>
    </div>
  );
}
