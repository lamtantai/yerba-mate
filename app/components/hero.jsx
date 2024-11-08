"use client";

import BouncingText from "./ui/bouncing-text";
import { CTAButton } from "./ui/button";
import { motion } from "framer-motion";
import PlaceHolderImage from "./ui/placeholder-image";

export default function Hero() {
  return (
    <section className="relative z-10">
      <div className="relative mb-16 h-dvh w-full overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 -z-10 h-full w-full bg-black brightness-75"
          data-scroll
          data-scroll-speed="-0.5"
        >
          <PlaceHolderImage src="/hero-home-03.jpg" />
        </motion.div>
        <div className="flex h-full w-full flex-col justify-end px-small pb-10 pt-24 lg:pb-32">
          <div className="mb-10">
            <BouncingText
              line1="the ideal"
              colorLine1="var(--color-gray)"
              line2="dose"
              colorLine2="var(--color-gray)"
              line3="of nature"
            />
          </div>

          <CTAButton href="/" backgroundWhite>
            build your box
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
