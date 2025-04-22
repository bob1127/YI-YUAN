"use client";
import { useEffect, useRef, useState, useLayoutEffect } from "react";

// import Footer from "./components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import Landing from "../components/Landing/index.jsx";
import Preloader from "../components/Preloader/index.jsx";
let isInitialLoad = true;
// import CityScene from "../components/CityScene.jsx";
import { TransitionLink } from "../components/utils/TransitionLink";

import dynamic from "next/dynamic";
// const CityScene = dynamic(() => import("@/components/CityScene"), {
//   ssr: false,
// });

export default function Home() {
  const containerRef = useRef(null);
  const preloaderRef = useRef(null);
  const videoRef = useRef(null);

  const progressBarRef = useRef(null);
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);

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

  useGSAP(
    () => {
      console.log("Preloader:", preloaderRef.current);
      console.log("Progress Bar:", progressBarRef.current);

      if (showPreloader) {
        const tl = gsap.timeline({
          onComplete: () => setShowPreloader(false),
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
    },
    { scope: containerRef, dependencies: [showPreloader] }
  );
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {showPreloader && (
        <div className="pre-loader " ref={preloaderRef}>
          <div className="progress-bar" ref={progressBarRef}></div>
        </div>
      )}
      <div
        className="home-page bg-[url('/images/pexels-peter-fazekas-1089451.jpg')] bg-center bg-no-repeat bg-cover w-screen h-screen relativez-[99999999999]"
        ref={containerRef}
      >
        <div className="hero-video">
          {/* <CityScene /> */}
          {/* <video
            ref={videoRef}
            className="video-bg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="videos/7578552-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video> */}
          {/* 黑色遮罩 */}
          {/* <div className="video-overlay"></div> */}
          {/* <CityScene /> */}
        </div>
        <div className="hero-title z-[99999]">
          <div className="line mt-4 ">
            <h1 className="text-5xl text-white">實在的構築</h1>
            <h1 className="text-[1.4rem] mt-[-15px] text-[#A99C81] ">
              TRUE ARCH
            </h1>
            <h1 className="text-white text-[1rem] w-2/3 my-4 font-normal leading-loose tracking-widest mx-auto">
              宜居的建築，承載著宜居的根，不一定最宏大，卻能帶來安心。
              傾聽，土地的聲音；細說，生命的故事。不一定最奢華，卻處處溫暖，生活宜人。
            </h1>
          </div>

          <button
            onClick={() => (window.location.href = "/home")}
            className="group  mt-5 relative h-12 rounded-full border border-neutral-200 bg-transparent px-4 text-neutral-950"
          >
            <span className="relative inline-flex overflow-hidden">
              <div className="translate-y-0 text-white  skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                ＥＮＴＥＲ
              </div>
              <div className="absolute text-white translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                Yi-Yuan
              </div>
            </span>
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
