import React from "react";
import CtaFaq from "../components/cta-faq";
import Footer from "../components/footer";
import SmoothScroll from "../components/locomotive-scroll";
import MenuProvider from "../context/menu-provider";

export default function Layout({ children }) {
  return (
    <MenuProvider>
      <SmoothScroll>
        <div className="relative">
          <main className="">
            {children}

            <CtaFaq />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </MenuProvider>
  );
}
