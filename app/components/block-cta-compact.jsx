import Image from "next/image";
import React from "react";

import { IoLeafOutline } from "react-icons/io5";
import { PiFlowerLotusLight } from "react-icons/pi";
import { PiHandshakeLight } from "react-icons/pi";
import AnimatedInView from "./animated-inview";
import { opacity } from "../animations/animations";
import { CTAButton } from "./ui/button";

export default function BlockCTACompact() {
  return (
    <div className="mt-20 px-small">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="mb-12 h-fit overflow-hidden rounded-large lg:basis-[45%]">
          <Image
            src="/home-02.jpg"
            width={375}
            height={150}
            alt="Image"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="space-y-10 lg:basis-1/2">
          <h1 className="text-balance text-4xl 2xl:text-5xl">
            Committed from our raw material to packaging.
          </h1>
          <p className="font-studioProRegular text-lg leading-tight 2xl:text-xl">
            We&apos;re not perfect, but we&apos;re committed to making an
            environmental and social difference as best we can. Our
            carbon-neutral delivery is just one way to work towards making a
            positive impact because it has never been more important.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <AnimatedInView variants={opacity} fit>
                <span className="mb-3 text-4xl 2xl:text-5xl">
                  <IoLeafOutline />
                </span>
              </AnimatedInView>
              <p className="text-lg leading-tight 2xl:text-xl">
                carbon-free delivery in greater montreal
              </p>
            </li>

            <li className="flex items-center gap-4">
              <AnimatedInView variants={opacity} fit>
                <span className="mb-3 text-4xl 2xl:text-5xl">
                  <PiHandshakeLight />
                </span>
              </AnimatedInView>
              <p className="text-lg leading-tight 2xl:text-xl">
                fair trade yerba mate
              </p>
            </li>

            <li className="flex items-center gap-4">
              <AnimatedInView variants={opacity} fit>
                <span className="mb-3 text-4xl 2xl:text-5xl">
                  <PiFlowerLotusLight />
                </span>
              </AnimatedInView>
              <p className="text-lg leading-tight 2xl:text-xl">
                certified organic
              </p>
            </li>
          </ul>
          <CTAButton href="/">discover our commitments</CTAButton>
        </div>
      </div>
    </div>
  );
}
