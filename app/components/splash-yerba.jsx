"use client";

import Image from "next/image";
import React from "react";
import { PiFlowerLotusLight } from "react-icons/pi";
import { PiInfinityLight } from "react-icons/pi";
import { WiStars } from "react-icons/wi";
import Button from "./button";
import { motion } from "framer-motion";
import { bounce, opacity } from "../animations/animations";
import AnimatedInView, {
  AnimatedText,
  ScrollYProgressContainer,
} from "./animated-inview";

const variants = {
  enter: {
    transition: { staggerChildren: 0.05 },
  },
};

export default function SplashYerba() {
  return (
    <div className="">
      <div className="flex flex-col pt-14">
        <AnimatedInView variants={variants}>
          <AnimatedText line1="the benefits of" line2="yerba maté" />
        </AnimatedInView>

        <div className="px-small pb-24">
          <ul className="space-y-14 text-balance md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-14 md:space-y-0 lg:mx-auto lg:max-w-[21.25rem] lg:grid-cols-1">
            <li className="">
              <AnimatedInView variants={opacity} fit>
                <span className="mb-3 text-6xl">
                  <WiStars />
                </span>
              </AnimatedInView>
              <p className="mb-5 text-xl 2xl:text-2xl">stimulates your mind</p>
              <p className="font-studioProRegular text-lg leading-tight 2xl:text-xl">
                Put your brain in focus mode: yerba mate infusion can help
                stimulate brain activity thanks to the natural presence of
                polyphenols. The end of your sessions will be much more
                productive.
              </p>
            </li>

            <li className="">
              <AnimatedInView variants={opacity} fit>
                <span className="mb-3 text-6xl">
                  <PiInfinityLight />
                </span>
              </AnimatedInView>

              <p className="mb-5 text-xl 2xl:text-2xl">no crash</p>
              <p className="font-studioProRegular text-lg leading-tight 2xl:text-xl">
                Prolonged, better-controlled energy without palpitations thanks
                to yerba mate. The natural combination of caffeine and
                theobromine in yerba mate infusion helps regulate energy. Bye
                bye coffee down!
              </p>
            </li>

            <li className="">
              <AnimatedInView variants={opacity} fit>
                <span className="mb-3 text-6xl">
                  <PiFlowerLotusLight />
                </span>
              </AnimatedInView>

              <p className="mb-5 text-xl 2xl:text-2xl">sport & recovery </p>
              <p className="font-studioProRegular text-lg leading-tight 2xl:text-xl">
                Whether it&apos;s for sport or after a night out, we&apos;ve got
                you covered! Yerba mate&apos;s naturally occurring caffeine
                could improve exercise performance and recovery.
              </p>
            </li>
          </ul>
        </div>

        <div className="relative mb-10 aspect-[9/5] overflow-hidden rounded-large md:order-last md:mt-14">
          <Image
            src="/tree.jpg"
            width={375}
            height={150}
            alt="Tree"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mb-10 text-balance px-small text-2xl leading-none md:text-[2.5rem] 2xl:text-7xl">
          <p>
            mate libre is made from an infusion of yerba mate, a tree of South
            American origin. A superfood with multiple benefits.
          </p>
        </div>
        <div className="px-small">
          <Button href="/">discover yerba maté</Button>
        </div>
      </div>
    </div>
  );
}
