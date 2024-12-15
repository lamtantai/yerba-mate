import React from "react";

import Image from "next/image";

import InfinityText from "@/app/components/infinity-text";

import ProductFeaturesList from "./product-features-list";
import ProductHeader from "./product-header";
import ProductNutrition from "./product-nutrition";

export default function ProductInfoContainer({ currentProductPage }) {
  return (
    <div className="px-small">
      <ProductHeader currentProductPage={currentProductPage} />

      <div className="space-y-10 pt-20 lg:pt-10">
        <p className="text-lg/tight lg:text-xl">
          {currentProductPage.description}
        </p>

        <ProductNutrition currentProductPage={currentProductPage} />
      </div>

      <InfinityText
        list={["60mg caffein", "yerba mate", "no bullsh!t"]}
        colorPrimary={currentProductPage.colorPrimary}
        colorSecondary={currentProductPage.colorAccent}
      />

      <ProductFeaturesList />

      <div className="relative aspect-[5/4] w-1/2 -translate-x-1/4 translate-y-1/4">
        <Image
          src={currentProductPage.srcIllustration}
          fill
          alt="Image illustration"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
