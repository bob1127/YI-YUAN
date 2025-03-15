import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FlipNav } from "@/components/nav-bar/NavBar";
import * as React from "react";
import menu from "../components/Menu/Menu";
// 1. import `HeroUIProvider` component
import Image from "next/image";
import { HeroUIProvider } from "@heroui/react";
// import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

import Header from "../components/header/index.jsx";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
const inter = Inter({ subsets: ["latin"] });
// const testimonials = [
//   {
//     quote:
//       "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
//     name: "Sarah Chen",
//     designation: "Product Manager at TechFlow",
//     src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
//     name: "Michael Rodriguez",
//     designation: "CTO at InnovateSphere",
//     src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
//     name: "Emily Watson",
//     designation: "Operations Director at CloudScale",
//     src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
//     name: "James Kim",
//     designation: "Engineering Lead at DataPro",
//     src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
//     name: "Lisa Thompson",
//     designation: "VP of Technology at FutureNet",
//     src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];
const words = `宜園建設
`;
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
          <div className="w-[100vw] z-[9999999] left-0 top-0 fixed">
            <div className="top-nav bg-[#222] py-4 flex justify-center text-gray-200">
              宜園建設：實在的構築
            </div>
            <Header />
            {/* <FlipNav /> */}
          </div>

          {children}
        </body>
        <footer className="pb-[150px] pt-[200px] flex flex-col justify-center items-center bg-[#f4efe3]">
          <div className="top  w-[85%] border md:mb-10 mb-0 flex border-black mx-auto">
            <div className="w-1/2">
              <div className="navgation flex flex-col md:flex-row">
                <div>
                  <button
                    role="link"
                    className="relative after:absolute  text-[.9rem] bg-transparent after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    關於我們
                  </button>
                </div>
                <div>
                  <button
                    role="link"
                    className="relative after:absolute  text-[.9rem] bg-transparent after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    新案鑑賞
                  </button>
                </div>
                <div>
                  <button
                    role="link"
                    className="relative after:absolute  text-[.9rem] bg-transparent after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    最新公告
                  </button>
                </div>
                <div>
                  <button
                    role="link"
                    className="relative after:absolute  text-[.9rem] bg-transparent after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    新案鑑賞
                  </button>
                </div>
                <div>
                  <button
                    role="link"
                    className="relative after:absolute  text-[.9rem] bg-transparent after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    最新公告
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>
          <div className="w-[85%] flex flex-col md:flex-row mx-auto bottom">
            <div className="w-full md:w-[55%] flex flex-col">
              <div className="flex flex-row items-center">
                <h2 className=" font-extrabold text-[2.2rem] md:text-[4rem] 2xl::text-[5rem] text-nowrap mr-3">
                  Yi Yian
                </h2>
                <TextGenerateEffect words={words} />
              </div>
              <div className="social">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="40"
                    height="40"
                    fill="none"
                    stroke="black"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* 正方形外框 */}
                    <rect x="1" y="1" width="18" height="18" rx="3" ry="3" />
                    {/* Facebook "f" */}
                    <path d="M13 5.5h-2c-0.7 0-1.3 0.6-1.3 1.3v2.2H8v2.5h1.7V15h2.5v-3.5H14l0.5-2.5h-2.3V7c0-0.3 0.2-0.5 0.5-0.5h1.3z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[45%] flex flex-col md:flex-row">
              <div className="w-full mt-4 md:w-1/3">
                <span className="text-[1.2rem] font-bold">Social</span>
              </div>
              <div className="w-full mt-4 md:w-1/3">
                <span className="text-[1.2rem] font-bold">Project</span>
                <ul className="mt-5">
                  <li className="mt-2 text-[.9rem]">宜園建設</li>
                  <li className="mt-2 text-[.9rem]">一清影</li>
                  <li className="mt-2 text-[.9rem]">誠境二期</li>
                </ul>
              </div>
              <div className="w-full mt-4 md:w-1/3">
                <span className="text-[1.2rem] font-bold">Location</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[85%] flex flex-col md:flex-row pb-5 pt-20 mx-auto bottom">
            <div className="w-full md:w-1/2 flex flex-row justify-center md:justify-start">
              <span className="text-[.85rem] text-gray-800 font-light mr-3">
                室內設計・
              </span>
              <span className="text-[.85rem] text-gray-800 font-light mr-3">
                建案鑑賞・
              </span>
              <span className="text-[.85rem] text-gray-800 font-light mr-3">
                台中建案・
              </span>
            </div>
            <div className="w-full  md:w-1/2 mt-5 md:mt-0 flex justify-center md:justify-end">
              <span className="font-light text-[.8rem] text-gray-400">
                © 宜園建設 Yi Yuan
              </span>
            </div>
          </div>
          <div className="w-full flex justify-center pt-20">
            <p className="text-gray-400 font-light text-[.85rem]">
              . Design by 極客網頁設計Jeek
            </p>
          </div>
        </footer>
      </HeroUIProvider>
    </html>
  );
}
