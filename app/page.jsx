import { BiSolidQuoteLeft } from "react-icons/bi";
import BlockCTACompact from "./components/block-cta-compact";
import FeatureProduct from "./components/feature-product";
import Header from "./components/header/header";
import Hero from "./components/hero";
import SplashYerba from "./components/splash-yerba";
import ImageWithText from "./components/ui/image-with-text";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureProduct />
      <SplashYerba />
      <BlockCTACompact />
      <ImageWithText imageSrc="/friend.jpg">
        <figure className="pb-20 pl-10 pr-small pt-32 lg:pt-44">
          <span className="absolute top-[10%] text-4xl">
            <BiSolidQuoteLeft />
          </span>
          <blockquote className="text-2xl/none 2xl:text-4xl">
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
      </ImageWithText>
    </>
  );
}
