import React from "react";
import Header from "../components/header";
import CtaFaq from "../components/cta-faq";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Header />
      <main className="h-full">
        {children}

        <CtaFaq />
      </main>
      <Footer />
    </div>
  );
}
