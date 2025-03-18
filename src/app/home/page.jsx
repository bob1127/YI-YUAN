"use client";
import { TransitionLink } from "../../components/utils/TransitionLink";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import StartAnimate from "../../components/HomeAnimate/page";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxImage from "../../components/ParallaxImage";
import { ReactLenis } from "@studio-freight/react-lenis";
import HeroSlider from "../../components/HeroSlider/page";
import Marquee from "react-fast-marquee";
import { Carousel } from "../../components/ui/carousel01";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const slideData = [
    {
      title: "誠境二期",

      src: "https://www.hasegawa-kogyo.co.jp/lucano/img/sec_gallery01.jpg",
    },
    {
      title: "誠境二期",

      src: "https://www.hasegawa-kogyo.co.jp/lucano/img/sec_gallery05.jpg",
    },
    {
      title: "誠境二期",

      src: "https://www.hasegawa-kogyo.co.jp/lucano/img/sec_gallery02.jpg",
    },
    {
      title: "誠境二期",

      src: "https://www.hasegawa-kogyo.co.jp/lucano/img/sec_feature05.jpg",
    },
  ];
  const imageRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const disableScroll = () => {
      window.scrollTo(0, 0);
    };
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.height = "100vh";
    document.body.style.height = "100vh";
    window.addEventListener("scroll", disableScroll);

    const timeout = setTimeout(() => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.height = "auto";
      document.body.style.height = "auto";
      window.removeEventListener("scroll", disableScroll);
    }, 5000);

    // 設置圖片動畫
    const images = document.querySelectorAll(".animate-image-wrapper");
    images.forEach((image, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        image.querySelector(".overlay"),
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "power2.inOut",
        }
      )
        .to(image.querySelector(".overlay"), {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "power2.inOut",
        })
        .fromTo(
          image.querySelector(".image-container"),
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power3.inOut",
          },
          "-=0.5"
        );
    });

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", disableScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <section className="section_hero mt-[140px]">
        <StartAnimate />
      </section>
      <section className="section_features w-full  mx-auto sm:[90%] lg:w-[85%] 2xl:w-[70%]">
        <div className="flex lg:flex-row flex-col w-[85%] mx-auto mt-20">
          <div className="img w-[90%] md:w-[550px] lg:w-[85%] mx-auto h-auto md:h-[700px] overflow-hidden">
            <div className="animate-image-wrapper relative w-full aspect-[4/5] md:h-full overflow-hidden ">
              <div className="overlay absolute inset-0 bg-black z-10"></div>
              <div className="image-container relative w-full h-full">
                <Image
                  src="https://hadashinoie.co.jp/assets/images/index/about01.jpg"
                  alt="About Image 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                />
                xs
              </div>
            </div>
          </div>
          <div className="text w-[95%] lg:w-1/2 p-8 flex flex-col justify-center items-center">
            <TextGenerateEffect words="宜居" />
            <p>不與人同的作為</p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-[85%] mx-auto mt-20">
          <div className="text w-[95%] lg:w-1/2 p-8 flex flex-col justify-center items-center">
            <TextGenerateEffect words="宜融" />
            <p>家是情感的生態系</p>
          </div>
          <div className="img w-[90%] md:w-[550px] lg:w-[85%] mx-auto h-auto md:h-[700px] overflow-hidden">
            <div className="animate-image-wrapper relative w-full aspect-[4/5] md:h-full overflow-hidden ">
              <div className="overlay absolute inset-0 bg-black z-10"></div>
              <div className="image-container relative w-full h-full">
                <Image
                  src="https://hadashinoie.co.jp/assets/images/index/about02.jpg"
                  alt="About Image 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-[85%] mx-auto mt-20">
          <div className="img w-[90%] md:w-[550px] lg:w-[85%] mx-auto h-auto md:h-[700px] overflow-hidden">
            <div className="animate-image-wrapper relative w-full aspect-[4/5] md:h-full overflow-hidden ">
              <div className="overlay absolute inset-0 bg-black z-10"></div>
              <div className="image-container relative w-full h-full">
                <Image
                  src="https://hadashinoie.co.jp/app/wp-content/uploads/2025/03/hadashinoie-54-1-2048x1365.jpg"
                  alt="About Image 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                />
              </div>
            </div>
          </div>
          <div className="text w-[95%] lg:w-1/2 p-8 flex flex-col justify-center items-center">
            <TextGenerateEffect words="宜安" />
            <p>構築心靈的沃土</p>
          </div>
        </div>
      </section>

      <div className="grid place-content-center  px-4  py-5 sm:py-12 lg:py-24 text-yellow-50">
        <h1 className="max-w-2xl text-gray-600  font-normal text-center sm:text-[3rem] text-[2rem] lg:text-5xl leading-snug">
          實在的構築
          <span className="relative">
            宜園建設
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#FACC15"
                strokeWidth="3"
              />
            </svg>
          </span>{" "}
        </h1>
      </div>
      <section className="section_project flex-col">
        <div className="title pl-4 pb-4 pr-4 pt-4 lg:pl-[10%] lg:pb-10">
          <TextGenerateEffect
            words="House, furniture, apparel and everything committed to
            quality."
          />
          <p className="text-[1.1rem]">
            我們用心塑造我們的家、家具、服飾和其他一切。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  w-full ">
          <TransitionLink href="/project">
            <div className="relative w-full h-[400px] bg-[url('https://hadashinoie.co.jp/assets/images/index/service03.jpg')] bg-center bg-no-repeat bg-cover group  overflow-hidden">
              {/* 毛玻璃遮罩（hover時顯示） */}
              <div className="absolute inset-0 bg-white/1 backdrop-blur-[10px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80"></div>

              {/* 內部內容 */}
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="top h-[20%] flex items-start p-5">
                  <span className="text-white text-[.9rem]">01</span>
                </div>
                <div className="flex justify-center items-center h-[80%]">
                  <div className="text-white text-[1rem] font-semibold">
                    青年住宅
                  </div>
                </div>
              </div>
            </div>
          </TransitionLink>
          <TransitionLink href="/project">
            <div className="relative w-full h-[400px] bg-[url('https://hadashinoie.co.jp/app/wp-content/uploads/2025/03/hadashinoie004-2048x1365.jpg')] bg-center bg-no-repeat bg-cover group  overflow-hidden">
              {/* 毛玻璃遮罩（hover時顯示） */}
              <div className="absolute inset-0 bg-white/1 backdrop-blur-[10px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80"></div>

              {/* 內部內容 */}
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="top h-[20%] flex items-start p-5">
                  <span className="text-white text-[.9rem]">01</span>
                </div>
                <div className="flex justify-center items-center h-[80%]">
                  <div className="text-white text-[1rem] font-semibold">
                    青年住宅
                  </div>
                </div>
              </div>
            </div>
          </TransitionLink>
          <TransitionLink href="/project">
            <div className="relative w-full h-[400px] bg-[url('https://hadashinoie.co.jp/app/wp-content/uploads/2025/02/hadashinoie116-2048x1365.jpg')] bg-center bg-no-repeat bg-cover group  overflow-hidden">
              {/* 毛玻璃遮罩（hover時顯示） */}
              <div className="absolute inset-0 bg-white/1 backdrop-blur-[10px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80"></div>

              {/* 內部內容 */}
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="top h-[20%] flex items-start p-5">
                  <span className="text-white text-[.9rem]">01</span>
                </div>
                <div className="flex justify-center items-center h-[80%]">
                  <div className="text-white text-[1rem] font-semibold">
                    青年住宅
                  </div>
                </div>
              </div>
            </div>
          </TransitionLink>
          <TransitionLink href="/project">
            <div className="relative w-full h-[400px] bg-[url('https://hadashinoie.co.jp/app/wp-content/uploads/2025/03/hadashinoie-54-1-2048x1365.jpg')] bg-center bg-no-repeat bg-cover group  overflow-hidden">
              {/* 毛玻璃遮罩（hover時顯示） */}
              <div className="absolute inset-0 bg-white/1 backdrop-blur-[10px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80"></div>

              {/* 內部內容 */}
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="top h-[20%] flex items-start p-5">
                  <span className="text-white text-[.9rem]">01</span>
                </div>
                <div className="flex justify-center items-center h-[80%]">
                  <div className="text-white text-[1rem] font-semibold">
                    青年住宅
                  </div>
                </div>
              </div>
            </div>
          </TransitionLink>
          <TransitionLink href="/project">
            <div className="relative w-full h-[400px] bg-[url('https://hadashinoie.co.jp/app/wp-content/uploads/2025/03/hadashinoie040-1-1-2048x1366.jpg')] bg-center bg-no-repeat bg-cover group overflow-hidden">
              {/* 毛玻璃遮罩（hover時顯示） */}
              <div className="absolute inset-0 bg-white/1 backdrop-blur-[10px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80"></div>

              {/* 內部內容 */}
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="top h-[20%] flex items-start p-5">
                  <span className="text-white text-[.9rem]">01</span>
                </div>
                <div className="flex justify-center items-center h-[80%]">
                  <div className="text-white text-[1rem] font-semibold">
                    青年住宅
                  </div>
                </div>
              </div>
            </div>
          </TransitionLink>
        </div>
      </section>
    </ReactLenis>
  );
}
const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <TransitionLink href="/about">
        <h1>About</h1>
      </TransitionLink>
      <TransitionLink href="/community">Community</TransitionLink>
      <TransitionLink href="/pricing">Pricing</TransitionLink>
      <TransitionLink href="/company">Company</TransitionLink>
    </div>
  );
};
const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block my-4 w-[240px] h-[43px] pt-1 overflow-hidden whitespace-nowrap text-[2.5rem] font-normal uppercase "
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-190%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block "
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute top-1 inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "200%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  description,
  subheading,
  heading,
  children,
}) => {
  return (
    <div>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy
          heading={heading}
          subheading={subheading}
          description={description}
        />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.99]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden "
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading, description }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-[200vh] px-[5%] sm:px-[8%] lg:px-[10%] 2xl:px-[15%]  flex-col pb-[50vh] items-start justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 text-white md:text-3xl">
        {subheading}
      </p>
      <p className="text-left  w-2/3 leading-relaxed text-white font-bold text-[3rem]">
        {heading}
      </p>
      <p className="w-2/3 xl:w-1/2  text-[1rem] text-white leading-loose mt-5">
        {description}
      </p>
    </motion.div>
  );
};
