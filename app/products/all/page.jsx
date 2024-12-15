import React from "react";

import Header from "@/app/components/header/header";

import BouncingText from "@/app/components/ui/bouncing-text";
import { CTAButton } from "@/app/components/ui/button";

import { ALL_PRODUCTS as products } from "@/app/lib/data";

import ProductList from "./product-list";
import ImageWithText from "@/app/components/ui/image-with-text";

export default function AllProducts() {
  return (
    <>
      <Header relative color="black" />
      <div className="px-5">
        <div className="mb-20 md:px-10 xl:mb-32">
          <BouncingText
            line1="our energy"
            line2="infusions"
            colorPrimary="var(--color-black)"
            colorAccent="#d6d6d6"
          />
        </div>

        <ProductList products={products} />
      </div>

      <div className="md:px-5">
        <ImageWithText imageSrc="/build-box.jpg">
          <div className="flex h-full min-h-[18rem] flex-col justify-between p-10">
            <h4 className="w-4/5 max-w-[25rem] text-xl/none xl:text-3xl/none">
              Subscribe and never miss Mate Libre again
            </h4>

            <CTAButton href="/">build your box</CTAButton>
          </div>
        </ImageWithText>
      </div>
    </>
  );
}
