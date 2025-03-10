"use client";
import { useRef } from "react";
import "./page.css";
import SvgImg from "../../components/SVGImage";
import RevealLink from "../../components/RevealLinks";
// import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import HoverCard from "../../components/HoverCardBuild/index";
import gsap from "gsap";
import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";
// import HeroSlider from "../../components/HeroSlider/page";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import ImageDistortion from "../../components/ImageDistortion/page";
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/lookbook.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/shop.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/home.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/home.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
gsap.registerPlugin(CustomEase);

const Photos = () => {
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
    <>
      {/* <HeroSlider /> */}
      <SvgImg />
      {/* <div className="p-10">
        <StickyScroll content={content} />
      </div> */}
      <section className="section_project flex flex-col py-[40px]">
        <div className="flex 2xl:px-[10px] justify-end items-center pr-6">
          <div className="description">
            <p className="text-gray-400 mr-4 text-right text-[14px]">
              匠心獨運，築夢家園 —— 宜園建設打造理想居所，，<br></br>
              結合自然美學與現代舒適，帶您邁向幸福生活新境界。
            </p>
          </div>
          <div className="title">
            <h2> 經典選粹</h2>
          </div>
        </div>
        <HoverCard />
      </section>
      <section className="section_project flex flex-col py-[40px]">
        <div className="flex 2xl:px-[10px] justify-start items-center pl-6">
          <div className="description">
            <p className="text-gray-400 ml-4 text-left text-[14px]">
              匠心獨運，築夢家園 —— 宜園建設打造理想居所，，<br></br>
              結合自然美學與現代舒適，帶您邁向幸福生活新境界。
            </p>
          </div>
          <div className="title">
            <h2> 線上熱銷</h2>
          </div>
        </div>
        <HoverCard />
      </section>
      <section className="section_project flex flex-col py-[40px]">
        <div className="flex 2xl:px-[10px] justify-end items-center pr-6">
          <div className="description">
            <p className="text-gray-400 mr-4 text-right text-[14px]">
              匠心獨運，築夢家園 —— 宜園建設打造理想居所，，<br></br>
              結合自然美學與現代舒適，帶您邁向幸福生活新境界。
            </p>
          </div>
          <div className="title">
            <h2> 新案件賞</h2>
          </div>
        </div>
        <HoverCard />
      </section>
      <ImageDistortion />
      <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
          對我們的建案有興趣嗎？
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
      {/* <RevealLink /> */}
    </>
  );
};

export default Photos;
