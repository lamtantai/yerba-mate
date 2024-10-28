import Image from "next/image";
import React from "react";

import { BiSolidQuoteLeft } from "react-icons/bi";

// lg:absolute lg:inset-0 lg:aspect-[6/4] lg:basis-3/5

export default function Carousel() {
  return (
    <div className="relative my-20 lg:flex lg:justify-end">
      <div className="lg:absolute lg:inset-0 lg:right-[25vw]">
        <div className="h-full w-full overflow-hidden rounded-large md:aspect-[9/5] lg:aspect-auto">
          <Image
            src="/friend.jpg"
            width={450}
            height={150}
            alt="Friend"
            className="h-auto w-full object-cover lg:h-auto"
          />
        </div>
      </div>

      <div className="relative z-10 rounded-large bg-gray lg:w-[40vw] xl:h-[40vw]">
        <figure className="-mt-16 pb-20 pl-16 pr-small pt-32 lg:mt-0 lg:pt-44">
          <span className="absolute top-[10%] text-4xl">
            <BiSolidQuoteLeft />
          </span>
          <blockquote className="text-2xl leading-none 2xl:text-4xl">
            <p>
              Our vision extends beyond mere “mate” sales. We aspire to give
              individuals the energy to feel free. Through our mission, to
              support artists, athletes, communities, and all who embody the
              essence of Canada’s DNA.
            </p>
          </blockquote>
          <figcaption className="mt-10 font-studioProRegular text-sm 2xl:text-lg">
            Edouard
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
