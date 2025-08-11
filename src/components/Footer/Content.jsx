"use client";

import React from "react";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import AnimatedLink from "../AnimatedLink";
// import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
export default function Content() {
  // ✅ 修正卡住滾動的 bug：每次進入頁面都清除 .page-transition
  useEffect(() => {
    document.body.classList.remove("page-transition");
    sessionStorage.removeItem("transitioning"); // 順便清除狀態
  }, []);
  const placeholders = [
    "理想的家，該具備哪些元素？",
    "選擇房子時，你最在意什麼？",
    "如何找到兼具品質與舒適的住宅？",
    "買房是投資還是生活選擇？",
    "未來的家，會是什麼模樣？",
  ];
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div
      id="dark-section"
      className="pb-2   bg-[#222422] bg-left bg-no-repeat bg-cover py-8 2xl:px-[200px] lg:px-[150px] px-[40px] h-full  w-full flex flex-col justify-center"
    >
      <Section2 />
      <div className=" md:w-1/2 max-w-[900px] flex justify-start"></div>
      {/* <Marquee className="mb-12">
        <div className="flex justify-center items-center">
          <b className="text-[4.3vmin] mr-3 font-normal text-gray-50">
            KuanKoshi BUILDING DESIGN
          </b>
          <b className="text-[5.3vmin] mr-3 font-normal text-gray-50">
            KuanKoshi BUILDING DESIGN
          </b>
          <b className="text-[4.3vmin] mr-3 font-normal text-gray-50">
            KuanKoshi BUILDING DESIGN
          </b>
          <b className="text-[4.3vmin] mr-3 font-normal text-gray-50">
            KuanKoshi BUILDING DESIGN
          </b>
          <b className="text-[4.3vmin] mr-3 font-normal text-gray-50">
            KuanKoshi BUILDING DESIGN
          </b>
          <b className="text-[4.3vmin] mr-3 font-normal text-gray-50">
            KuanKoshi BUILDING DESIGN
          </b>
          <b className="text-[4.3vmin] mr-3 font-normal text-gray-50">
            KuanKoshi BUILDING DESIGN
          </b>
        </div>
      </Marquee> */}
    </div>
  );
}

const Section2 = () => {
  const placeholders = [
    "理想的家，該具備哪些元素？",
    "選擇房子時，你最在意什麼？",
    "如何找到兼具品質與舒適的住宅？",
    "買房是投資還是生活選擇？",
    "未來的家，會是什麼模樣？",
  ];
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-col">
      <Nav />

      <div className="copy flex  flex-col lg:flex-row  border-t-1 border-white py-4">
        <div className="flex flex-col w-full lg:w-1/2  sm:items-start items-center justify-center sm:justify-start">
          <div className="social-media-icon mb-1 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="33"
              height="33"
              viewBox="0 0 48 48"
              className="mt-[.5px] mr-1 "
            >
              <linearGradient
                id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                x1="9.993"
                x2="40.615"
                y1="9.993"
                y2="40.615"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#2aa4f4"></stop>
                <stop offset="1" stop-color="#007ad9"></stop>
              </linearGradient>
              <path
                fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              ></path>
              <path
                fill="#fff"
                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
              ></path>
            </svg>
          </div>
          <p className="text-[18px] text-gray-100 font-mode leading-[0.8] my-2">
            宜園建設股份有限公司
          </p>
          {/* <p className="text-[.9rem] text-gray-200 font-light">
            Copyright © 2023︎ Ait Design Inc.
          </p> */}
          <p className="text-[.9rem]  text-gray-200 font-light">
            Copyright © {new Date().getFullYear()} 宜園建設
          </p>
        </div>
        <div className="flex w-full lg:w-1/2 py-0 sm:py-8 lg:py-0 justify-center sm:justify-start lg:justify-end   flex-col items-center sm:items-start lg:items-end">
          {/* <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          /> */}
          ;
          <p className="text-[.9rem] text-gray-200 font-light">
            {" "}
            Design by 極客網頁設計
          </p>
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className=" shrink-0 gap-2 ">
      <div className="middle flex  flex-col lg:flex-row">
        <div className=" w-full lg:w-[40%]">
          <div className="grid grid-cols-2">
            <div className="flex py-8 flex-col">
              <div className="flex mt-8 flex-col">
                <b className="text-gray-400 text-[.8rem]">Contact</b>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%8C%97%E5%8D%80%E8%B3%B4%E8%88%88%E9%87%8C%E6%96%87%E5%BF%83%E8%B7%AF%E5%9B%9B%E6%AE%B5212%E8%99%9F10%E6%A8%93-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="在 Google 地圖開啟：台中市北區賴興里文心路四段212號10樓-2"
                >
                  <span className="text-[.8rem] text-white mt-1 ">
                    地址：台中市北區賴興里文心路四段212號10樓-2
                  </span>
                </Link>

                <Link
                  href="mailto:Yi.yuan@msa.hinet.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="寫信給 Yi.yuan@msa.hinet.net"
                >
                  <span className="text-[.8rem] text-white mt-1  break-all">
                    信箱：Yi.yuan@msa.hinet.net
                  </span>
                </Link>

                <Link
                  href="tel:+886422978188"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="撥打電話 04-22978188"
                >
                  <span className="text-[.8rem] text-white mt-1 ">
                    電話：04-22978188
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex pl-8 py-8 flex-col">
              <div className="flex mt-8 flex-col">
                <b className="text-gray-400 text-[.8rem]">Project</b>
                <span className="text-[.8rem] text-white mt-1">一青隱</span>
                <span className="text-[.8rem] text-white mt-1">宜園大院</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-[60%] pb-5 flex  justufy-start lg:justify-end items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9665782425545!2d120.67565527588322!3d24.17290487242401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44766439ed9d2f13%3A0x7915785e2ed054c3!2z5a6c5ZyS5bu66Kit6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1754890059188!5m2!1szh-TW!2stw"
            width="600"
            height="210"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
