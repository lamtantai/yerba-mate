"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { ALL_PRODUCTS as products } from "@/app/lib/data";
import { motion } from "framer-motion";
import { CTAButton, SwiperButtonContainer } from "@/app/components/ui/button";
import BouncingText from "@/app/components/ui/bouncing-text";
import SpreadOut from "@/app/animations/spread-out";
import AccordionToggler from "@/app/components/ui/accordion-toggler";
import InfinityText from "@/app/components/infinity-text";

import { PiInfinityLight } from "react-icons/pi";
import { WiStars } from "react-icons/wi";
import { IoLeafOutline } from "react-icons/io5";
import { BsCupHot } from "react-icons/bs";
import { PiHandshakeLight } from "react-icons/pi";
import { LiaCanadianMapleLeaf } from "react-icons/lia";
import ProductCard from "@/app/components/ui/product-card";
import SlideInUp from "@/app/animations/slide-in-up";
import useGetPositionOfSwiperSlide from "@/app/hooks/useGetPositionOfSwiperSlide";
import Header from "@/app/components/header/header";
import useSharedScroll from "@/app/hooks/useSharedScroll";
import useGetWindowWidth from "@/app/hooks/useGetWindowWidth";
import { slideIn } from "@/app/animations/animations";

export default function ProductPage({ params }) {
  const { isBeginning, isEnd, handleSlideChange } =
    useGetPositionOfSwiperSlide();

  const currentProductPage = products.find(
    (product) => product.paramId === params.id,
  );
  const REMAIN_PRODUCTS = products.filter(
    (product) => product.paramId !== params.id,
  );

  const scrollY = useSharedScroll();
  const windowWidth = useGetWindowWidth();
  return (
    <>
      <div
        style={{
          color: currentProductPage.colorPrimary,
          backgroundColor: currentProductPage.colorSecondary,
        }}
      >
        <Header
          color={currentProductPage.colorPrimary}
          buttonColor={currentProductPage.colorHeaderButton}
          buttonColorHover={currentProductPage.colorAccent}
          relative
        />
        <div className="mb-20 rounded-b-large lg:mb-36 lg:flex">
          <div className="relative px-5 lg:bottom-[1.25rem] lg:order-last lg:w-1/2">
            <SpreadOut>
              <div className="lg:sticky lg:top-[--header-height] lg:h-[calc(100vh-var(--header-height)-1.25rem)]">
                <div
                  className="bottom-0 left-0 w-full lg:absolute lg:h-[calc(100vh-2.5rem)]"
                  style={{
                    clipPath: `${windowWidth > 1024 ? `inset(${scrollY.get() > 50 ? "0" : "calc(var(--header-height) - 1.25rem)"} 0 0 0 round var(--border-radius-large))` : "inset(0)"}`,
                    transition: "clip-path 0.5s",
                  }}
                >
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    loop="true"
                    slidesPerView={1}
                    speed={900}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    autoplay={{
                      delay: 3500,
                    }}
                    className="relative h-full overflow-hidden rounded-large"
                  >
                    <div className="absolute bottom-[5%] right-[5%] z-50">
                      <SwiperButtonContainer
                        navClassButtonPrev="swiper-button-prev"
                        navClassButtonNext="swiper-button-next"
                        color={currentProductPage.colorSecondary}
                        backgroundColor={currentProductPage.colorPrimary}
                      />
                    </div>

                    {currentProductPage.srcAllImage.map((image, index) => (
                      <SwiperSlide className="" key={index}>
                        <Image
                          src={image}
                          width={1000}
                          height={500}
                          alt={currentProductPage.name + "product's image"}
                          className="aspect-[320/300] h-full w-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </SpreadOut>
          </div>

          <div className="lg:w-1/2">
            <div className="px-small pt-8">
              <div className="lg:flex lg:min-h-[calc(100vh-(var(--header-height)))] lg:flex-col lg:justify-between lg:pb-[10vh]">
                <div className="">
                  <BouncingText
                    line1={currentProductPage.name}
                    line2="energy"
                    line3="infusion"
                    colorLine1={currentProductPage.colorPrimary}
                    colorLine2={currentProductPage.colorAccent}
                    colorLine3={currentProductPage.colorAccent}
                  />
                  <motion.ul
                    className="my-10 hidden justify-between lg:flex"
                    initial="initial"
                    whileInView="enter"
                    viewport={{ once: true }}
                    variants={{
                      enter: { transition: { staggerChildren: 0.06 } },
                    }}
                  >
                    <PerkItem svgIcon={<IoLeafOutline />}>
                      organic <br />
                      yerba mate
                    </PerkItem>
                    <PerkItem svgIcon={<PiInfinityLight />}>no crash</PerkItem>
                    <PerkItem svgIcon={<BsCupHot />}>
                      equivalent <br />
                      to an espresso
                    </PerkItem>
                  </motion.ul>
                </div>

                <div className="mt-10 space-y-8">
                  <SlideInUp>
                    <p className="text-lg leading-none">
                      From <br />
                      2.92$/ can
                    </p>
                  </SlideInUp>
                  <CTAButton
                    href="/"
                    backgroundColor={currentProductPage.colorPrimary}
                    color={currentProductPage.colorSecondary}
                  >
                    build your box
                  </CTAButton>
                </div>
              </div>

              <div className="spacey-10 pt-20 lg:pt-10">
                <p className="text-lg/tight lg:text-xl">
                  {currentProductPage.description}
                </p>
                <ul className="-mx-[--padding-small] mt-14 md:px-5">
                  <AccordionToggler label="Ingredients">
                    <ul className="">
                      {currentProductPage.ingredients.map(
                        (ingredient, index) => (
                          <li key={ingredient} className="relative pl-8">
                            <span className="absolute left-0 top-[-0.3em] text-4xl">
                              &#x2022;
                            </span>
                            {ingredient}
                          </li>
                        ),
                      )}
                    </ul>
                  </AccordionToggler>
                  <AccordionToggler label="Nutritional facts">
                    <div className="">
                      <Image
                        src={currentProductPage.srcNutritionImage}
                        width={1200}
                        height={350}
                        alt="Nutrition image"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </AccordionToggler>
                  <AccordionToggler label="No bullsh!t">
                    <ul className="">
                      {currentProductPage.noBullshit.map((bullshit, index) => (
                        <li key={bullshit} className="relative pl-8">
                          <span className="absolute left-0 text-sm">
                            &#10005;
                          </span>
                          {bullshit}
                        </li>
                      ))}
                    </ul>
                  </AccordionToggler>
                </ul>
              </div>
            </div>
            <InfinityText
              list={["60mg caffein", "yerba mate", "no bullsh!t"]}
              colorPrimary={currentProductPage.colorPrimary}
              colorSecondary={currentProductPage.colorAccent}
            />

            <motion.ul
              className="grid grid-cols-2 gap-10 px-small md:grid-cols-3"
              initial="initial"
              whileInView="enter"
              viewport={{ once: true }}
              variants={{
                enter: { transition: { staggerChildren: 0.06 } },
              }}
            >
              <PerkItem svgIcon={<IoLeafOutline />}>
                organic <br />
                yerba mate
              </PerkItem>
              <PerkItem svgIcon={<PiInfinityLight />}>no crash</PerkItem>
              <PerkItem svgIcon={<BsCupHot />}>
                equivalent <br />
                to an espresso
              </PerkItem>
              <PerkItem svgIcon={<WiStars />}>
                awakens <br />
                the mind
              </PerkItem>
              <PerkItem svgIcon={<PiInfinityLight />}>
                sports <br />
                recovery
              </PerkItem>
              <PerkItem svgIcon={<PiHandshakeLight />}>fair trade</PerkItem>
              <PerkItem svgIcon={<LiaCanadianMapleLeaf />}>
                proudly <br />
                canadian
              </PerkItem>
              <PerkItem svgIcon={<PiHandshakeLight />}>no jilters</PerkItem>
            </motion.ul>

            <div className="grid h-full w-full">
              <div className="-mb-10 -ml-10 mt-16 pr-[35%]">
                <div className="relative -translate-x-[20%]">
                  <Image
                    src={currentProductPage.srcIllustration}
                    width={500}
                    height={350}
                    alt="Image illustration"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="mb-10 flex items-center justify-between px-5 lg:hidden">
          <p className="text-h4">Discover our infusions</p>
          <SwiperButtonContainer
            navClassButtonPrev={`button-prev ${isBeginning ? "pointer-events-none opacity-50" : ""}`}
            navClassButtonNext={`button-next ${isEnd ? "pointer-events-none opacity-50" : ""}`}
          />
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          speed={900}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          onInit={(swiper) => handleSlideChange(swiper)}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: {
              slidesPerView: REMAIN_PRODUCTS.length,
              spaceBetween: "-10%",
            },
          }}
          className="relative !px-5"
        >
          {REMAIN_PRODUCTS.map((product, index) => (
            <SwiperSlide
              key={index}
              className="overflow-hidden rounded-large lg:flex-1 lg:last:!mr-0 lg:hover:!-mr-[--border-radius-large] lg:hover:flex-[1.5] lg:last:hover:!mr-0"
              style={{
                transition:
                  "flex-grow .6s cubic-bezier(.38,.005,.215,1),margin .6s cubic-bezier(.38,.005,.215,1)",
              }}
            >
              <div className="aspect-[5/4] lg:aspect-auto lg:h-[23.5rem] xl:h-[28.5rem]">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

function PerkItem({ children, svgIcon }) {
  return (
    <motion.li className="space-y-4" variants={slideIn}>
      <span className="text-4xl 2xl:text-5xl">{svgIcon}</span>
      <p className="text-lg/none lg:text-xl/none">{children}</p>
    </motion.li>
  );
}
