"use client";
// import { TransitionLink } from "../../components/utils/TransitionLink";
// import EmblaCarousel from "../../components/EmblaCarousel07/EmblaCarousel";
import AnimatedLink from "../../components/AnimatedLink";
import { Form, Input, Button } from "@heroui/react";
import HeroSlider from "../../components/HeroSlider/page";

import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import GsapText from "../../components/RevealText/index";
import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import InfiniteScroll from "../../components/InfiniteScroll/page";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
export default function About() {
  const data01 = [
    {
      title: "2024 年 3 月｜最新工程進度",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            第一階段：地下室工程完成（基礎結構已完工，進入地上層施作）
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/inasato71.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/RIMG6747.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 年 3 月｜最新工程進度",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            第一階段：地下室工程完成（基礎結構已完工，進入地上層施作）
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/inasato71.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/RIMG6747.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 年 3 月｜最新工程進度",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            第一階段：地下室工程完成（基礎結構已完工dd，進入地上層施作）
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/inasato71.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/RIMG6747.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const backgroundImages = [
    "https://i0.wp.com/draft.co.jp/wp-content/uploads/2023/11/7_mikan-shimokita_01.jpg?fit=2880%2C1920&quality=85&strip=all&ssl=1",
    "https://i0.wp.com/draft.co.jp/wp-content/uploads/2023/11/7_mikan-shimokita_02.jpg?fit=2880%2C1920&quality=85&strip=all&ssl=1",
    "https://i0.wp.com/draft.co.jp/wp-content/uploads/2023/11/7_mikan-shimokita_04.jpg?fit=2880%2C1920&quality=85&strip=all&ssl=1",
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(currentIndex); // 保留上一張索引
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "業務人員",
      qrCodeImage:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
      image:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
    },
    {
      id: 2,
      name: "John Doe",
      designation: "買屋看房",
      qrCodeImage:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
      image:
        "https://blogimg.goo.ne.jp/user_image/1c/fe/9641ac44fee5bb8525f467bac86d0fb9.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      designation: "詢問價格",
      qrCodeImage:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
      image:
        "https://thumb.ac-illust.com/56/56a7c15a78437570e11a8252b729f35f_t.jpeg",
    },
  ];
  const initGSAPAnimations = () => {
    const ctx = gsap.context(() => {
      const images = document.querySelectorAll(".animate-image-wrapper");

      images.forEach((image, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none none",
            id: "imageReveal-" + i,
          },
        });

        tl.fromTo(
          image.querySelector(".overlay"),
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.7,
            ease: "power2.inOut",
          }
        )
          .to(image.querySelector(".overlay"), {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            duration: 0.7,
            ease: "power2.inOut",
          })
          .fromTo(
            image.querySelector(".image-container"),
            {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            },
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1.5,
              ease: "power3.inOut",
            },
            "-=0.5"
          );
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return ctx; // return so we can revert later
  };

  const OPTIONS = {};

  // 這裡定義你的背景圖片
  const SLIDES = [
    "/images/ph_esperanza.jpg",
    "/images/ph_takahiradai-no-ie.jpg",
    "/images/ph_esperanza.jpg",
    "/images/ph_minna-no-ie.jpg",
    "/images/ph_kumamoto-tasaki-clinic.jpg",
    "/images/hadashinoie016-2048x1365.jpg.webp",
  ];
  const THUMBNAILS = [
    "/images/ph_esperanza.jpg",
    "/images/ph_takahiradai-no-ie.jpg",
    "/images/ph_esperanza.jpg",
    "/images/ph_minna-no-ie.jpg",
    "/images/ph_kumamoto-tasaki-clinic.jpg",
    "/images/hadashinoie016-2048x1365.jpg.webp",
  ];
  const [showNav, setShowNav] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          setShowNav(false); // 向下滾 → 隱藏
        } else {
          setShowNav(true); // 向上滾 → 顯示
        }

        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <ReactLenis root className="">
      {/* <InfiniteScroll /> */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showNav ? 0 : 100 }} // 向下移出
        transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
        className="fixed bottom-10 left-[35%] z-50 w-[410px] h-[64px] bg-[rgba(0,0,0,0.2)] shadow-[0_0_16px_4px_#00000008] rounded-lg backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]"
      >
        <div className="flex px-6 justify-start items-center h-full mx-auto">
          <div className="w-[30%]">
            <b className="text-white text-[1.2rem] font-bold">YI YUAN</b>
          </div>
          <div className="w-[45%]">
            <span className="text-gray-500 text-[.9rem]">Project - </span>
            <span className="text-[1rem] tracking-widest text-white">
              宜園大院
            </span>
          </div>
          <div className="w-[25%]">
            <span className="text-[.8rem] text-white">2025.05.23</span>
          </div>
        </div>
      </motion.div>
      <section className="section-hero w-full min-h-[100vh] relative">
        {/* 背景圖片群組 */}
        {backgroundImages.map((bg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: i === currentIndex ? 1 : 0,
              scale: i === currentIndex ? 1.15 : 1, // 放大範圍加大
            }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" }, // 切換用淡入淡出
              scale: { duration: 20, ease: "linear" }, // 放大效果持續 20 秒
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url(${bg})`,
            }}
          />
        ))}

        {/* 黑色遮罩 */}
        <div className="bg-black opacity-40 w-full h-full absolute top-0 left-0 z-10" />

        {/* 文字區塊 */}
        <div className="hero-title  w-1/2 absolute left-[4%] top-[90%] z-20">
          <div className="text-center px-4">
            <GsapText
              text="宜園大院."
              id="gsap-intro"
              fontSize="4rem"
              fontWeight="200"
              color="#fff"
              lineHeight="60px"
              className="text-center tracking-widest !text-white tracking-widest inline-block mb-0 h-auto"
            />
          </div>
          <div className="text-center px-4">
            <GsapText
              text="Yi Yuan"
              id="gsap-intro"
              fontSize="1.5rem"
              fontWeight="200"
              color="#fff"
              lineHeight="30px"
              className="text-center !text-white tracking-widest inline-block mb-0 h-auto"
            />
          </div>
        </div>
      </section>
      <section className="flex lg:flex-row flex-col max-w-[1920px] mx-auto w-[95%]  mt-20">
        <div className=" w-full lg:w-1/2">
          <HeroSlider />
        </div>
        <div className=" w-full lg:w-1/2  pt-10">
          <div className="flex flex-col sticky top-4   items-center justify-center">
            <div className=" ">
              <b className="text-[1.2rem] tracking-widest ">OUR PROJECTS</b>
              <Image
                src="https://framerusercontent.com/images/BUDA0wz5WRVOSHMhAubzp9XbdM.jpg"
                placeholder="empty"
                loading="lazy"
                alt=""
                width="800"
                height="1000"
                className="w-full"
              ></Image>
              <div className="txt flex pt-2 flex-row">
                <div className="w-1/3">
                  <span className="text-[#333] text-[.9rem]">宜園建設</span>
                </div>
                <div className="w-1/3 flex items-end flex-col">
                  <b className="text-[#333] text-[.9rem]">實在的構築</b>
                  <span className="text-[#333] text-[.9rem]">建坪：200</span>
                </div>
                <div className="w-1/3 flex items-end flex-col">
                  <b className="text-[#333] text-[.9rem]">建築工法</b>
                  <span className="text-[#333] text-[.9rem]">建坪：200</span>
                  <span className="text-[#333] text-[.9rem]">建坪：200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[100px]">
        <div className="flex max-w-[1920px] mx-auto p-20 w-[95%] flex-col">
          <div className="title  sm:w-2/3 w-full lg:w-1/2">
            <div className="text-left px-4">
              <GsapText
                text="[設施摘要]"
                id="gsap-intro"
                fontSize="1.8rem"
                fontWeight="200"
                color="#000"
                lineHeight="60px"
                className="text-center  tracking-widest inline-block mb-0 h-auto"
              />
            </div>

            <p className="text-[.9rem] leading-loose tracking-widest">
              每天可供一組人（最多5人）使用。可用 8
              小時。桑拿房配有芬蘭爐（HARVIA）。享受您自己的百葉窗。男士和女士均可租用桑拿服。
              預約於2025年3月7日開始。除預約、採訪等以外的諮詢，請透過此處聯絡我們info[at]motherhaus-sauna.com請聯絡我們
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="m-8 w-full lg:w-1/2">
              <Image
                src="https://motherhaus-sauna.com/sys/wp-content/themes/motherbase/assets/img/top/madori.webp"
                alt=""
                placeholder="empty"
                loading="lazy"
                width={800}
                height={800}
                className="w-full"
              ></Image>
            </div>
            <div className="m-8 w-full  lg:w-1/2">
              <Image
                src="https://motherhaus-sauna.com/sys/wp-content/themes/motherbase/assets/img/top/madori.webp"
                alt=""
                placeholder="empty"
                loading="lazy"
                width={800}
                height={800}
                className="w-full"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pt-20 bg-custom-gradient section-content">
        <section className="mx-auto  max-w-[1920px]">
          <div className="flex w-[80%] flex-col md:flex-row h-full justify-center items-center mx-auto">
            <div className=" w-full md:w-1/2 p-5  border">
              <GsapText
                text="持續進化的設計"
                id="gsap-intro"
                fontSize="1.3rem"
                fontWeight="200"
                color="#fff"
                lineHeight="60px"
                className="text-left  tracking-widest inline-block mb-0 h-auto"
              />

              <p className="text-[.85rem]   tracking-widest leading-loose text-gray-100 ">
                從入口連接高架下的通道採用了工業風吊燈。結合異國情調的商店排列和霓虹招牌，營造出混沌又富有活力的氛圍。
              </p>
            </div>
            <div className=" w-full md:w-1/2 flex justify-center items-center">
              <div className="max-w-[580px] ">
                <Image
                  src="https://i0.wp.com/draft.co.jp/wp-content/uploads/2023/11/7_mikan-shimokita_09.jpg?fit=800%2C864&quality=85&strip=all&ssl=1"
                  placeholder="empty"
                  loading="lazy"
                  alt=""
                  width={1500}
                  height={800}
                  className="w-full"
                ></Image>
              </div>
            </div>
          </div>
        </section>

        <section className="section-footer p-3 lg:p-10 2xl:p-20">
          <div className="mx-auto w-[80%] 2xl:w-[70%] py-20">
            <div className="top flex justify-between flex-row">
              <h3 className="text-white text-[1.8rem] font-bold">
                YI YUAN BUILDING
              </h3>
              <button class="group relative inline-flex text-[1rem] 2xl:text-[1.2rem] h-12 items-center justify-center  border-b-1 border-white px-6 font-medium text-neutral-100">
                <span>Hover me</span>
                <div class="relative ml-1 h-5 w-5 overflow-hidden">
                  <div class="absolute transition-all duration-200 sm:group-hover:-translate-y-5 sm:group-hover:translate-x-4">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 -translate-x-4"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
            <div className="middle flex  flex-row">
              <div className="w-[40%]">
                <div className="grid grid-cols-2">
                  <div className="flex py-8 flex-col">
                    <div className="flex flex-col">
                      <b className="text-gray-400 text-[.8rem]">新案件賞</b>
                      <span className="text-[.8rem] text-white mt-1">
                        一青隱
                      </span>
                      <span className="text-[.8rem] text-white mt-1">
                        宜園大院
                      </span>
                    </div>
                    <div className="flex mt-8 flex-col">
                      <b className="text-gray-400 text-[.8rem]">NEWS</b>
                      <span className="text-[.8rem] text-white mt-1">
                        宜園大院開工典禮
                      </span>
                      <span className="text-[.8rem] text-white mt-1">
                        宜園大院
                      </span>
                    </div>
                  </div>
                  <div className="flex pl-8 py-8 flex-col">
                    <div className="flex flex-col">
                      <b className="text-gray-400 text-[.8rem]">新案件賞</b>
                      <span className="text-[.8rem] text-white mt-1">
                        一青隱
                      </span>
                      <span className="text-[.8rem] text-white mt-1">
                        宜園大院
                      </span>
                    </div>
                    <div className="flex mt-8 flex-col">
                      <b className="text-gray-400 text-[.8rem]">NEWS</b>
                      <span className="text-[.8rem] text-white mt-1">
                        宜園大院開工典禮
                      </span>
                      <span className="text-[.8rem] text-white mt-1">
                        宜園大院
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[60%] pb-5 flex justify-end">
                <div className=" flex flex-col items-end justify-end">
                  <div className="flex flex-row items-center">
                    <span className="text-[.8rem] mr-2 mt-1 text-gray-400">
                      Public 2024 Building By
                    </span>
                    <span className="text-[.8rem]  text-white mt-1">
                      宜園大院開工典禮
                    </span>
                  </div>
                  <div className="flex flex-row items-center mt-1">
                    <span className="text-[.8rem] mr-2 mt-1 text-gray-400">
                      Public 2024 Building By
                    </span>
                    <span className="text-[.8rem]  text-white mt-1">
                      宜園大院開工典禮
                    </span>
                  </div>
                  <div className="flex flex-row items-center mt-1">
                    <span className="text-[.8rem] mr-2 mt-1 text-gray-400">
                      Public 2024 Building By
                    </span>
                    <span className="text-[.8rem] hover:border-b-1 border-white duration-500  text-white mt-1">
                      宜園大院開工典禮
                    </span>
                  </div>
                  <div className="flex flex-row items-center mt-1">
                    <span className="text-[.8rem] mr-2 mt-1 text-gray-400">
                      Website Sesign
                    </span>
                    <span className="text-[.8rem]  text-white mt-1">
                      極客網頁設計
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom mt-[15vh] pb-10 border-b-1 border-[#6f6f6f]">
              <div className="flex flex-row items-center mt-1">
                <span className="text-[.8rem] mr-2 mt-1 text-gray-400">
                  Website Sesign
                </span>
                <span className="text-[.95rem]  text-white mt-1">
                  極客網頁設計
                </span>
              </div>
            </div>
            <section className=" w-full mt-4">
              <span className="text-white text-[1.4rem] mb-2">NEWS</span>
              <div className="flex  mx-auto   lg:w-full  w-full flex-wrap flex-row">
                <div className=" w-[90%] mx-auto md:w-[240px] 2xl:w-[340px]  group mx-1">
                  <div className="img   mx-auto  sm:group-hover:h-[40vh] delay-75 duration-500  h-auto md:h-[33vh]  overflow-hidden">
                    <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                      <div className="image-container relative w-full h-full">
                        <Image
                          src="https://i0.wp.com/draft.co.jp/wp-content/uploads/2025/02/AD-Awards_2024_list.jpg?fit=1280%2C1280&quality=85&strip=all&ssl=1"
                          alt="About Image 1"
                          fill
                          className="object-cover sm:group-hover:scale-[1.05] duration-700"
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                        />
                        xs
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 py-4">
                    <div className="inline-block pb-4">
                      <button
                        role="link"
                        class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                      >
                        <button
                          role="link"
                          class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                        >
                          <b className="text-[.9rem] font-bold text-white">
                            {" "}
                            「A&D Awards 2024」受賞
                          </b>
                        </button>
                      </button>
                    </div>
                    <span className="text-[.75rem] text-gray-100">
                      太陽印刷製造 InnoValley
                      在最佳工作場所類別中獲得了最高獎項。
                    </span>
                    <span className="text-[.75rem] text-gray-100">
                      Taichung - 2025.03.23
                    </span>
                  </div>
                </div>

                <div className=" w-[90%] mx-auto md:w-[240px] 2xl:w-[340px]  group mx-1">
                  <div className="img   mx-auto    h-auto md:h-[36vh] sm:group-hover:h-[44vh] delay-75 duration-500 overflow-hidden">
                    <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                      <div className="image-container relative w-full h-full">
                        <Image
                          src="https://i0.wp.com/draft.co.jp/wp-content/uploads/2025/01/08cda1286e0f3c4616fbf38cf569aa71.jpg?fit=1920%2C1152&quality=85&strip=all&ssl=1"
                          alt="About Image 1"
                          fill
                          className="object-cover sm:group-hover:scale-[1.05] duration-700"
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                        />
                        xs
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 py-4">
                    <div className="inline-block pb-4">
                      <button
                        role="link"
                        class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                      >
                        <button
                          role="link"
                          class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                        >
                          <b className="text-[.9rem] font-bold text-white">
                            {" "}
                            「A&D Awards 2024」受賞
                          </b>
                        </button>
                      </button>
                    </div>
                    <span className="text-[.75rem] text-gray-100">
                      太陽印刷製造 InnoValley
                      在最佳工作場所類別中獲得了最高獎項。
                    </span>
                    <span className="text-[.75rem] text-gray-100">
                      Taichung - 2025.03.23
                    </span>
                  </div>
                </div>
                <div className=" w-[90%] mx-auto md:w-[240px] 2xl:w-[340px]  group mx-1">
                  <div className="img   mx-auto    h-auto md:h-[26vh] sm:group-hover:h-[33vh] delay-75 duration-500 overflow-hidden">
                    <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                      <div className="image-container relative w-full h-full">
                        <Image
                          src="https://i0.wp.com/draft.co.jp/wp-content/uploads/2024/10/2024_tjda-site_open_top_s.jpg?fit=1920%2C1046&quality=85&strip=all&ssl=1"
                          alt="About Image 1"
                          fill
                          className="object-cover sm:group-hover:scale-[1.05] duration-700"
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                        />
                        xs
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 py-4">
                    <div className="inline-block pb-4">
                      <button
                        role="link"
                        class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                      >
                        <button
                          role="link"
                          class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                        >
                          <b className="text-[.9rem] font-bold text-white">
                            {" "}
                            「A&D Awards 2024」受賞
                          </b>
                        </button>
                      </button>
                    </div>
                    <span className="text-[.75rem] text-gray-100">
                      太陽印刷製造 InnoValley
                      在最佳工作場所類別中獲得了最高獎項。
                    </span>
                    <span className="text-[.75rem] text-gray-100">
                      Taichung - 2025.03.23
                    </span>
                  </div>
                </div>
                <div className=" w-[90%] mx-auto md:w-[240px] 2xl:w-[340px]  group mx-1">
                  <div className="img   mx-auto    h-auto md:h-[30vh] sm:group-hover:h-[35vh] delay-75 duration-500 overflow-hidden">
                    <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                      <div className="image-container relative w-full h-full">
                        <Image
                          src="https://i0.wp.com/draft.co.jp/wp-content/uploads/2024/11/ELLE-DECOR_2412_PCichiran.jpg?fit=1920%2C1280&quality=85&strip=all&ssl=1"
                          alt="About Image 1"
                          fill
                          className="object-cover sm:group-hover:scale-[1.05] duration-700"
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                        />
                        xs
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-3 py-4">
                    <div className="inline-block pb-4">
                      <button
                        role="link"
                        class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                      >
                        <button
                          role="link"
                          class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                        >
                          <b className="text-[.9rem] font-bold text-white">
                            {" "}
                            「A&D Awards 2024」受賞
                          </b>
                        </button>
                      </button>
                    </div>
                    <span className="text-[.75rem] text-gray-100">
                      太陽印刷製造 InnoValley
                      在最佳工作場所類別中獲得了最高獎項。
                    </span>
                    <span className="text-[.75rem] text-gray-100">
                      Taichung - 2025.03.23
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="relative ">
          <div className="bg-white mx-auto   max-w-[1400px] pt-10 w-[90%] lg:w-[78%] flex md:flex-row flex-col justify-center items-center">
            <div className="title w-full md:w-1/2 px-4 md:px-[9%] xl:px-[15%] h-full flex flex-col justify-between">
              <GsapText
                text="Project - 一青隱"
                id="gsap-intro"
                fontSize="1.3rem"
                fontWeight="200"
                color="#000"
                lineHeight="60px"
                className="text-left  tracking-widest inline-block mb-0 h-auto"
              />
              <div>
                <b className="text-[1/3rem] font-normal">實在的構築</b>
              </div>
            </div>
            <div className=" w-full md:w-1/2 p-4 flex  justify-center items-center">
              <Image
                src="https://i0.wp.com/draft.co.jp/wp-content/uploads/2023/11/7_mikan-shimokita_10.jpg?fit=2880%2C1920&quality=85&strip=all&ssl=1"
                alt=""
                placeholder="empty"
                loading="lazy"
                width={800}
                height={800}
                className="w-full"
              ></Image>
            </div>
          </div>
        </section>
      </section>
      <section>
        <Timeline data={data01} />
      </section>
      <div className="flex lg:flex-row px-0 2xl:px-[200px] flex-col pt-[100px] bg-white ">
        {/* <div className=" w-full  flex-col justify-center items-center flex ">
          <EmblaCarousel
            slides={SLIDES}
            thumbnails={THUMBNAILS}
            options={OPTIONS}
          />
          <div className="title py-[40px] md:py-[50px] px-[30px] sm:px-[40px] lg:px-[80px]">
            <h1 className="!text-[2rem]">宜園建設【一青隱】</h1>
          </div>
          <div className="content flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto px-[30px] sm:px-[40px] lg:px-[80px]">
            <p className="leading-relaxed">
              不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
              致邀，職住共生的青創企業家 成家滿意，創業更旺，2-3房共居新浪潮
              <br></br> <br></br>
              宜園建設【一青隱】 神隱青海│2-3房│含精裝修
              接待會館：漢口路一段69號（漢口國中正對面） 預約專線：04-2314-9066
            </p>
          </div>
          <div className="img p-[80px]">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/0779/4674/9246/files/240705Karimoku_LAVOT28889.jpg?v=1724405193"
              alt=""
              className="w-full"
            />
          </div>
          <div className="title py-[40px] md:py-[50px] px-[30px] sm:px-[40px] lg:px-[80px]">
            <TextGenerateEffect words="向自然習作，美好新始，健康新序" />
            <h1 className="!text-[2rem]"></h1>
          </div>
          <div className="content flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto px-[30px] sm:px-[40px] lg:px-[80px]">
            <p className="leading-relaxed">
              不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
              致邀，職住共生的青創企業家 成家滿意，創業更旺，2-3房共居新浪潮
              <br></br> <br></br>
              宜園建設【一青隱】 神隱青海│2-3房│含精裝修
              接待會館：漢口路一段69號（漢口國中正對面） 預約專線：04-2314-9066
            </p>
          </div>
          <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
            <h2 className="mb-10 sm:mb-20 text-[2.5rem] text-center  dark:text-white text-black">
              立即詢價 專人為您服務
            </h2>
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </div> */}
      </div>
      <section className="section-contact">
        <div className="flex flex-col lg:flex-row bg-[#222] mx-auto w-[90%] p-5 sm:p-10  lg:p-20 px-auto rounded-md">
          <div className=" w-full lg:w-1/2 ">
            <span className="contact-tag px-3 text-[1.4rem] tracking-widest bg-gray-700  rounded-full text-white">
              Contact
            </span>
            <div className="py-5">
              <p className="text-[2.2rem] text-light text-white">
                跟我們聯繫！
              </p>
            </div>
            <span className="text-[1rem] text-light leading-loose text-white">
              了解更多社區規劃、戶型格局，還是實際感受一下生活氛圍？<br></br>
              我們邀請您親臨現場看房，親眼見證您未來的理想生活。
            </span>

            <ul className="mt-5">
              <b className="text-[1rem] text-light text-white mt-5">
                馬上與我們聯繫，立即預約賞屋時段
              </b>
              <li className="flex items-center mt-2">
                <b className="text-[.9rem] text-white">LINE:</b>
                <p className="text-[.9rem] text-white">XXXXXXXXXXXXXXXX</p>
              </li>
              <li className="flex items-center mt-2">
                <b className="text-[.9rem] text-white">PHONE:</b>
                <p className="text-[.9rem] text-white">XXXXXXXXXXXXXXXX</p>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="contact-form mt-5 lg:mt-0 bg-white rounded-md p-10 w-full">
              <Form
                className="w-full  max-w-[450px] 2xl:max-w-[600px] mx-auto flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  let data = Object.fromEntries(new FormData(e.currentTarget));
                }}
              >
                <Input
                  isRequired
                  errorMessage="Please enter a valid username"
                  label="Username"
                  labelPlacement="outside"
                  name="username"
                  placeholder="輸入您的姓名"
                  type="text"
                />

                <Input
                  isRequired
                  errorMessage="Please enter a valid email"
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="您的信箱"
                  type="email"
                />
                <div className="flex gap-2">
                  <Button color="primary" type="submit">
                    送出
                  </Button>
                  <Button type="reset" variant="flat">
                    清除
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white z-[99999999] py-10 bottom-section flex flex-col justify-center items-center">
        <Marquee>
          <div className="flex flex-row py-10 justify-center items-center">
            <div className="h-[1px] bg-black w-[50vw]"></div>
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <p className="text-[3rem] mx-4">NEWS</p>
              <button class="group relative mr-3 inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950">
                <div class="transition duration-300 sm:group-hover:rotate-[360deg]">
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

        <div className="flex bg-white flex-row justify-center items-center flex-wrap">
          <div className="news-item overflow-hidden group  m-1 sm:m-2 bg-[url('https://commons-shop.karimoku.com/cdn/shop/files/15411_f.jpg?v=1731306525&width=750')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 sm:group-hover:opacity-100 duration-500 sm:group-hover:h-[40%] flex flex-col bg-white p-3">
              <p className="text-[.8rem] hidden sm:block">
                不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
                致邀，職住共生的青創企業家
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <b className="text-[.8rem] mr-3 mt-4">
                  {" "}
                  NEWS:神隱青海│2-3房│含精裝修{" "}
                </b>
                <button class="group relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
                  <div class="translate-x-0 transition sm:group-hover:translate-x-[300%]">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div class="absolute -translate-x-[300%] transition sm:group-hover:translate-x-0 duration-1000">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>{" "}
              </div>
            </div>
          </div>
          <div className="news-item overflow-hidden group  m-1 sm:m-2 bg-[url('https://commons-shop.karimoku.com/cdn/shop/files/15411_f.jpg?v=1731306525&width=750')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 sm:group-hover:opacity-100 duration-500 sm:group-hover:h-[40%] flex flex-col bg-white p-3">
              <p className="text-[.8rem] hidden sm:block">
                不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
                致邀，職住共生的青創企業家
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <b className="text-[.8rem] mr-3 mt-4">
                  {" "}
                  NEWS:神隱青海│2-3房│含精裝修{" "}
                </b>
                <button class="group relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
                  <div class="translate-x-0 transition sm:group-hover:translate-x-[300%]">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div class="absolute -translate-x-[300%] transition sm:group-hover:translate-x-0 duration-1000">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>{" "}
              </div>
            </div>
          </div>
          <div className="news-item overflow-hidden group  m-1 sm:m-2 bg-[url('https://commons-shop.karimoku.com/cdn/shop/files/15411_f.jpg?v=1731306525&width=750')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 sm:group-hover:opacity-100 duration-500 sm:group-hover:h-[40%] flex flex-col bg-white p-3">
              <p className="text-[.8rem] hidden sm:block">
                不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
                致邀，職住共生的青創企業家
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <b className="text-[.8rem] mr-3 mt-4">
                  {" "}
                  NEWS:神隱青海│2-3房│含精裝修{" "}
                </b>
                <button class="group relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
                  <div class="translate-x-0 transition sm:group-hover:translate-x-[300%]">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div class="absolute -translate-x-[300%] transition sm:group-hover:translate-x-0 duration-1000">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>{" "}
              </div>
            </div>
          </div>
          <div className="news-item overflow-hidden group  m-1 sm:m-2 bg-[url('https://commons-shop.karimoku.com/cdn/shop/files/15411_f.jpg?v=1731306525&width=750')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 sm:group-hover:opacity-100 duration-500 sm:group-hover:h-[40%] flex flex-col bg-white p-3">
              <p className="text-[.8rem] hidden sm:block">
                不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
                致邀，職住共生的青創企業家
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <b className="text-[.8rem] mr-3 mt-4">
                  {" "}
                  NEWS:神隱青海│2-3房│含精裝修{" "}
                </b>
                <button class="group relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
                  <div class="translate-x-0 transition sm:group-hover:translate-x-[300%]">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div class="absolute -translate-x-[300%] transition sm:group-hover:translate-x-0 duration-1000">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>{" "}
              </div>
            </div>
          </div>
          <div className="news-item overflow-hidden group  m-1 sm:m-2 bg-[url('https://commons-shop.karimoku.com/cdn/shop/files/15411_f.jpg?v=1731306525&width=750')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 sm:group-hover:opacity-100 duration-500 sm:group-hover:h-[40%] flex flex-col bg-white p-3">
              <p className="text-[.8rem] hidden sm:block">
                不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
                致邀，職住共生的青創企業家
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <b className="text-[.8rem] mr-3 mt-4">
                  {" "}
                  NEWS:神隱青海│2-3房│含精裝修{" "}
                </b>
                <button class="group relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
                  <div class="translate-x-0 transition sm:group-hover:translate-x-[300%]">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div class="absolute -translate-x-[300%] transition sm:group-hover:translate-x-0 duration-1000">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content"></div>
    </ReactLenis>
  );
}
