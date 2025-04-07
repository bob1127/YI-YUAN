"use client";

import HomeSlider from "../../components/HeroSliderHome/page.jsx";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

import { ReactLenis } from "@studio-freight/react-lenis";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
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

    let ctx;

    const onTransitionComplete = () => {
      ctx = initGSAPAnimations();
    };

    window.addEventListener("pageTransitionComplete", onTransitionComplete);

    // fallback: 若不是從 transition link 進來，直接初始化
    if (!sessionStorage.getItem("transitioning")) {
      ctx = initGSAPAnimations();
    } else {
      sessionStorage.removeItem("transitioning"); // 清除 flag
    }

    return () => {
      if (ctx) ctx.revert();
      window.removeEventListener(
        "pageTransitionComplete",
        onTransitionComplete
      );
    };

    return () => ctx.revert(); // 👈 自動 kill 清理範圍內動畫
  }, []);

  return (
    <ReactLenis root>
      <div className="">
        <div className="policy  fixed z-50 left-[38%] bottom-8 bg-white rounded-lg shadow-md w-[350px] py-5">
          <div className="flex justify-center w-full items-center">
            <div className="w-3/4 pl-5">
              <b className="text-black text-[.85rem] tracking-widest">
                This website uses cookies.
              </b>
            </div>
            <div className="flex w-1/4 items-center">
              <b className="border-b-1 text-[.9rem] border-black">OK</b>
              <span className="font-extrabold px-5">
                <Image
                  className="w-[10px]"
                  src="/images/icon/close.png"
                  alt=" "
                  width={15}
                  height={15}
                  placeholder="empty"
                  loading="lazy"
                ></Image>
              </span>
            </div>
          </div>
        </div>
        <HomeSlider />

        <section className="py-[150px] flex pt-8 mt-20 pb-[80px]  border-t-1 border-gray-300 w-full ">
          <div className="w-[15%]">
            <div className="sticky pl-5 top-24 border border-black">
              <b>categories</b>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">All</p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
            </div>
          </div>

          <div className="flex w-[60%] border border-gray-800 flex-col">
            <div className="title flex justify-between pl-8"></div>
            <div className="  mx-auto  px-10">
              <Image
                src="/images/474790076_122233773494031935_6963865975193128560_n.jpg"
                alt=""
                placeholder="empty"
                loading="eager"
                width={1500}
                height={800}
                className="w-screen"
              ></Image>
              <div className="text text-[.95rem] leading-loose mt-5">
                スウェーデンを拠点に活動するタフは、年齢を問わずに日々使えるコレクションをデザインしました。子どもにとっての大皿が、大人にはサイドプレートになるような、サイズと用途の関係に着目したデザインは、一つの使い方にこだわらずに、使い手が想像力を働かせることで、様々な機能に対応します。アイスが溶けたモチーフや、スタンプなど遊び心の溢れたアイデアから生まれたシリーズです。
                スウェーデンを拠点に活動するタフは、年齢を問わずに日々使えるコレクションをデザインしました。子どもにとっての大皿が、大人にはサイドプレートになるような、サイズと用途の関係に着目したデザインは、一つの使い方にこだわらずに、使い手が想像力を働かせることで、様々な機能に対応します。アイスが溶けたモチーフや、スタンプなど遊び心の溢れたアイデアから生まれたシリーズです。
                スウェーデンを拠点に活動するタフは、年齢を問わずに日々使えるコレクションをデザインしました。子どもにとっての大皿が、大人にはサイドプレートになるような、サイズと用途の関係に着目したデザインは、一つの使い方にこだわらずに、使い手が想像力を働かせることで、様々な機能に対応します。アイスが溶けたモチーフや、スタンプなど遊び心の溢れたアイデアから生まれたシリーズです。
                <br></br>
                <br></br>
                スウェーデンを拠点に活動するタフは、年齢を問わずに日々使えるコレクションをデザインしました。子どもにとっての大皿が、大人にはサイドプレートになるような、サイズと用途の関係に着目したデザインは、一つの使い方にこだわらずに、使い手が想像力を働かせることで、様々な機能に対応します。アイスが溶けたモチーフや、スタンプなど遊び心の溢れたアイデアから生まれたシリーズです。
                Designer
              </div>
            </div>
          </div>
          <div className="w-[25%] pr-8  flex flex-col">
            <div className="">
              <span className="text-[.8rem]">
                スウェーデンを拠点に活動するタフは、年齢を問わずに日々使えるコレクションをデザインしました。子どもにとっての大皿が、大人にはサイドプレートになるような、サイズと用途の関係に着目したデザインは、一つの使い方にこだわらずに、使い
                Designer
              </span>
            </div>
            <div className="sticky  my-4 top-24 ">
              <div className="flex  px-4 flex-col border border-[#d7d7d7] bg-[#fffdfa]">
                <h2 className="article-side-project-title text-[1rem] font-normal tracking-widest">
                  326新成屋兩房57萬裝潢成家專案
                </h2>
                <div className="feature">
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal">裝潢價格：</b>
                    <span className="text-[.85rem] font-normal text-gray-700">
                      約新台幣 180 萬元​
                    </span>
                  </div>
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal">裝潢坪數：</b>
                    <span className="text-[.85rem] font-normal text-gray-700">
                      25 坪​
                    </span>
                  </div>
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal">施工日期：</b>
                    <span className="text-[.85rem] font-normal text-gray-700">
                      2024.05.04
                    </span>
                  </div>
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal">特色：</b>
                    <br></br>
                    <span className="text-[.85rem] w-3/4  font-normal text-gray-700">
                      ​以白色與灰色為主色調，搭配木質地板，營造出簡約且溫馨的居家氛圍。​
                    </span>
                  </div>
                </div>
              </div>
              <div className="small-viewer-project p-5">
                <div className="flex flex-row justify-between ">
                  <div className="img w-1/2">
                    <Image
                      src="/images/481977410_122241519506031935_5824784297779272863_n.jpg"
                      placeholder="empty"
                      loading="lazy"
                      alt="small-img"
                      width={400}
                      height={30}
                      className="w-full"
                    ></Image>
                  </div>

                  <div className="arrow w-1/2 flex flex-col justify-between p-4">
                    <div className="flex flex-col">
                      <b className="text-[.95rem]">Name</b>
                      <span className="text-[.8rem] leading-snug ">
                        {" "}
                        Lorem ipsum dolor consectetur
                      </span>
                    </div>
                    <b className="text-[.95rem] ">Go Project</b>
                  </div>
                </div>
                <div className="flex flex-row justify-between ">
                  <div className="img w-1/2">
                    <Image
                      src="/images/481977410_122241519506031935_5824784297779272863_n.jpg"
                      placeholder="empty"
                      loading="lazy"
                      alt="small-img"
                      width={400}
                      height={30}
                      className="w-full"
                    ></Image>
                  </div>

                  <div className="arrow w-1/2 flex flex-col justify-between p-4">
                    <div className="flex flex-col">
                      <b className="text-[.95rem]">Name</b>
                      <span className="text-[.8rem] leading-snug ">
                        {" "}
                        Lorem ipsum dolor consectetur
                      </span>
                    </div>
                    <b className="text-[.95rem] ">Go Project</b>
                  </div>
                </div>
                <div className="flex flex-row justify-between ">
                  <div className="img w-1/2">
                    <Image
                      src="/images/481977410_122241519506031935_5824784297779272863_n.jpg"
                      placeholder="empty"
                      loading="lazy"
                      alt="small-img"
                      width={400}
                      height={30}
                      className="w-full"
                    ></Image>
                  </div>

                  <div className="arrow w-1/2 flex flex-col justify-between p-4">
                    <div className="flex flex-col">
                      <b className="text-[.95rem]">Name</b>
                      <span className="text-[.8rem] leading-snug ">
                        {" "}
                        Lorem ipsum dolor consectetur
                      </span>
                    </div>
                    <b className="text-[.95rem] ">Go Project</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="w-full h-full py-20">
        <Carousel items={cards} />
      </div> */}
    </ReactLenis>
  );
}
