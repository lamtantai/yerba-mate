"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { PiFlowerLotusLight } from "react-icons/pi";
import { PiInfinityLight } from "react-icons/pi";
import { WiStars } from "react-icons/wi";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedInView, { AnimatedText } from "./animated-inview";
import useGetWindowWidth from "../hooks/useGetWindowWidth";
import { CTAButton } from "./ui/button";

const variants = {
  enter: {
    transition: { staggerChildren: 0.05 },
  },
};

export default function SplashYerba() {
  const windowWidth = useGetWindowWidth();

  const refContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ["start start", "end end"],
  });

  const clipRight = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["inset(100% 100% 0% 0%)", "inset(0% 49% 0% 0%)"],
  );

  const clipLeft = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["inset(100% 0% 0% 100%)", "inset(0% 0% 0% 49%)"],
  );

  const opacity = useTransform(scrollYProgress, [0.7, 0.75, 0.8], [0, 0.5, 1]);

  return (
    <div className="relative">
      <div className="flex flex-col pt-14 lg:h-[400vh] lg:justify-between">
        <div>
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
                <p className="mb-5 text-xl 2xl:text-2xl">
                  stimulates your mind
                </p>
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
                  Prolonged, better-controlled energy without palpitations
                  thanks to yerba mate. The natural combination of caffeine and
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
                  Whether it&apos;s for sport or after a night out, we&apos;ve
                  got you covered! Yerba mate&apos;s naturally occurring
                  caffeine could improve exercise performance and recovery.
                </p>
              </li>
            </ul>
          </div>

          <div className="relative mb-10 aspect-[9/5] overflow-hidden rounded-large md:order-last md:mt-14 lg:hidden">
            <Image
              src="/tree.jpg"
              width={375}
              height={150}
              alt="Tree"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div
          className="absolute left-0 top-0 -z-10 hidden h-[400vh] w-full lg:block"
          ref={refContainer}
        >
          <div className="sticky top-0 h-screen">
            <motion.div
              className="h-screen w-full overflow-hidden"
              style={{ clipPath: clipRight }}
            >
              <Image
                src="/tree.jpg"
                width={1375}
                height={950}
                alt="Tree"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 h-screen w-full overflow-hidden"
              style={{ clipPath: clipLeft }}
            >
              <Image
                src="/tree.jpg"
                width={1375}
                height={950}
                alt="Tree"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        <div className="relative lg:h-[200vh]">
          <motion.div
            className="lg:sticky lg:top-0 lg:py-10"
            style={{ opacity: windowWidth >= 1024 ? opacity : 1 }}
          >
            <div className="mb-10 text-balance px-small text-2xl leading-none md:text-[2.5rem] lg:pr-[15%] lg:text-5xl 2xl:text-6xl">
              <p className="lg:text-white">
                mate libre is made from an infusion of yerba mate, a tree of
                South American origin. A superfood with multiple benefits.
              </p>
            </div>

            <div className="hidden px-small lg:block">
              <CTAButton href="/" bgWhite>
                discover yerba maté
              </CTAButton>
            </div>
            <div className="px-small lg:hidden">
              <CTAButton href="/">discover yerba maté</CTAButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
