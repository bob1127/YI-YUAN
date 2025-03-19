"use client";
import { TransitionLink } from "../../components/utils/TransitionLink";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

import ParallaxImage from "../../components/ParallaxImage";
import { ReactLenis } from "@studio-freight/react-lenis";
import HeroSlider from "../../components/HeroSlider/page";
import Marquee from "react-fast-marquee";
import "./about.css";
import { Carousel } from "../../components/ui/carousel01";
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
  return (
    <ReactLenis root>
      <div className="app">
        <TextParallaxContent
          imgUrl="https://hadashinoie.co.jp/assets/images/hero/hero-slide03.jpg"
          heading="關於宜園建設."
          description="宜家園邸，打造溫馨舒適的理想家園。宜園建設精心規劃，融合自然綠意與現代設計，營造安心宜居的生活環境。便利交通、完善機能，讓您盡享家的溫暖與美好。"
        ></TextParallaxContent>

        <section className="about flex !h-[85vh] flex-col lg:flex-row section">
          <div className="col lg:w-1/2 w-full portrait">
            <div className="portrait-container">
              <div className="img mt-8">
                <ParallaxImage
                  src="https://www.hasegawa-kogyo.co.jp/lucano/img/sec_gallery03.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col lg:w-1/2 w-full  intro">
            <h1 className="text-[#333]">宜家</h1>
            <p className="leading-relaxed font-normal text-[.95rem] text-[#20201f]">
              宜家園邸，打造溫馨舒適的理想家園。宜園建設精心規劃，融合自然綠意與現代設計，營造安心宜居的生活環境。便利交通、完善機能，讓您盡享家的溫暖與美好。
            </p>
            <div className="flex justify-center items-center h-[20rem] flex-col px-4">
              <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
                <LinkPreview url="/project" className="font-bold no-underline">
                  實在的構築
                </LinkPreview>{" "}
                project{" "}
                <LinkPreview url="/project" className="font-bold no-underline">
                  宜園建設
                </LinkPreview>{" "}
                宜園建設精心規劃，融合自然綠意與現代設計
              </p>
            </div>
          </div>
        </section>

        <section className="banner h-[360px] md:h-[80vh] 2xl:h-[1000px]">
          <div className="img ">
            <ParallaxImage
              src="https://editora.jp/wp/wp-content/themes/editora/assets/img/cover1@2x.jpg"
              alt=""
              className=""
            />
          </div>

          {/* <div className="banner-copy">
            <p>綠意生活，宜園共築</p>
            <h1>宜園建設</h1>
            <p className="!mt-10 !leading-loose !w-[60%]">
              宜園建設以「品質、匠心、宜居」為核心理念，專注於打造兼具美學與實用性的建築空間。我們堅持嚴選優質建材、融合自然環境，讓每一個細節都承載溫度，為您築起舒適、安全、永續的理想家園。
            </p>
            <button>Join the newsletter</button>
          </div> */}
        </section>

        <div className="footer overflow-hidden h-full  lg:flex-row flex-col  flex justify-center items-center mx-auto">
          <div className="col w-full  lg:w-1/2 flex flex-col justify-center   md:pl-[10%] xl:pl-[150px]">
            <div className=" mt-8 2xl:p-20">
              <h1 className="text-[#201815]">宜居</h1>
              <p className="leading-relaxed font-normal text-[.95rem] text-[#20201f]">
                宜家園邸，打造溫馨舒適的理想家園。宜園建設精心規劃，<br></br>
                融合自然綠意與現代設計，營造安心宜居的生活環境。<br></br>
                便利交通、完善機能，讓您盡享家的溫暖與美好。
              </p>
            </div>
            <div className=" mt-8 2xl:p-20">
              <FlipLink href="#">誠境二期</FlipLink>
              <FlipLink href="#">誠境五期</FlipLink>
              <FlipLink href="#">誠境六期</FlipLink>
              <FlipLink href="#">誠境五期</FlipLink>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pl-2 h-full border-l-1 border-black">
            <div className="h-[100%] w-[100%] bg-black">
              <Image
                src="/images/ph_gyokuto-town-office.jpg"
                alt=""
                width={800}
                height={1500}
                placeholder="empty"
                loading="lazy"
              ></Image>
            </div>
          </div>
        </div>
        <Marquee>
          <div className="flex flex-row py-10 justify-center items-center">
            <div className="h-[1px] bg-black w-[50vw]"></div>
            <div className="flex flex-row justify-center items-center">
              <p className="text-[3rem] mx-4">CONTACT</p>
              <button class="group relative mr-3 inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950">
                <div class="transition duration-300 group-hover:rotate-[360deg]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-neutral-200"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <div className="h-[1px] bg-black w-[50vw]"></div>
          </div>
        </Marquee>

        <div className="bg-[#f4efe3] py-8 border border-red-300 lg:flex-row flex-col flex">
          <div className=" w-full lg:w-1/2 ">
            <div className="relative h-[400px] sm:h-[50vh] lg:h-[70vh] 2xl:h-[65vh] overflow-hidden w-full">
              <Carousel slides={slideData} />
            </div>
          </div>
          <div className="w-full pl-[5%] lg:w-1/2 flex  pt-0 lg:pt-20  flex-col">
            <div className="flex flex-col ">
              <h2 className="text-[2.3rem]">建案基地</h2>
              <p className="w-[70%] font-[.9rem] font-normal leading-relaxed">
                來體驗EDITORA的世界。請注意，展廳僅接受預約開放。<br></br>
                如果您有興趣，請發電子郵件給我們（ 訊息 ) 進行諮詢。
              </p>
            </div>
            <div className="flex flex-col mt-8 lg:mt-20">
              <b className="text-[.95rem]">◼︎ THE BUILDING PLACE</b>
              <span className="text-[.95rem] font-normal">台中市南屯區</span>
            </div>
            <div className="btn-wrap flex mt-10 lg:mt-20">
              <button class="group relative mr-5 inline-flex h-10 items-center justify-center overflow-hidden rounded-full border !bg-gray-800 border-neutral-200 bg-transparent px-4 text-neutral-100">
                <span class="relative inline-flex overflow-hidden">
                  <div class="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
                    聯繫宜園
                  </div>
                  <div class="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
                    GOOGLE MAPS
                  </div>
                </span>
              </button>
              <button class="group relative  inline-flex h-10 items-center justify-center overflow-hidden rounded-full border !bg-gray-800 border-neutral-200 bg-transparent px-4 text-neutral-100">
                <span class="relative inline-flex overflow-hidden">
                  <div class="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
                    您的需求
                  </div>
                  <div class="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
                    {" "}
                    Mail to Us
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
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
