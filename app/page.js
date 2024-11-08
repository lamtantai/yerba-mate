import BlockCTACompact from "./components/block-cta-compact";
import Carousel from "./components/carousel";
import CtaFaq from "./components/cta-faq";
import FeatureProduct from "./components/feature-product";
import Footer from "./components/footer";
import Header from "./components/header/header";
import Hero from "./components/hero";
import SplashYerba from "./components/splash-yerba";
import SmoothScroll from "./components/locomotive-scroll";
import MenuProvider from "./context/menu-provider";

export default function Home() {
  return (
    <MenuProvider>
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
    </MenuProvider>
  );
}
