"use client";
import { useRef } from "react";
import SvgImg from "../../components/SVGImage";
import { ReactLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import HoverCard from "../../components/HoverCardBuild/index";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GsapText from "../../components/RevealText/index";

import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";
// import HeroSlider from "../../components/HeroSlider/page";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import ImageDistortion from "../../components/ImageDistortion/page";

gsap.registerPlugin(CustomEase);

const Photos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const backgroundImages = [
    "/images/JPOM9734.jpg",
    "/images/宜園誠境實景照片.jpg",
    "/images/烏日區五張犁西段474地號(誠境5)-完工實景照片10-1090219-S.jpg",
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(currentIndex); // 保留上一張索引
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);
  return (
    <ReactLenis root>
      <section className="section-hero-title w-full relative">
        {/* Hero Image */}
        <Image
          src="/images/project/pexels-pixabay-327482.jpg"
          alt="經典建築案例"
          width={1920}
          height={700}
          priority
          sizes="100vw"
          className="w-full mt-[50px] sm:mt-0 h-auto"
        />

        {/* 右下角文字 */}
        <div className="absolute bottom-[10%] right-[10%] text-white text-right z-10 px-4">
          <div className="flex ">
            <h1 className="text-4xl sm:text-5xl text-white tracking-wide">
              CLASSIC
            </h1>
            <p className=" text-xl mt-5 ml-2 sm:text-4xl text-white font-normal">
              貫徹更好的美好旅程
            </p>
          </div>
        </div>
      </section>
      <section className="section-project mt-[100px] px-4 md:px-8 xl:px-16 ">
        <div className="container max-w-[1920px]  mx-auto w-[85%]">
          <div className="title">
            <h2 className="m-3">宜園誠境｜</h2>
          </div>
          <div className="image-wrap flex flex-col md:flex-row justify-center items-center">
            <Image
              src="/images/project/宜園誠境實景照片03-1041020.jpg"
              alt="經典建築案例"
              width={1200}
              height={800}
              loading="lazy"
              sizes="100vw"
              className=" w-full md:w-1/2 mt-[20px] m-3  h-auto"
            />
            <Image
              src="/images/project/宜園誠境實景照片03-1041020.jpg"
              alt="經典建築案例"
              width={1200}
              height={800}
              loading="lazy"
              sizes="100vw"
              className=" w-full md:w-1/2 mt-[20px] m-3  h-auto"
            />
          </div>
          <div className="bottom-description flex justify-end">
            <div className="max-w-[500px] 2xl:max-w-[700px] py-[90px]">
              <p className="text-gray-400 font-normal text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                iure distinctio atque suscipit adipisci asperiores sequi
                repellat inventore maiores vero nesciunt consectetur minus
                facilis beatae, provident blanditiis odit facere? Minus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-project mt-[100px] bg-[#bdc3c6] pt-[90px] px-4 md:px-8 xl:px-16">
        <div className="container max-w-[1920px] mx-auto w-[85%]">
          <div className="title">
            <h2 className="m-3">宜園誠境2｜</h2>
          </div>
          <div className="image-wrap flex flex-col md:flex-row justify-center items-center">
            <Image
              src="/images/project/DSC_2058.jpg"
              alt="經典建築案例"
              width={1200}
              height={800}
              loading="lazy"
              sizes="100vw"
              className="w-full md:w-1/2 mt-[20px] m-3  h-auto"
            />
            <Image
              src="/images/project/DSC_1962.tif"
              alt="經典建築案例"
              width={1200}
              height={800}
              loading="lazy"
              sizes="100vw"
              className="w-full md:w-1/2 mt-[20px] m-3  h-auto"
            />
          </div>
          <div className="bottom-description flex justify-end">
            <div className="max-w-[500px] 2xl:max-w-[700px] py-[90px]">
              <p className="text-gray-50 font-normal text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                iure distinctio atque suscipit adipisci asperiores sequi
                repellat inventore maiores vero nesciunt consectetur minus
                facilis beatae, provident blanditiis odit facere? Minus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-project mt-[100px] px-4 md:px-8 xl:px-16">
        <div className="container max-w-[1920px] mx-auto w-[90%]">
          {/* 標題區塊 */}
          <div className="title mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              宜園誠境 5｜
            </h2>
          </div>

          {/* 圖片區塊 */}
          <div className="image-wrap flex flex-col md:flex-row gap-8 items-stretch">
            {/* 左圖 */}
            <div className="w-full md:w-1/2">
              <div className="h-full">
                <Image
                  src="/images/project/烏日區五張犁西段474地號(誠境5)-完工實景照片10-1090219-S.tif"
                  alt="經典建築案例"
                  width={1200}
                  height={800}
                  loading="lazy"
                  sizes="100vw"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>

            {/* 右側雙圖 */}
            <div className="w-full md:w-1/2 flex flex-col gap-6 justify-between">
              <Image
                src="/images/project/烏日區五張犁西段474地號(誠境5)-完工實景照片03-1090219.jpg"
                alt="經典建築案例"
                width={1200}
                height={800}
                loading="lazy"
                sizes="100vw"
                className="w-full h-auto "
              />
              <Image
                src="/images/project/烏日區五張犁西段474地號(誠境5)-完工實景照片08-1090219.jpg"
                alt="經典建築案例"
                width={1200}
                height={800}
                loading="lazy"
                sizes="100vw"
                className="w-full h-auto "
              />
            </div>
          </div>

          {/* 說明文字 */}
          <div className="bottom-description flex justify-end mt-12">
            <div className="max-w-full md:max-w-[500px] 2xl:max-w-[700px] px-4 md:px-0 py-10 md:py-[90px]">
              <p className="text-gray-500 font-normal text-right leading-relaxed text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                iure distinctio atque suscipit adipisci asperiores sequi
                repellat inventore maiores vero nesciunt consectetur minus
                facilis beatae, provident blanditiis odit facere? Minus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-project pt-[80px] mt-[100px] bg-[#bdc3c6] px-4 md:px-8 xl:px-16">
        <div className="container max-w-[1920px] mx-auto w-[90%]">
          {/* 標題區塊 */}
          <div className="title mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              宜園誠境 5｜
            </h2>
          </div>

          {/* 圖片區塊 */}
          <div className="image-wrap flex flex-col gap-8 items-stretch">
            {/* 左圖 */}
            <div className="w-full ">
              <div className="h-full">
                <Image
                  src="/images/project/JPOM9756.jpg"
                  alt="經典建築案例"
                  width={1200}
                  height={800}
                  loading="lazy"
                  sizes="100vw"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>

            {/* 右側雙圖 */}
            <div className="w-full  flex  flex-col md:flex-row  gap-6 justify-between">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/project/JPOM9752-2.jpg"
                  alt="經典建築案例"
                  width={1200}
                  height={800}
                  loading="lazy"
                  sizes="100vw"
                  className="w-full h-auto "
                />
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/project/JPOM9749-2.jpg"
                  alt="經典建築案例"
                  width={1200}
                  height={800}
                  loading="lazy"
                  sizes="100vw"
                  className="w-full h-auto "
                />
              </div>
            </div>
          </div>

          {/* 說明文字 */}
          <div className="bottom-description flex justify-end mt-12">
            <div className="max-w-full md:max-w-[500px] 2xl:max-w-[700px] px-4 md:px-0 py-10 md:py-[90px]">
              <p className="text-gray-50 font-normal text-right leading-relaxed text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                iure distinctio atque suscipit adipisci asperiores sequi
                repellat inventore maiores vero nesciunt consectetur minus
                facilis beatae, provident blanditiis odit facere? Minus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};

export default Photos;
