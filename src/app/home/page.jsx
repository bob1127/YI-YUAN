"use client";
import { TransitionLink } from "../../components/utils/TransitionLink";

import StartAnimate from "../../components/HomeAnimate/page";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxImage from "../../components/ParallaxImage";
import { ReactLenis } from "@studio-freight/react-lenis";
import HeroSlider from "../../components/HeroSlider/page";
import Marquee from "react-fast-marquee";
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

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", disableScroll);
    };
  }, []);

  return (
    <ReactLenis root>
      {/* <section className="section_hero mt-[140px]">
        <StartAnimate />
      </section> */}
      <section className="section_features">
        <div className="flex w-[85%]  border-3 mx-auto mt-10">
          <div className="img w-1/2 mx-auto">
            <img
              src="https://hadashinoie.co.jp/assets/images/index/about01.jpg"
              alt=""
              placeholder="empty"
              loading="lazy"
              width={800}
              className=""
              height={1200}
            ></img>
          </div>
          <div className="text w-1/2 p-8 flex flex-col justify-center items-center">
            <h2 className="text-[#333]">宜居</h2>
            <p>不與人同的作為</p>
          </div>
        </div>
        <div className="flex w-[85%]  border-3 mx-auto mt-10">
          <div className="text w-1/2 p-8 flex flex-col justify-center items-center">
            <h2 className="text-[#333]">宜融</h2>
            <p>家是情感的生態系</p>
          </div>
          <div className="img w-1/2 mx-auto">
            <img
              src="https://hadashinoie.co.jp/assets/images/index/about02.jpg"
              alt=""
              placeholder="empty"
              loading="lazy"
              width={800}
              className=""
              height={1200}
            ></img>
          </div>
        </div>
        <div className="flex w-[85%]  border-3 mx-auto mt-10">
          <div className="img w-1/2 mx-auto">
            <img
              src="https://hadashinoie.co.jp/app/wp-content/uploads/2025/03/hadashinoie-54-1-2048x1365.jpg"
              alt=""
              placeholder="empty"
              loading="lazy"
              width={800}
              className=""
              height={1200}
            ></img>
          </div>
          <div className="text w-1/2 p-8 flex flex-col justify-center items-center">
            <h2 className="text-[#333]">宜安</h2>
            <p>構築心靈的沃土</p>
          </div>
        </div>
      </section>

      <div className="grid place-content-center bg-emerald-950 px-4 py-24 text-yellow-50">
        <h1 className="max-w-2xl text-white  font-normal text-center text-5xl leading-snug">
          選擇安心的建商
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
          with Simple AI Tools
        </h1>
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
