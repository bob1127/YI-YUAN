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
        <div className="pre-loader" ref={preloaderRef}>
          <div className="progress-bar" ref={progressBarRef}></div>
        </div>
      )}
      <div className="home-page" ref={containerRef}>
        <div className="hero-video w-full h-screen absolute top-0 left-0 z-[-1] overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="videos/7578552-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="hero-title">
          <div className="line">
            <h1 className="text-white text-5xl">宜園建設-宜園大院</h1>
          </div>
          <div className="line text-5xl">
            <h1>臨近繁華，與自然共生</h1>
          </div>
          <div data-aos="fade-up" className="description text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            aliquam cum nulla doloribus unde nam earum ipsam ad maiores a
            nostrum quae consequuntur dolore inventore aperiam nisi corrupti,
            ipsum perspiciatis.
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
