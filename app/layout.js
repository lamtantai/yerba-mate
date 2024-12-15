import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "./components/locomotive-scroll";
import MenuProvider from "./context/menu-provider";
import Footer from "./components/footer";
import CtaFaq from "./components/cta-faq";
import Menu from "./components/menu";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const studioProBold = localFont({
  src: "./fonts/StudioPro-Bold.woff2",
  variable: "--studio-pro-bold",
});

const studioProRegular = localFont({
  src: "./fonts/StudioPro-Regular.woff2",
  variable: "--studio-pro-regular",
});

export const metadata = {
  title: "Yerba Mate | Montreal & Toronto, Canada | Mate Libre",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${studioProBold.variable} ${studioProRegular.variable} font-studioProBold`}
      >
        <MenuProvider>
          <SmoothScroll>
            <Menu />
            <main>
              {children}
              <CtaFaq />
            </main>
            <Footer />
          </SmoothScroll>
        </MenuProvider>
      </body>
    </html>
  );
}
