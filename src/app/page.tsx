"use client";

import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import Preloader from "../components/Preloader/index.jsx";
import Image from "next/image.js";

let isInitialLoad = true;

export default function Home() {
  const containerRef = useRef(null);
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);

  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop-main",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  }, []);

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useGSAP(() => {
    if (showPreloader) {
      const tl = gsap.timeline({
        onComplete: () => {
          setShowPreloader(false);
          setIsLoading(false);
          document.body.style.cursor = "default";
          window.scrollTo(0, 0);
        },
      });

      tl.to(progressBarRef.current, {
        scaleX: 1,
        duration: 4,
        ease: "power1.inOut",
      });

      tl.set(progressBarRef.current, { transformOrigin: "right" }).to(
        progressBarRef.current,
        {
          scaleX: 0,
          duration: 1,
          ease: "power2.in",
        }
      );

      tl.to(preloaderRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.5,
        ease: "hop-main",
      });
    }

    gsap.to(".hero-title .line h1", {
      y: 0,
      stagger: 0.1,
      delay: showPreloader ? 2.65 : 1,
      duration: 1.5,
      ease: "power4.out",
    });
  });

  return (
    <>
      {/* ✅ 這段是 SEO 標頭設定 */}
      <head>
        <title>宜園建設 Yi-Yuan</title>
        <meta
          name="description"
          content="歡迎進入宜園建設官方網站，探索實在構築的理想生活。"
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.yiyuan-arch.com.tw/home" />
      </head>

      {/* ✅ 預載動畫（白背景） */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {showPreloader && (
        <div
          className="pre-loader fixed z-[9999999999999999]"
          ref={preloaderRef}
        >
          <div className="progress-bar" ref={progressBarRef}></div>
        </div>
      )}

      <div className="home-page relative z-[999]" ref={containerRef}>
        <div className="hero-video w-full h-screen relative">
          <Image
            src="/images/pexels-peter-fazekas-1089451.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="hero-title z-[99999]">
          <div className="line sm:mt-[60px]">
            <h1 className="text-5xl text-white">實在的構築</h1>
            <h1 className="text-[1.4rem] mt-[-15px] text-[#A99C81]">
              TRUE ARCH
            </h1>
            <h1 className="text-white text-[1rem] w-[80%] my-4 font-normal leading-loose tracking-widest mx-auto">
              宜居的建築，承載著宜居的根，不一定最宏大，卻能帶來安心。
              <br />
              傾聽，土地的聲音；細說，生命的故事。不一定最奢華，卻處處溫暖，生活宜人。
            </h1>
          </div>

          <button
            onClick={() => (window.location.href = "/home")}
            disabled={isLoading}
            className={`group sm:mt-[250px] relative h-12 rounded-full border border-neutral-200 bg-transparent px-4 text-neutral-950 ${
              isLoading ? "opacity-40 pointer-events-none" : ""
            }`}
          >
            <span className="relative inline-flex overflow-hidden">
              <div className="translate-y-0 text-white skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                ＥＮＴＥＲ
              </div>
              <div className="absolute w-full text-white translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 flex justify-center">
                Yi-Yuan
              </div>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
