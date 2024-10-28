import BlockCTACompact from "./components/block-cta-compact";
import Carousel from "./components/carousel";
import CtaFaq from "./components/cta-faq";
import FeatureProduct from "./components/feature-product";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import SmoothScroll from "./components/locomotive-scroll";
import HorizontalScroll from "./components/scroll";
import SplashYerba from "./components/splash-yerba";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative">
        <Header />
        <main className="h-full">
          <Hero />
          <FeatureProduct />
          <SplashYerba />
          <BlockCTACompact />
          <CtaFaq />
          <Carousel />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
