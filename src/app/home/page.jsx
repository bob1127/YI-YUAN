"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effec-home";
import StartAnimate from "../../components/HomeAnimate/page";
import HeroSlider from "../../components/HeroSliderHome/page";
import { Carousel, Card } from "../../components/ui/apple-cards-carousel";
import Link from "next/link";
import AnimatedLink from "../../components/AnimatedLink";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxImage from "../../components/ParallaxImage";
import { ReactLenis } from "@studio-freight/react-lenis";

import Marquee from "react-fast-marquee";
// import { Carousel } from "../../components/ui/carousel01";
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

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <ReactLenis root>
      {/* <section className="section_hero overflow-hidden mt-[40px]   lg:mt-[70px]">
        <StartAnimate />
      </section> */}
      <div className="bg-white">
        <section className="relative md:h-[768px] h-[500px] xl:h-[1024px] 2xl:h-screen w-full overflow-hidden">
          {/* 毛玻璃遮罩層 */}
          <div className="absolute inset-0 z-10 backdrop-blur-sm bg-white/30" />

          {/* 文字區塊 */}
          <div className="txt absolute z-20 left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
            <p className="text-[3rem] text-[#8c3a35]"> ABOUT US</p>
          </div>

          {/* 背景圖片 */}
          <Image
            src="/images/pexels-jeff-nissen-920690.jpg"
            fill
            placeholder="empty"
            loading="eager"
            alt="hero-image"
            className="object-cover"
          />
        </section>

        {/* <div className="flex max-w-[1920px] lg:flex-row mb-5 mt-20 sm:mt-[20vh] flex-col  mx-auto">
        <div className="img w-[98%] md:w-[550px] lg:w-[50%] mx-auto h-auto md:h-[830px] overflow-hidden">
          <div className="animate-image-wrapper relative w-full aspect-[4/5] md:h-full overflow-hidden ">
        
            <div className="image-container relative w-full h-full">
              <AnimatedLink href="/hot-sale">
                <Image
                  src="/images/JPOM9756.jpg"
                  alt="About Image 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                />
              </AnimatedLink>
            </div>
          </div>
        </div>
        <div className="text w-[95%]  lg:w-1/2 p-8 flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-start items-start ">
            <h2 className="mb-0 font-normal">宜融</h2>
            <p className="text-[1.1rem] font-normal tracking-widest	">
              模型房屋參觀接受中
            </p>
            <span className="text-[.9rem] font-normal mt-10 tracking-widest	">
              也許是只有製作者自己才會注意到的、<br></br>{" "}
              極其講究的設計正在被傳達。
            </span>
            <AnimatedLink href="/hot-sale">
              <div className="group flex justify-center items-center mt-10 text-[1.2rem] font-normal">
                PRPJECT
                <button class="group relative ml-3  inline-flex h-8 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium">
                  <div class="inline-flex h-12 translate-x-0 items-center justify-center bg-white px-6 text-neutral-950 transition group-hover:-translate-x-[150%]">
                    →
                  </div>
                  <div class="absolute inline-flex h-12 w-full translate-x-[100%] items-center justify-center bg-[#8A9A5B] px-6 text-neutral-50 transition duration-300 group-hover:translate-x-0">
                    →
                  </div>
                </button>
              </div>
            </AnimatedLink>
          </div>text w-[95%]   lg:w-[40%] p-10 2xl:p-20 flex flex-col  
        </div>
      </div> */}
        <section className="section_features w-full   mx-auto  mt-[100px]">
          <div className="flex lg:flex-row max-w-[1920px] flex-col-reverse mb-5 mt-20 sm:mt-[20vh] w-full mx-auto">
            <div className="img w-full  md:w-[85%] lg:w-[60%] mx-auto h-auto max-h-[500px] overflow-hidden">
              <div className="animate-image-wrapper relative w-full aspect-[4/5] max-h-[500px] h-full overflow-hidden">
                <div className="image-container relative w-full h-full max-h-[500px]">
                  <AnimatedLink href="/hot-sale">
                    <Image
                      src="/images/JPOM9756.jpg"
                      alt="About Image 2"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                    />
                  </AnimatedLink>
                </div>
              </div>
            </div>

            <div className="text w-[85%] mb-5 lg:mb-0 mx-auto lg:w-[40%]  flex flex-col  justify-center items-center">
              <div className="flex flex-col  px-0 lg:px-20 justify-start items-start ">
                <div className="title  mx-auto flex flex-col justify-start items-start">
                  <TextGenerateEffect words="T - TRUST" />
                  <h2>信任 ｜ 宜安心</h2>
                  <p className="leading-loose tracking-widest w-full ">
                    房子，值得依靠；好關係，值得託付。
                    當市場競逐利益，宜園回歸最本質的「家」，最關鍵的「住」。
                    以職人專業為基，堅守實在本質，落實大小細節，築起家的價值。
                    <br></br>
                    <br></br>
                    宜園，以「實在的構築」，默默守護，讓您踏實生活，放心每一天。
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          <section className="lg:py-[50px] max-w-[1920px]  mx-auto">
            <div className="flex lg:flex-row justify-center items-center flex-col w-full sm:w-[95%] mx-auto ">
              <div className="img  flex justify-center items-center p-10 w-[95%]   lg:w-[50%] mx-auto sm:mx-3  h-auto lg:h-[60vh] xl:h-[60vh] overflow-hidden">
                <div className="title mx-auto flex flex-col justify-start items-start">
                  <TextGenerateEffect words="R - RELATION" />
                  <h2>關係 ｜ 宜真情</h2>
                  <p className="leading-loose tracking-widest w-full md:w-2/3 ">
                    建築，是連結土地的根，也是凝聚人心的橋。
                    於家人，傳遞溫度與關懷；於鄰里，凝聚和睦與理解；
                    於土地，報以尊重與謙遜；於城市，追求共<br></br>
                    <br></br>
                    宜園，以實在的構築，讓人與人、與土地、與城市之間，美好關係加以延續。
                  </p>
                </div>
              </div>

              {/* 第一張圖片 */}
              <div className="img mt-4 md:mt-0 w-[85%] lg:w-[50%] sm:mx-3 h-auto md:h-[70vh] lg:h-[73vh] xl:h-[83vh] overflow-hidden flex flex-col justify-center items-center">
                <div className="animate-image-wrapper group relative w-full aspect-[4/5]">
                  <div className="image-container relative w-full h-full">
                    <Image
                      src="/images/烏日區五張犁西段474地號(誠境5)-完工實景照片10-1090219-S.jpg"
                      alt="About Image 1"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* 第二張圖片 */}
              <div className="img w-[85%] lg:w-[50%] sm:mx-3 h-auto md:h-[70vh] lg:h-[73vh] xl:h-[83vh] mt-5 lg:mt-0 overflow-hidden flex flex-col justify-center items-center">
                <div className="animate-image-wrapper group relative w-full aspect-[4/5]">
                  <div className="image-container relative w-full h-full">
                    <Image
                      src="/images/宜園誠境實景照片.jpg"
                      alt="About Image 2"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 40vw"
                    />
                  </div>
                </div>
              </div>

              {/* <div className="text w-[95%] lg:w-1/2 p-8 flex flex-col justify-center items-center">
            <TextGenerateEffect words="宜居" />
            <p>不與人同的作為</p>
          </div> */}
            </div>
          </section>
          <section className=" py-[30px] mt-10 lg:mt-0 lg:py-[50px] bg-[#6D7B80] sm:py-[70px]">
            <div className="flex  max-w-[1920px]  lg:flex-row flex-col-reverse mb-5 mt-20 lg:mt-[10vh] w-[98%] mx-auto">
              <div className="img w-[98%] md:w-[85%] lg:w-[50%] mx-auto h-auto overflow-hidden">
                <div className="animate-image-wrapper relative w-full lg:w-[90%] mx-auto pl-0 lg:pl-20 aspect-[3/2.6] overflow-hidden">
                  <div className="image-container relative w-full h-full">
                    <AnimatedLink href="/hot-sale">
                      <Image
                        src="/images/JPOM9734.jpg"
                        alt="About Image 2"
                        fill
                        className="object-cover scale-[1.3] object-[20%_60%] transition-transform duration-500"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                    </AnimatedLink>
                  </div>
                </div>
              </div>

              <div className="text mb-5 lg:mb-0 w-[85%]  mx-auto lg:w-[40%]  flex flex-col ">
                <div className="flex flex-col justify-center items-center h-full">
                  <div className="title mx-auto flex flex-col justify-start items-start">
                    <TextGenerateEffect words="U - UNIQUE" />
                    <h2>獨特 ｜ 宜居所</h2>
                    <p className="leading-loose tracking-widest w-full sm:w-2/3">
                      每個人，都是獨一無二的個體。
                      好的房子，懂得尊重每一種獨特。
                      以好規劃，讓私領域的靜謐、公領域的交流，恰如其分。
                      以好設計，迎風納景，擋聲遮擾，恰到好處。<br></br>
                      <br></br>
                      宜園，以實在的構築，成就居住者理想居所，守護與眾不同的生活想像
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-w-[1920px]  lg:flex-row flex-col mb-5 mt-20 lg:mt-[10vh] w-full mx-auto">
              <div className="text mb-5 lg:mb-0 w-[85%]  mx-auto lg:w-[40%]  flex flex-col ">
                <div className="flex flex-col justify-center h-full items-center ">
                  <div className="title  mx-auto flex flex-col justify-start items-start pl-0 lg:pl-20">
                    <TextGenerateEffect words="E - ETERNAL" />
                    <h2 className="text-left">永恆 ｜ 宜融入</h2>
                    <p className="leading-loose tracking-widest w-full sm:w-2/3">
                      好房子懂得跟土地相處，找出最舒適的生活方式。
                      宜園傾聽土地的聲音，細說生命的故事，
                      讓建築扎根於大地，成就心的歸宿。
                      <br />
                      <br />
                      宜園，以實在的構築，融入環境，與自然共生共長；
                      順應時間，讓家越住越美，恆久宜居。
                    </p>
                  </div>
                </div>
              </div>

              <div className="img w-full md:w-[85%] lg:w-[70%] mx-auto h-auto max-h-[500px] sm:max-h-[580px]  overflow-hidden">
                <div className="animate-image-wrapper relative w-full aspect-[4/5] max-h-[500px] sm:max-h-[580px]  h-full overflow-hidden">
                  <div
                    className="image-container relative w-full h-full max-h-[500px] sm:max-h-[580px]  bg-top bg-cover"
                    style={{
                      backgroundImage: `url('/images/烏日區五張犁西段474地號(誠境5)-完工實景照片03-1090219.JPG')`,
                      backgroundPosition: "top right",
                      backgroundSize: "130% auto", // ← 關鍵：特寫上半部
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <AnimatedLink
                      href="/hot-sale"
                      className="absolute inset-0 block z-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* <section className="section_project flex-col my-20 sm:my-[20vh]">
        <div className="title  mb-6 flex justify-center flex-col items-center mx-auto w-[85%] sm:w-full">
          <TextGenerateEffect
            words="我們用心塑造我們的家。

"
          />
          <p className="text-[.9rem] mt-2 text-center">
            我們用心塑造我們的家、家具、<br></br>服飾和其他一切。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  w-full ">
          <AnimatedLink href="/project">
            <div className="relative w-full h-[480px] bg-[url('https://hadashinoie.co.jp/assets/images/index/service03.jpg')] bg-center bg-no-repeat bg-cover group  overflow-hidden">
     
              <div className="absolute inset-0 bg-white/1 backdrop-blur-[10px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80"></div>

         
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
          </AnimatedLink>
          <AnimatedLink href="/project">
            <div className="relative w-full h-[480px] bg-[url('https://hadashinoie.co.jp/app/wp-content/uploads/2025/03/hadashinoie004-2048x1365.jpg')] bg-center bg-no-repeat bg-cover group  overflow-hidden">
            
              <div className="absolute inset-0 bg-white/1 backdrop-blur-[10px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80"></div>

    
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
          </AnimatedLink>
          <AnimatedLink href="/project">
            <div className="relative w-full h-[480px] bg-[url('https://hadashinoie.co.jp/app/wp-content/uploads/2025/02/hadashinoie116-2048x1365.jpg')] bg-center bg-no-repeat bg-cover group  overflow-hidden">
            
              <div className="absolute inset-0 bg-white/1 backdrop-blur-[10px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80"></div>

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
          </AnimatedLink>
          <AnimatedLink href="/project">
            <div className="relative w-full h-[480px] bg-[url('https://hadashinoie.co.jp/app/wp-content/uploads/2025/03/hadashinoie-54-1-2048x1365.jpg')] bg-center bg-no-repeat bg-cover group  overflow-hidden">
    
              <div className="absolute inset-0 bg-white/1 backdrop-blur-[10px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80"></div>

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
          </AnimatedLink>
          <AnimatedLink href="/project">
            <div className="relative w-full h-[480px] bg-[url('https://hadashinoie.co.jp/app/wp-content/uploads/2025/03/hadashinoie040-1-1-2048x1366.jpg')] bg-center bg-no-repeat bg-cover group overflow-hidden">
            
              <div className="absolute inset-0 bg-white/1 backdrop-blur-[10px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80"></div>

         
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
          </AnimatedLink>
        </div>
      </section> */}
        {/* <div className="w-full h-full py-20">
        <Carousel items={cards} />
      </div> */}
      </div>
    </ReactLenis>
  );
}
const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <AnimatedLink href="/about">
        <h1>About</h1>
      </AnimatedLink>
      <AnimatedLink href="/community">Community</AnimatedLink>
      <AnimatedLink href="/pricing">Pricing</AnimatedLink>
      <AnimatedLink href="/company">Company</AnimatedLink>
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

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14  mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-medium font-sans max-w-3xl mx-auto">
              <span className="font-bold text-[20px] text-neutral-700 dark:text-neutral-200">
                臨近繁華，與自然共生
              </span>{" "}
              周邊環境方面，宜園建設為您精心選擇了理想的生活圈。社區周邊生活機能豐富，無論是超市、學校還是醫療機構，應有盡有。交通便捷，讓您無論是通勤還是外出，都能輕鬆迅速。
            </p>
            <Image
              src="https://hadashinoie.co.jp/app/wp-content/uploads/2024/05/2B3A0382-2048x1365.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "PROJECT",
    title: "誠鏡二期",
    src: "https://hadashinoie.co.jp/app/wp-content/uploads/2025/01/PXL_20250124_000513315-1-2048x1152.jpg",
    content: <DummyContent />,
  },
  {
    category: "PROJECT",
    title: "宜園大院",
    src: "https://hadashinoie.co.jp/app/wp-content/uploads/2024/06/01_0140-2048x1365.jpg",
    content: <DummyContent />,
  },
  {
    category: "PROJECT",
    title: "一青隱",
    src: "https://hadashinoie.co.jp/app/wp-content/uploads/2025/03/hadashinoie004-2048x1365.jpg",
    content: <DummyContent />,
  },

  {
    category: "PROJECT",
    title: "誠鏡五期",
    src: "https://hadashinoie.co.jp/app/wp-content/uploads/2024/11/hadashinoie016-2048x1365.jpg",
    content: <DummyContent />,
  },
  {
    category: "PROJECT",
    title: "誠鏡二期",
    src: "https://hadashinoie.co.jp/app/wp-content/uploads/2025/01/PXL_20250124_000513315-1-2048x1152.jpg",
    content: <DummyContent />,
  },
  {
    category: "PROJECT",
    title: "宜園大院",
    src: "https://hadashinoie.co.jp/app/wp-content/uploads/2024/06/01_0140-2048x1365.jpg",
    content: <DummyContent />,
  },
];
