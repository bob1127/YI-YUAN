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
  return (
    <ReactLenis root>
      <section className="section-hero w-full h-[100vh] relative overflow-hidden">
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
        <div className="hero-title border border-green-300 w-1/2 absolute left-[4%] top-[90%] z-20">
          <div className="text-center px-4">
            <GsapText
              text="Built for Living."
              id="gsap-intro"
              fontSize="4rem"
              fontWeight="200"
              color="#fff"
              lineHeight="60px"
              className="text-center !text-white tracking-widest inline-block mb-0 h-auto"
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
      <section className=" pt-[10vh] ">
        <div className=" w-[90%] overflow-hidden md:w-[95%]  mx-auto">
          <div>
            <div className=" w-[30%] mb-5">
              <Image
                width={800}
                height={400}
                src="https://www.bess.jp/wordpress/wp-content/themes/bess/assets/images/top_life_title.png"
                alt="project-hero-img"
                placeholder="empty"
                className="w-[200px]"
                loading="eager"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full">
            <div className="img w-full md:w-[80%] xl:w-[85%]">
              <Image
                width={2200}
                height={800}
                src="https://www.31sumai.com/content/dam/31sumai/mfr/X2114/top/main_img02.png"
                alt="project-hero-img"
                placeholder="empty"
                loading="eager"
              ></Image>
            </div>
            <div className=" w-full sm:w-[80%] mx-auto lg:w-[40%]  p-2 lg:p-10">
              <h2
                className="text-[1.1rem] w-full xl:text-[1]"
                data-aos="fade-up"
              >
                不選擇普通的家，而是選擇BESS的家的人。這裡有什麼不同呢？實際的生活是什麼樣的？通過全國的家庭採訪，我們看到了真實的生活。
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="p-10">
        <StickyScroll content={content} />
      </div> */}

      <section className="section_project py-[100px] flex flex-col 2xl:w-[80%] mx-auto  ">
        <div className="flex max-w-[1920px] w-[80%] mx-auto flex-col lg:flex-row 2xl:px-[10px] justify-start items-center pl-6">
          <div className="title mr-4">
            <h2> 經典選粹</h2>
          </div>
        </div>
        <div data-aos="fade-up">
          {" "}
          <HoverCard />
        </div>
      </section>
      <section className="section_project flex flex-col 2xl:w-[80%] mx-auto  py-[40px]">
        <div className="flex flex-col lg:flex-row 2xl:px-[10px] justify-start items-center pl-6">
          <div className="description"></div>
        </div>
        <div data-aos="fade-up">
          {" "}
          <HoverCard />
        </div>
      </section>
      {/* <section>
        <div className="banner relative max-w-[1500px] border border-black mx-auto">
          <Image
            src="https://kon-sumai.com/common/img/openhouse-bnr.jpg"
            width={2000}
            className="w-full"
            height={600}
            placeholder="empty"
            loading="lazy"
            alt="banner"
          ></Image>
          <div className="absolute top-5 left-5 z-50 flex flex-col ">
            <div className="bg-[#162F67] font-extrabold text-[2.5rem] text-white">
              たくさんの人が集まれる家
            </div>
            <p className="text-[#162F67] text-[4rem] font-extrabold">
              MODEL HOUSE
            </p>
          </div>
        </div>
      </section> */}

      {/* <ImageDistortion /> */}
      <div className="h-auto 2xl:h-[40rem] flex flex-col justify-center  items-center px-4">
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
          對我們的建案有興趣嗎？
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </ReactLenis>
  );
};

export default Photos;
