import AccordionItem from "@/app/components/ui/accordion-item";

import Image from "next/image";
import React from "react";

export default function ProductNutrition({ currentProductPage }) {
  return (
    <div className="-mx-[--padding-small] md:px-5">
      <AccordionItem label="Ingredients">
        <ul className="">
          {currentProductPage.ingredients.map((ingredient) => (
            <li key={ingredient} className="relative pl-8">
              <span className="absolute left-0 top-[-0.3em] text-3xl">
                &#x2022;
              </span>
              {ingredient}
            </li>
          ))}
        </ul>
      </AccordionItem>
      <AccordionItem label="Nutritional facts">
        <div className="relative aspect-[4/5] max-w-96">
          <Image
            src={currentProductPage.srcNutritionImage}
            fill
            alt="Nutrition image"
            className="object-contain"
          />
        </div>
      </AccordionItem>
      <AccordionItem label="No bullsh!t">
        <ul className="">
          {currentProductPage.noBullshit.map((bullshit) => (
            <li key={bullshit} className="relative pl-8">
              <span className="absolute left-0 top-[-0.3em] rotate-45 text-3xl">
                +
              </span>
              {bullshit}
            </li>
          ))}
        </ul>
      </AccordionItem>
    </div>
  );
}
