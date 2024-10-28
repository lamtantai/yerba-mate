import Link from "next/link";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="mb-6">
      <div className="space-y-5 text-xl md:flex md:gap-x-5 md:space-y-0 md:px-5 xl:text-2xl">
        <div className="flex min-h-[10rem] flex-col justify-between rounded-large bg-gray p-5 md:basis-1/2 md:p-10 lg:min-h-[16rem]">
          <h3 className="mb-7 max-w-[20rem] text-balance leading-none">
            Subscribe to our newsletter and receive 10$ off your first
            subscription order.
          </h3>
          <form>
            <div className="relative h-full w-full">
              <label htmlFor="email" className="hidden">
                Email
              </label>
              <input
                type="text"
                placeholder="your email"
                id="email"
                className="w-full rounded-full border-2 py-3 pl-5 pr-24 outline-none focus:border-dashed"
              />
              <button className="absolute right-2 top-1/2 flex h-button w-button -translate-y-1/2 items-center justify-center rounded-full bg-black">
                <span className="rounded-full text-xl text-white">
                  <IoArrowForwardSharp />
                </span>
              </button>
            </div>
          </form>
        </div>

        <div className="flex min-h-[10rem] flex-col justify-between rounded-large bg-gray p-5 md:basis-1/2 md:p-10 lg:min-h-[16rem]">
          <h3 className="mb-7 max-w-[15rem] text-balance leading-none">
            Follow us on our social networks
          </h3>
          <ul className="flex cursor-pointer gap-7">
            <li className="duration-300 hover:opacity-50">instagram</li>
            <li className="duration-300 hover:opacity-50">facebook</li>
            <li className="duration-300 hover:opacity-50">tiktok</li>
          </ul>
        </div>
      </div>

      <div className="mt-36 px-small">
        <p className="text-sm xl:text-2xl">
          This project was built to practice front-end development skills. The
          design and layout were inspired by{" "}
          <a
            href="https://matelibre.com/"
            target="_blank"
            className="text-green"
          >
            mate libre
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
