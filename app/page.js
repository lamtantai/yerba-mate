import FeatureProduct from "./components/feature-product";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <FeatureProduct />
      </main>
    </div>
  );
}
