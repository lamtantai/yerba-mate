"use client";

import AccordionToggler from "./ui/accordion-toggler";

export default function CtaFaq() {
  return (
    <div className="text-xl">
      <div className="my-20 lg:flex">
        <h3 className="mb-10 h-fit px-small lg:my-[1.25rem] lg:basis-1/2 xl:text-2xl">
          Frequently asked questions
        </h3>
        <ul className="md:px-5 lg:basis-1/2">
          <AccordionToggler label="What is Yerba Mate?">
            <p>
              Ilex paraguariensis, by its botanical name, or yerba maté, is a
              tree that grows in southern countries of South America, mainly
              Argentina, Brazil, Uruguay and Paraguay. Yerba Mate leaves are
              naturally caffeinated and picked and dried for consumption,
              traditionally infused in a calabash (small container), using the
              bombilla (filtering straw) and by adding hot water.
            </p>
          </AccordionToggler>

          <AccordionToggler label="What are benefits of Yerba Mate?">
            <ul className="space-y-1">
              <li className="relative pl-8">
                <span className="absolute left-0">1</span>Rich in antioxidants
                and nutrients
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0">2</span>Can boost energy and
                increase mental alertness
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0">3</span>
                Regulates energy levels
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0">4</span>
                Increased sport recuperation
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0">5</span>
                Anti-inflammatory
              </li>
            </ul>
          </AccordionToggler>

          <AccordionToggler label="Is it safe to drink Yerba Mate everyday?">
            <p>
              Yes! Just like tea or coffee, yerba mate can be consumed
              regularly. However, it’s best to start gradually, especially if
              you’re not accustomed to caffeine. Feel free to incorporate yerba
              mate beverages into your daily routine according to your
              preferences.
            </p>
          </AccordionToggler>
        </ul>
      </div>
    </div>
  );
}
