import Image from "next/image";

import React from "react";

export default function ImageWithText({ children, imageSrc }) {
  return (
    <div className="relative my-5 overflow-hidden rounded-large md:grid md:grid-cols-[3fr_2fr]">
      <div className="shimmer-bg relative -mb-[--border-radius-large] aspect-[3/2] h-full md:-mr-[--border-radius-large] md:mb-0 lg:aspect-[1.85/1]">
        <Image
          src={imageSrc}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          alt="box with product inside"
          className="object-cover brightness-90"
        />
      </div>

      <div className="relative z-10 rounded-large bg-gray">{children}</div>
    </div>
  );
}
