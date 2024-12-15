import BouncingText from "./ui/bouncing-text";

import { CTAButton } from "./ui/button";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative z-10 mb-16 h-dvh w-full overflow-hidden">
      <div
        className="shimmer-bg absolute inset-0 -z-10"
        data-scroll
        data-scroll-speed="-0.5"
      >
        <Image
          src="/hero-home-03.jpg"
          alt="watermelon product"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-75"
        />
      </div>

      <div className="flex h-full w-full flex-col justify-end gap-y-8 px-small pb-10 pt-24 lg:pb-28">
        <BouncingText
          line1="the ideal"
          line2="dose"
          line3="of nature"
          colorPrimary="var(--color-gray)"
          colorAccent="var(--color-white)"
        />

        <CTAButton href="/" backgroundWhite>
          build your box
        </CTAButton>
      </div>
    </section>
  );
}
