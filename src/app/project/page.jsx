"use client";
import { useRef } from "react";
import SvgImg from "../../components/SVGImage";
import { ReactLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import HoverCard from "../../components/HoverCardBuild/index";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GsapText from "../../components/RevealText/index";
import AnimatedLink from "../../components/AnimatedLink";

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
      <section className="section-hero w-full max-h-[500px] sm:max-h-[700px]  h-[100vh] relative overflow-hidden">
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
      <section className=" max-w-[1920px] mx-auto">
        <div className="grid items-end  sm:grid-cols-2 grid-cols-1 gap-3 lg:grid-cols-3 pl-3 pr-5  py-[50px] md:py-[100px] 2xl:py-[150px] ">
          <div className="  w-full mx-auto sm:mx-3  max-h-[700px]  h-auto md:h-[85vh]   overflow-hidden">
            <div className="flex flex-col pl-4 py-4">
              <div className="inline-block pb-4">
                <button
                  role="link"
                  class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                >
                  <button
                    role="link"
                    class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    <b className="text-[.9rem] font-bold"> 誠境二期</b>
                  </button>
                </button>
              </div>
              <span className="text-[.75rem]">Project</span>
              <span className="text-[.75rem]">Taichung - 2025.03.23</span>
            </div>

            <div className="animate-image-wrapper relative w-full aspect-[4/5] md:h-full overflow-hidden ">
              <div className="overlay absolute inset-0 bg-black z-10"></div>
              <div className="image-container relative w-full h-full">
                <Image
                  src="/images/project/raw.webp"
                  alt="About Image 1"
                  fill
                  className="object-cover w-full"
                />
                xs
              </div>
            </div>
          </div>
          <div className="  w-full mx-auto sm:mx-3  h-auto md:h-[63vh] max-h-[450px]  overflow-hidden">
            <div className="flex flex-col pl-4 py-4">
              <div className="inline-block pb-4">
                <button
                  role="link"
                  class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                >
                  <button
                    role="link"
                    class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    <b className="text-[.9rem] font-bold"> 誠境二期</b>
                  </button>
                </button>
              </div>
              <span className="text-[.75rem]">Project</span>
              <span className="text-[.75rem]">Taichung - 2025.03.23</span>
            </div>
            <div className="animate-image-wrapper relative w-full aspect-[4/5] md:h-full overflow-hidden ">
              <div className="overlay absolute inset-0 bg-black z-10"></div>
              <div className="image-container relative w-full h-full">
                <Image
                  src="/images/project/raw.webp"
                  alt="About Image 1"
                  fill
                  className="object-cover w-full"
                />
                xs
              </div>
            </div>
          </div>
          <div className="  w-full mx-auto sm:mx-3  h-auto md:h-[88vh] max-h-[700px]  overflow-hidden">
            <div className="flex flex-col pl-4 py-4">
              <div className="inline-block pb-4">
                <button
                  role="link"
                  class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                >
                  <button
                    role="link"
                    class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    <b className="text-[.9rem] font-bold"> 誠境二期</b>
                  </button>
                </button>
              </div>
              <span className="text-[.75rem]">Project</span>
              <span className="text-[.75rem]">Taichung - 2025.03.23</span>
            </div>
            <div className="animate-image-wrapper relative w-full aspect-[4/5] md:h-full overflow-hidden ">
              <div className="overlay absolute inset-0 bg-black z-10"></div>
              <div className="image-container relative w-full h-full">
                <Image
                  src="/images/project/raw.webp"
                  alt="About Image 1"
                  fill
                  className="object-cover w-full"
                />
                xs
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1920px] mx-auto">
        <div className="flex flex-row">
          <div className="img  w-1/2 mx-auto sm:mx-3 mt-[-100px] max-h-[800px]  h-auto md:h-[95vh]  overflow-hidden">
            <div className="flex flex-col pl-4 py-4">
              <div className="inline-block pb-4">
                <button
                  role="link"
                  class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                >
                  <button
                    role="link"
                    class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    <b className="text-[.9rem] font-bold"> 誠境二期</b>
                  </button>
                </button>
              </div>
              <span className="text-[.75rem]">Project</span>
              <span className="text-[.75rem]">Taichung - 2025.03.23</span>
            </div>
            <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
              <div className="overlay absolute inset-0 bg-black z-10"></div>
              <div className="image-container relative w-full h-full">
                <Image
                  src="/images/project/raw.webp"
                  alt="About Image 1"
                  fill
                  className="object-cover w-full"
                />
                xs
              </div>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </section>

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
