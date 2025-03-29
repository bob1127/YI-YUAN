"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import "./page.css";

// 註冊 GSAP 插件
gsap.registerPlugin(CustomEase);
CustomEase.create(
  "hop",
  "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1 "
);

export default function LandingPage() {
  const counterRef = useRef(null);
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);
  const heroImgRef = useRef(null);

  // Framer Motion 滾動動畫
  const { scrollYProgress } = useScroll();
  const fadeOut = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const slideLeft = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
  const slideRight = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    function splitTextIntoSpans(selector) {
      let elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text
          .split("")
          .map((char) => `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`)
          .join("");
        element.innerHTML = splitText;
      });
    }
    splitTextIntoSpans(".header h1");

    function animateCounter() {
      let currentValue = 0;
      const updateInterval = 300;
      const maxDuration = 2000;
      const endValue = 100;
      const startTime = Date.now();

      const updateCounter = () => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < maxDuration) {
          currentValue = Math.min(
            currentValue + Math.floor(Math.random() * 30) + 5,
            endValue
          );
          if (counterRef.current) counterRef.current.textContent = currentValue;
          setTimeout(updateCounter, updateInterval);
        } else {
          if (counterRef.current) counterRef.current.textContent = endValue;
          setTimeout(() => {
            gsap.to(counterRef.current, {
              y: -20,
              duration: 1,
              ease: "power3.inOut",
              onStart: revealLandingPage,
            });
          }, 500);
        }
      };
      updateCounter();
    }

    gsap.to(counterRef.current, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1,
      onComplete: animateCounter,
    });

    function revealLandingPage() {
      gsap.to(heroRef.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 2,
        ease: "hop",
        onStart: () => {
          gsap.to(heroRef.current, {
            transform: "translate(-50%, -50%) scale(1)",
            duration: 2.25,
            ease: "power3.inOut",
            delay: 0.25,
          });

          gsap.to(overlayRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 2,
            delay: 0.5,
            ease: "hop",
          });

          gsap.to(heroImgRef.current, {
            transform: "scale(1)",
            duration: 2.25,
            ease: "power3.inOut",
            delay: 0.25,
          });

          gsap.to(".header h1 span", {
            y: 0,
            stagger: 0.1,
            duration: 2,
            ease: "power4.inOut",
            delay: 0.75,
            onComplete: () => {
              document.body.style.overflow = "auto";
            },
          });
        },
      });
    }
  }, []);

  return (
    <div className="relative">
      {/* 左側滑動圖片 */}
      <motion.div
        style={{ opacity: fadeOut, x: slideLeft }}
        className="absolute top-[-160px] md:top-[-250px] 2xl:top-[-150px]  left-[-15%] 2xl:left-0 sm:w-[450px] w-[350px] xl:w-[600px] h-auto z-10"
      >
        <Image
          src="/images/—Pngtree—green trees branches and leaves_4877518.png"
          alt="Left Tree"
          width={600}
          height={600}
        />
      </motion.div>

      {/* 右側滑動圖片 */}
      <motion.div
        style={{ opacity: fadeOut, x: slideRight }}
        className="absolute bottom-0 lg:bottom-1/2 right-0 sm:w-[450px] w-[300px] xl:w-[600px] h-auto z-10"
      >
        <Image
          src="/images/—Pngtree—tree branch_5643252.png"
          alt="Right Tree"
          width={600}
          height={600}
        />
      </motion.div>

      {/* 主內容 */}
      <div className="container ">
        <div className="counter">
          <p ref={counterRef}>0</p>
        </div>
        <section className="hero " ref={heroRef}>
          <div className="overlay" ref={overlayRef}></div>

          <div
            className="header  overflow-hidden w-1/2 px-4 sm:px-[10%]"
            ref={headerRef}
          >
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-normal text-[#f4f2f0]">
              Tender - 宜安
            </h1>
            <h2 className="text-white font-normal text-[3.2rem] ">宜園建設</h2>

            {/* 按鈕保留 */}
            <div className="flex flex-row py-4 btn-wrap">
              <button className="group relative inline-flex h-8 items-center border-gray-400 border justify-center rounded-full bg-[#022c22] px-6 font-medium text-neutral-200">
                關於宜園建設
              </button>
              <button className="group relative ml-3 inline-flex h-8 items-center justify-center rounded-full border-gray-400 border bg-[#022c22] px-6 font-medium text-neutral-200">
                精選建案案例
              </button>
            </div>

            <Marquee>
              <div className="flex">
                <h2 className="text-white font-light text-[1.5rem] md:text-[2.3rem]">
                  宜家 -{" "}
                </h2>
                <h2 className="text-white font-light text-[1.5rem] md:text-[2.3rem]">
                  宜居 -{" "}
                </h2>
                <h2 className="text-white font-light text-[1.5rem] md:text-[2.3rem]">
                  宜園 -{" "}
                </h2>
              </div>
            </Marquee>
          </div>

          <div
            className="hero-img border border-black h-[70vh] md:h-[90vh]"
            ref={heroImgRef}
          >
            <Image
              src="/images/img1home.jpg"
              alt=""
              width={2800}
              height={900}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
