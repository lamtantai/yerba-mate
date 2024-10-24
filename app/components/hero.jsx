"use client";

import Image from "next/image";
import React from "react";
import Button from "./button";

export default function Hero() {
  return (
    <section className="h-screen">
      <div className="relative h-full w-full">
        <div className="absolute left-0 top-0 -z-10 h-full w-full">
          <Image
            src="/hero-home-03.jpg"
            alt="Hero image"
            width={1200}
            height={965}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full bg-black/30" />
        <div className="flex h-full w-full flex-col justify-end px-5 pb-10 pt-24 font-studioProBold md:px-16 lg:pb-32">
          <h2 className="mb-10 text-5xl text-gray md:text-[6vw]">
            <p>
              <span>the</span>&nbsp;
              <span>ideal</span>
            </p>
            <p>
              <span>dose</span>
            </p>
            <p className="text-white">
              <span>of nature</span>
            </p>
          </h2>
          <Button href="/" bgWhite>
            build your box
          </Button>
        </div>
      </div>
    </section>
  );
}
