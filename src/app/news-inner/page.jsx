"use client";
import { TransitionLink } from "../../components/utils/TransitionLink";
import EmblaCarousel from "../../components/EmblaCarousel07/EmblaCarousel";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import Marquee from "react-fast-marquee";
export default function About() {
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

  return (
    <ReactLenis root>
      <div className="flex lg:flex-row flex-col pt-[100px] bg-white ">
        <div className=" w-full lg:w-[75%] flex-col justify-center items-center flex ">
          <EmblaCarousel
            slides={SLIDES}
            thumbnails={THUMBNAILS}
            options={OPTIONS}
          />
          <div className="title py-[90px] px-[80px]">
            <h1 className="!text-[2rem]">宜園建設【一青隱】</h1>
          </div>
          <div className="content flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto px-[80px]">
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
          <div className="title py-[90px] px-[80px]">
            <h1 className="!text-[2rem]">向自然習作，美好新始，健康新序</h1>
          </div>
          <div className="content flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto px-[80px]">
            <p className="leading-relaxed">
              不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
              致邀，職住共生的青創企業家 成家滿意，創業更旺，2-3房共居新浪潮
              <br></br> <br></br>
              宜園建設【一青隱】 神隱青海│2-3房│含精裝修
              接待會館：漢口路一段69號（漢口國中正對面） 預約專線：04-2314-9066
            </p>
          </div>
        </div>

        <div className="right w-full lg:w-[25%]"></div>
      </div>
      <div className="bg-white py-10 bottom-section flex flex-col justify-center items-center">
        <Marquee>
          <div className="flex flex-row py-10 justify-center items-center">
            <div className="h-[1px] bg-black w-[50vw]"></div>
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <p className="text-[3rem] mx-4">NEWS</p>
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
        <div className="flex flex-row justify-center items-center flex-wrap">
          <div className="news-item overflow-hidden group  m-1 sm:m-2 bg-[url('https://commons-shop.karimoku.com/cdn/shop/files/15411_f.jpg?v=1731306525&width=750')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 group-hover:opacity-100 duration-500 group-hover:h-[40%] flex flex-col bg-white p-3">
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
                  <div class="translate-x-0 transition group-hover:translate-x-[300%]">
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
                  <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0 duration-1000">
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
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 group-hover:opacity-100 duration-500 group-hover:h-[40%] flex flex-col bg-white p-3">
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
                  <div class="translate-x-0 transition group-hover:translate-x-[300%]">
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
                  <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0 duration-1000">
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
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 group-hover:opacity-100 duration-500 group-hover:h-[40%] flex flex-col bg-white p-3">
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
                  <div class="translate-x-0 transition group-hover:translate-x-[300%]">
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
                  <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0 duration-1000">
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
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 group-hover:opacity-100 duration-500 group-hover:h-[40%] flex flex-col bg-white p-3">
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
                  <div class="translate-x-0 transition group-hover:translate-x-[300%]">
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
                  <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0 duration-1000">
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
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 group-hover:opacity-100 duration-500 group-hover:h-[40%] flex flex-col bg-white p-3">
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
                  <div class="translate-x-0 transition group-hover:translate-x-[300%]">
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
                  <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0 duration-1000">
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
