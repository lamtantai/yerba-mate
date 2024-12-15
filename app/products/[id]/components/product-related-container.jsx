"use client";

import React from "react";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import ProductCard from "@/app/components/ui/product-card";
import SwiperButtonContainer from "@/app/components/ui/swiper-button-container";

export default function ProductRelatedContainer({ remainProducts }) {
  return (
    <div className="px-5">
      <div className="mb-10 flex items-center justify-between lg:hidden">
        <h4 className="text-h4">Discover our infusions</h4>
        <SwiperButtonContainer
          prevButtonFor="button-prev"
          nextButtonFor="button-next"
        />
      </div>

      <Swiper
        modules={[Navigation]}
        loop="true"
        slidesPerView={1}
        spaceBetween={10}
        speed={900}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: {
            slidesPerView: remainProducts.length,
            spaceBetween: "-10%",
          },
        }}
        className="relative flex"
      >
        {remainProducts.map((product, index) => (
          <SwiperSlide
            key={index}
            className="lg:flex-1 lg:last:!mr-0 lg:hover:!-mr-[--border-radius-large] lg:hover:flex-[1.5] lg:last:hover:!mr-0"
            style={{
              transition: "all 0.6s cubic-bezier(.38,.005,.215,1)",
            }}
          >
            <div className="aspect-[5/4] lg:aspect-auto lg:h-[23.5rem] xl:h-[28.5rem]">
              <ProductCard product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
