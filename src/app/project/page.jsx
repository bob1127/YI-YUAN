"use client";
import { useRef } from "react";
import SvgImg from "../../components/SVGImage";
import { ReactLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import HoverCard from "../../components/HoverCardBuild/index";
import gsap from "gsap";

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

  return (
    <ReactLenis root>
      {/* <HeroSlider /> */}
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

      <section className="section_project flex flex-col 2xl:w-[80%] mx-auto  ">
        <div className="flex flex-col lg:flex-row 2xl:px-[10px] justify-start items-center pl-6">
          <div className="title mr-4">
            <h2> 經典選粹</h2>
          </div>
          <div className="description">
            <p className="text-gray-400 mr-4 text-right text-[14px]">
              匠心獨運，築夢家園 —— 宜園建設打造理想居所，，<br></br>
              結合自然美學與現代舒適，帶您邁向幸福生活新境界。
            </p>
          </div>
        </div>
        <div data-aos="fade-up">
          {" "}
          <HoverCard />
        </div>
      </section>
      <section className="section_project flex flex-col 2xl:w-[80%] mx-auto  py-[40px]">
        <div className="flex flex-col lg:flex-row 2xl:px-[10px] justify-start items-center pl-6">
          <div className="description">
            <p className="text-gray-400 ml-4 text-left text-[14px]">
              匠心獨運，築夢家園 —— 宜園建設打造理想居所，，<br></br>
              結合自然美學與現代舒適，帶您邁向幸福生活新境界。
            </p>
          </div>
        </div>
        <div data-aos="fade-up">
          {" "}
          <HoverCard />
        </div>
      </section>
      <section>
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
      </section>

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
