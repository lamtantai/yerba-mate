import React from "react";

import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";

export default function SwiperButtonContainer({
  color,
  backgroundColor,
  prevButtonFor,
  nextButtonFor,
}) {
  return (
    <div className="flex gap-1">
      <button
        className={`${prevButtonFor} flex h-button w-button items-center justify-center rounded-full bg-gray text-xl text-black`}
        style={{ color, backgroundColor }}
      >
        <IoArrowBackSharp />
      </button>
      <button
        className={`${nextButtonFor} flex h-button w-button items-center justify-center rounded-full bg-gray text-xl text-black`}
        style={{ color, backgroundColor }}
      >
        <IoArrowForwardSharp />
      </button>
    </div>
  );
}
