import AccordionItem from "./ui/accordion-item";

export default function CtaFaq() {
  return (
    <div className="my-20 lg:flex">
      <h3 className="mb-10 h-fit px-small text-xl lg:my-[1.25rem] lg:flex-1 xl:text-2xl">
        Frequently asked questions
      </h3>

      <div className="md:px-5 lg:basis-1/2">
        <AccordionItem label="What is Yerba Mate?">
          <p>
            Ilex paraguariensis, by its botanical name, or yerba maté, is a tree
            that grows in southern countries of South America, mainly Argentina,
            Brazil, Uruguay and Paraguay. Yerba Mate leaves are naturally
            caffeinated and picked and dried for consumption, traditionally
            infused in a calabash (small container), using the bombilla
            (filtering straw) and by adding hot water.
          </p>
        </AccordionItem>

        <AccordionItem label="What are benefits of Yerba Mate?">
          <ul className="space-y-1">
            {[
              "Rich in antioxidants and nutrients",
              "Can boost energy and increase mental alertness",
              "Regulates energy levels",
              "Increased sport recuperation",
              "Anti-inflammatory",
            ].map((item, index) => (
              <li className="relative pl-8" key={item}>
                <span className="absolute left-0">{index + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </AccordionItem>

        <AccordionItem label="Is it safe to drink Yerba Mate everyday?">
          <p>
            Yes! Just like tea or coffee, yerba mate can be consumed regularly.
            However, it’s best to start gradually, especially if you’re not
            accustomed to caffeine. Feel free to incorporate yerba mate
            beverages into your daily routine according to your preferences.
          </p>
        </AccordionItem>
      </div>
    </div>
  );
}
