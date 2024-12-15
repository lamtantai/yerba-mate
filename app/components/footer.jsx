import React from "react";

import { IoArrowForwardSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="mb-6">
      <div className="flex flex-col gap-5 text-balance text-xl/tight md:flex-row md:px-5 xl:text-2xl/tight">
        <div className="rounded-large bg-gray p-5 md:basis-1/2 md:p-10">
          <h3 className="mb-7 max-w-[20rem]">
            Subscribe to our newsletter and receive 10$ off your first
            subscription order.
          </h3>

          <div className="relative w-full">
            <input
              type="text"
              placeholder="your email"
              className="w-full rounded-full border-2 py-3 pl-5 pr-24 outline-none focus:border-dashed"
            />
            <button className="absolute right-2 top-1/2 flex h-button w-button -translate-y-1/2 items-center justify-center rounded-full bg-black text-white">
              <IoArrowForwardSharp />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-large bg-gray p-5 md:basis-1/2 md:p-10">
          <h3 className="mb-7 max-w-[15rem]">
            Follow us on our social networks
          </h3>
          <ul className="flex cursor-pointer gap-7">
            <li className="transition-opacity duration-300 hover:opacity-50">
              instagram
            </li>
            <li className="transition-opacity duration-300 hover:opacity-50">
              facebook
            </li>
            <li className="transition-opacity duration-300 hover:opacity-50">
              tiktok
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
