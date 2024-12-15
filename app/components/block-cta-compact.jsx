import Image from "next/image";
import React from "react";

import { IoLeafOutline } from "react-icons/io5";
import { PiFlowerLotusLight } from "react-icons/pi";
import { PiHandshakeLight } from "react-icons/pi";

import AnimatedInView from "./animated-inview";

import { CTAButton } from "./ui/button";

export const opacity = {
  initial: {
    opacity: 0,
    scale: 0,
  },

  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.38, 0.005, 0.215, 1] },
  },
};

export default function BlockCTACompact() {
  return (
    <div className="mt-20 px-small">
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
        <div className="relative aspect-square w-full lg:basis-1/2">
          <Image
            src="/home-02.jpg"
            fill
            alt="Image"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full rounded-large object-cover"
          />
        </div>

        <div className="space-y-10 lg:basis-1/2">
          <h3 className="text-balance text-4xl 2xl:text-5xl">
            Committed from our raw material to packaging.
          </h3>

          <p className="font-studioProRegular text-lg/tight 2xl:text-xl">
            We&apos;re not perfect, but we&apos;re committed to making an
            environmental and social difference as best we can. Our
            carbon-neutral delivery is just one way to work towards making a
            positive impact because it has never been more important.
          </p>

          <ul className="space-y-4">
            {[
              {
                icon: <IoLeafOutline />,
                text: "carbon-free delivery in greater montreal",
              },
              {
                icon: <PiHandshakeLight />,
                text: "fair trade yerba mate",
              },
              {
                icon: <PiFlowerLotusLight />,
                text: "certified organic",
              },
            ].map((item) => (
              <li className="flex items-center gap-4" key={item.text}>
                <AnimatedInView variants={opacity} fit>
                  <span className="text-4xl 2xl:text-5xl">{item.icon}</span>
                </AnimatedInView>
                <p className="text-lg/tight 2xl:text-xl">{item.text}</p>
              </li>
            ))}
          </ul>

          <CTAButton href="/">discover our commitments</CTAButton>
        </div>
      </div>
    </div>
  );
}
