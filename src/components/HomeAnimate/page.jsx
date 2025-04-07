"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import "./page.css";
import { DragCloseDrawer } from "../../components/DragCloseDrawer";
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

      {/* 主內容 */}
      <div className="container ">
        <div className="counter">
          <p ref={counterRef}>0</p>
        </div>
        <section className="hero " ref={heroRef}>
          <div className="overlay" ref={overlayRef}></div>

          {/* <div
            className="header  overflow-hidden w-1/2 px-4 sm:px-[10%]"
            ref={headerRef}
          >
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-normal text-[#f4f2f0]">
              宜園建設
            </h1>

          
            <div className="flex flex-row py-4 btn-wrap">
              <button className="group relative inline-flex h-8 items-center border-gray-400 border justify-center rounded-full bg-[#022c22] px-6 font-medium text-neutral-200">
                關於宜園建設
              </button>
              <button className="group relative ml-3 inline-flex h-8 items-center justify-center rounded-full border-gray-400 border bg-[#022c22] px-6 font-medium text-neutral-200">
                精選建案案例
              </button>
            </div>
          </div> */}

          <div
            className="hero-img border border-black h-[120vh]"
            ref={heroImgRef}
          >
            <section className="section-hero relative">
              <motion.div
                style={{ opacity: fadeOut, x: slideLeft }}
                className="absolute top-[-160px] md:top-[-50px] 2xl:top-[-150px]  left-[-5%] 2xl:left-0 sm:w-[450px] w-[350px] xl:w-[600px] h-auto z-[1]"
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
                className="absolute top-0 lg:top-0 right-0 sm:w-[450px] w-[300px] xl:w-[600px] h-auto z-[1]"
              >
                <Image
                  src="/images/—Pngtree—tree branch_5643252.png"
                  alt="Right Tree"
                  width={600}
                  height={600}
                />
              </motion.div>
              <div className="grid overflow-hidden group absolute hover:w-[300px] duration-400 rounded-full bg-white border-2 border-black w-[60px] h-[60px] z-[9999999] top-[40%] left-[20%] place-content-center ">
                <DragCloseDrawer
                  trigger={({ onClick }) => (
                    <button
                      onClick={onClick}
                      className="px-4  flex justify-start items-center   w-full h-[45px] group-hover:w-[300px] py-2 "
                    >
                      <div className="text-white rounded-full  w-[45px] h-[45px] bg-[#5b8b5a] flex justify-center items-center hover:bg-[#487447]">
                        01
                      </div>
                      <span className="text-[1.1rem] ml-4 group-hover:block group-hover:opacity-100 delay-150 duration-300 hidden opacity-0 font-bold tracking-widest">
                        實在的構築 - 宜園大院
                      </span>
                    </button>
                  )}
                >
                  <div className="max-w-2xl mx-auto text-neutral-400 space-y-4">
                    <h2 className="text-4xl font-bold text-neutral-200">
                      可重用的 Drawer 🎉
                    </h2>
                    <p>
                      這個 drawer
                      現在可以在任何地方使用，只要傳入你想要的內容跟按鈕樣式就好。
                    </p>
                  </div>
                </DragCloseDrawer>
              </div>
              <video
                src="/videos/TMHD.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-[100vw] h-screen object-cover"
              ></video>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
