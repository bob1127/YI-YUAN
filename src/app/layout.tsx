import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import Header from "../components/header/index.jsx";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import ClientWrapper from "../components/ClientWrapper.jsx"; // 引入 Client Component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yi-Yuan 宜園建設 | 匠心打造，永續宜居 | 台中優質建案工程",
  description:
    "宜園建設，堅持「實在的構築」理念，以匠心工藝打造高品質永續住宅，為您實現理想家園。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HeroUIProvider>
        <body className={inter.className}>
          <ClientWrapper>
            {" "}
            {/* 這裡包裹 children 讓 AOS 在 Client Component 運行 */}
            <div className="w-[100vw] z-[9999999] left-0 top-0 fixed">
              <div
                className="top-nav bg-[#222] py-4 flex justify-center text-gray-200"
                data-aos="fade-down"
              >
                宜園建設：實在的構築
              </div>
              <Header />
            </div>
            <main>{children}</main>
          </ClientWrapper>
        </body>
        <footer className="pb-[150px] z-[-1] pt-[200px] flex flex-col justify-center items-center bg-[#f4efe3]">
          <div
            className="top w-[85%] border md:mb-10 mb-0 flex border-black mx-auto"
            data-aos="fade-up"
          >
            <div className="w-1/2">
              <div className="navgation flex flex-col md:flex-row">
                <div>
                  <button className="relative text-[.9rem] bg-transparent after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:scale-x-100">
                    關於我們
                  </button>
                </div>
                <div>
                  <button className="relative text-[.9rem] bg-transparent after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:scale-x-100">
                    新案鑑賞
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>
          <div
            className="w-[85%] flex flex-col md:flex-row mx-auto bottom"
            data-aos="fade-up"
          >
            <div className="w-full md:w-[55%] flex flex-col">
              <div className="flex flex-row items-center">
                <h2 className="font-extrabold text-[2.2rem] md:text-[4rem] text-nowrap mr-3">
                  Yi Yuan
                </h2>
                <TextGenerateEffect words="宜園建設" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center pt-20" data-aos="fade-up">
            <p className="text-gray-400 font-light text-[.85rem]">
              . Design by 極客網頁設計Jeek
            </p>
          </div>
        </footer>
      </HeroUIProvider>
    </html>
  );
}
