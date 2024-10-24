"use client";

import React from "react";
import { MOST_POPULAR_YERBA_MATE as items } from "../lib/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

export default function FeatureProduct() {
  return (
    <div className="relative px-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1.2}
        navigation={{
          nextEl: ".swiper-button-next", // Custom buttons
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {items.map((item, index) => (
          <SwiperSlide className="w-[80vw] border-2" key={index}>
            <div className="bg-gray-100 rounded-lg p-8">{item.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="flex h-20 w-[40%]">
        <div className="swiper-button-prev">←</div>
        <div className="swiper-button-next">→</div>
      </div>
    </div>
  );
}
