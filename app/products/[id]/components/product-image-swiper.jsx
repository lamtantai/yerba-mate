import "swiper/css";

import Image from "next/image";
import React from "react";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButtonContainer from "@/app/components/ui/swiper-button-container";

export default function ProductImageSwiper({ currentProductPage }) {
  return (
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
  );
}
