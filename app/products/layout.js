import React from "react";
import Header from "../components/header";
import CtaFaq from "../components/cta-faq";
import Footer from "../components/footer";
import SmoothScroll from "../components/locomotive-scroll";
import MenuProvider from "../context/menu-provider";

export default function Layout({ children }) {
  return (
    <MenuProvider>
      <SmoothScroll>
        <div className="relative">
          <Header />
          <main className="h-full">
            {children}

            <CtaFaq />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </MenuProvider>
  );
}
