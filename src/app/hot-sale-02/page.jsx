"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import ThreeDSlider from "../../components/3DSlider.jsx";
import { TransitionLink } from "../../components/utils/TransitionLink";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import TextImageSlider from "../../components/TextImageSlider.jsx";
import Link from "next/link.js";
import { ContainerScroll } from "../../components/ui/container-scroll-animation.tsx";
import ShiftingCountdown from "../../components/ShiftingCountdown.jsx";
import EmblaCarousel from "../../components/EmblaCarousel07/EmblaCarousel";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import { Carousel } from "../../components/ui/carousel01";
import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import Image from "next/image";
import { ReactLenis } from "@studio-freight/react-lenis";
import Marquee from "react-fast-marquee";
import { DragCloseDrawer } from "../../components/DragCloseDrawer";

export default function About() {
  const pathname = usePathname();
  const counterRef = useRef(null);
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);
  const heroImgRef = useRef(null);

  // Framer Motion 滾動動畫
  const { scrollYProgress } = useScroll();
  const fadeOut = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const slideLeft = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
  const slideRight = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    function splitTextIntoSpans(selector) {
      let elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text
          .split("")
          .map((char) => `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`)
          .join("");
        element.innerHTML = splitText;
      });
    }
    splitTextIntoSpans(".header h1");

    function animateCounter() {
      let currentValue = 0;
      const updateInterval = 300;
      const maxDuration = 2000;
      const endValue = 100;
      const startTime = Date.now();

      const updateCounter = () => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < maxDuration) {
          currentValue = Math.min(
            currentValue + Math.floor(Math.random() * 30) + 5,
            endValue
          );
          if (counterRef.current) counterRef.current.textContent = currentValue;
          setTimeout(updateCounter, updateInterval);
        } else {
          if (counterRef.current) counterRef.current.textContent = endValue;
          setTimeout(() => {
            gsap.to(counterRef.current, {
              y: -20,
              duration: 1,
              ease: "power3.inOut",
              onStart: revealLandingPage,
            });
          }, 500);
        }
      };
      updateCounter();
    }

    gsap.to(counterRef.current, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1,
      onComplete: animateCounter,
    });

    function revealLandingPage() {
      gsap.to(heroRef.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 2,
        ease: "hop",
        onStart: () => {
          gsap.to(heroRef.current, {
            transform: "translate(-50%, -50%) scale(1)",
            duration: 2.25,
            ease: "power3.inOut",
            delay: 0.25,
          });

          gsap.to(overlayRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 2,
            delay: 0.5,
            ease: "hop",
          });

          gsap.to(heroImgRef.current, {
            transform: "scale(1)",
            duration: 2.25,
            ease: "power3.inOut",
            delay: 0.25,
          });

          gsap.to(".header h1 span", {
            y: 0,
            stagger: 0.1,
            duration: 2,
            ease: "power4.inOut",
            delay: 0.75,
            onComplete: () => {
              document.body.style.overflow = "auto";
            },
          });
        },
      });
    }
  }, []);
  useEffect(() => {
    // 如果不是重整進來，而是從其他頁進入 about 頁，才執行 reload
    const hasReloaded = sessionStorage.getItem("hasReloadedAboutPage");

    if (
      !hasReloaded &&
      document.referrer &&
      !document.referrer.includes(pathname)
    ) {
      sessionStorage.setItem("hasReloadedAboutPage", "true");
      window.location.reload();
    } else {
      sessionStorage.removeItem("hasReloadedAboutPage");
    }
  }, [pathname]);

  const placeholders = ["建案地點？", "房價房型?", "預約看房?"];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const slideData = [
    {
      title: "誠境二期",
      src: "/images/宜園誠境實景照片.jpg",
    },
    {
      title: "誠境二期",
      src: "/images/烏日區五張犁西段474地號(誠境5)-完工實景照片10-1090219-S.jpg",
    },
    {
      title: "誠境二期",
      src: "/images/JPOM9734.jpg",
    },
    {
      title: "誠境二期",
      src: "/images/img002.png",
    },
  ];
  const [isDay, setIsDay] = useState(true);

  const handleToggle = () => {
    setIsDay(!isDay);
  };
  return (
    <ReactLenis root>
      <div className="mt-[60px] overflow-hidden" ref={heroImgRef}>
        <section className="section-hero w-full relative">
          <div className="absolute inset-0  z-[-1]">
            <Image
              src="/images/JPOM9734.jpg"
              fill
              alt="線上熱銷-一青隱"
              placeholder="empty"
              loading="lazy"
              className="  object-cover object-[center_20%]"
            ></Image>
          </div>
          {/* <video
            className="absolute inset-0 w-[100vw] h-[100vh] object-cover z-[-1]"
            src="/videos/TMHD.mp4"
            autoPlay
            loop
            muted
            playsInline
          /> */}
          <motion.div
            style={{ opacity: fadeOut, x: slideLeft }}
            className="absolute top-[-160px] md:top-[-50px] 2xl:top-[-150px]  left-[-5%] 2xl:left-0 sm:w-[450px] w-[350px] xl:w-[600px] h-auto z-[1]"
          >
            <Image
              src="/images/—Pngtree—green trees branches and leaves_4877518.png"
              alt="Left Tree"
              width={600}
              height={600}
            />
          </motion.div>

          {/* 右側滑動圖片 */}
          <motion.div
            style={{ opacity: fadeOut, x: slideRight }}
            className="absolute top-0 lg:top-0 right-0 sm:w-[450px] w-[300px] xl:w-[600px] h-auto z-[1]"
          >
            <Image
              src="/images/—Pngtree—tree branch_5643252.png"
              alt="Right Tree"
              width={600}
              height={600}
            />
          </motion.div>
          <div className="grid group  place-content-center relative border border-blue-500 aspect-[500/500] sm:aspect-[1024/576] xl:aspect-[1920/768]">
            <div className="absolute overflow-hidden hover:w-[300px] duration-400 rounded-full bg-white border-2 border-black w-[7.5vmin] h-[7.5vmin] md:w-[5.5vmin] md:h-[5.5vmin] z-[1] top-[20%] left-[20%] ">
              <DragCloseDrawer
                trigger={({ onClick }) => (
                  <button
                    onClick={onClick}
                    className="pr-5  flex justify-start items-center     pl-[1px] pt-[1px] group-hover:w-[560px]  "
                  >
                    <div className="text-white rounded-full w-[7vmin] h-[7vmin] md:w-[5vmin] md:h-[5vmin] bg-[#5b8b5a] inline-flex  flex-col justify-center items-center hover:bg-[#487447]">
                      <span className="text-[.8rem]">一青隱</span>
                    </div>
                    <span className="text-[1.1rem] ml-4 group-hover:block group-hover:opacity-100   duration-300 delay-150 hidden opacity-0 font-normal tracking-widest">
                      實在的構築 - 宜園大院
                    </span>
                  </button>
                )}
              >
                <div className="2xl:w-[70%] mx-auto w-[90%]  pl-20   py-[20px] relative  text-neutral-400 space-y-4">
                  <div className="w-[400px] h-[280px] absolute z-[-1] right-[-10%] top-[10%] ">
                    <Image
                      src="https://www.tokiomarinehd.com/purpose/images/top/materiality/bg_id_3.png"
                      alt=""
                      width={800}
                      height={800}
                      placeholder="empty"
                      className="w-full"
                      loading="lazy"
                    ></Image>
                  </div>
                  <div className="modal-inner-title  inline-flex flex-col">
                    <span className="font-bold text-4xl text-black">
                      PROJECT-01
                    </span>
                    <h2 className="text-[2rem] bg-white border-2 border-black py-2 px-4 inline-block font-bold text-neutral-900">
                      實在的構築-宜園大院
                    </h2>
                    <h3 className="text-[1.6rem] bg-white border-2 border-black inline-flex justify-center items-center py-2 px-4 tracking-widest font-bold text-black">
                      宜園大院
                    </h3>
                  </div>
                  <div>
                    <p className="text-[1rem] w-full  2xl:w-2/3 font-normal leading-loose tracking-widest">
                      在青海路的一隅，有一處靜謐生活的藏身之所， 我們為它取名為
                      —— 一青隱。
                      「一」代表獨有、「青」為自然、「隱」是生活的安定。
                      一青隱位處市心，卻刻意與喧囂保持距離；
                      結合現代簡約建築語彙與在地人文氣質，打造僅此一席的宜居空間。
                      全案規劃 2~3 房，主打青創族、雙薪小家庭、菁英自住客層。
                      從空間動線、採光通風，到建材選擇，每一處細節，
                      都考量到未來生活的實用與美感。
                      一青隱，不只是住宅，是一場理想生活的靜靜提案。
                    </p>
                  </div>
                </div>
              </DragCloseDrawer>
            </div>
            <div className="absolute overflow-hidden hover:w-[230px] md:hover:w-[300px] duration-400 rounded-full bg-white border-2 border-black w-[7.5vmin] h-[7.5vmin] md:w-[5.5vmin] md:h-[5.5vmin] z-[1] top-[40%] left-[60%] ">
              <DragCloseDrawer
                trigger={({ onClick }) => (
                  <button
                    onClick={onClick}
                    className="pr-5  flex justify-start items-center     pl-[1px] pt-[1.2px]  md:group-hover:w-[560px]  group-hover:w-[460px]"
                  >
                    <div className="text-white rounded-full w-[7vmin] h-[7vmin] md:w-[5vmin] md:h-[5vmin] bg-[#5b8b5a]  inline-flex  flex-col justify-center items-center hover:bg-[#487447]">
                      <span className="text-[.8rem]">宜園</span>
                    </div>
                    <span className=" text-[.8rem] md:text-[1.1rem] ml-4 group-hover:block group-hover:opacity-100   duration-300 delay-150 hidden opacity-0 font-normal tracking-widest">
                      實在的構築 - 宜園大院
                    </span>
                  </button>
                )}
              >
                <div className="2xl:w-[70%] mx-auto w-[90%] pl-20  py-[20px] relative  text-neutral-400 space-y-4">
                  <div className="w-[400px] h-[280px] absolute z-[-1] right-[-10%] top-[10%] ">
                    <Image
                      src="https://www.tokiomarinehd.com/purpose/images/top/materiality/bg_id_3.png"
                      alt=""
                      width={800}
                      height={800}
                      placeholder="empty"
                      className="w-full"
                      loading="lazy"
                    ></Image>
                  </div>
                  <div className="modal-inner-title  inline-flex flex-col">
                    <span className="font-bold text-2xl 2xl:text-4xl text-black">
                      PROJECT-01
                    </span>
                    <h2 className="text-2xl 2xl:text-4xl bg-white border-2 border-black py-2 px-4 inline-block font-bold text-neutral-900">
                      實在的構築-宜園大院
                    </h2>
                    <h3 className="text-[2rem] 2xl:text-[2.5rem] bg-white border-2 border-black inline-flex justify-center items-center py-2 px-4 tracking-widest font-bold text-black">
                      宜園大院
                    </h3>
                  </div>
                  <div>
                    <p className="text-[1rem] w-full  2xl:w-2/3 font-normal leading-loose tracking-widest">
                      在青海路的一隅，有一處靜謐生活的藏身之所， 我們為它取名為
                      —— 一青隱。
                      「一」代表獨有、「青」為自然、「隱」是生活的安定。
                      一青隱位處市心，卻刻意與喧囂保持距離；
                      結合現代簡約建築語彙與在地人文氣質，打造僅此一席的宜居空間。
                      全案規劃 2~3 房，主打青創族、雙薪小家庭、菁英自住客層。
                      從空間動線、採光通風，到建材選擇，每一處細節，
                      都考量到未來生活的實用與美感。
                      一青隱，不只是住宅，是一場理想生活的靜靜提案。
                    </p>
                  </div>
                </div>
              </DragCloseDrawer>
            </div>
          </div>
        </section>
      </div>
      <Marquee>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">YI-YUAN</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">BUILDING</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">CITY</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">HOME</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">ENVIROMENTS</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">YI-YUAN</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">BUILDING</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">CITY</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">HOME</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">ENVIROMENTS</h1>
        </div>
      </Marquee>
      <section className=" py-10 md:py-20">
        <ThreeDSlider />
      </section>
      {/* <TextImageSlider /> */}
      <section>
        <Image
          src="https://www.jgran.jp/nishiakashi/common/images/top/vision_title.png"
          alt=""
          width={1000}
          height={500}
          placeholder="empty"
          loading="lazy"
          className="max-w-[800px] w-[90%] mx-auto"
        ></Image>
        <div className=" mx-auto 2xl:w-[70%]">
          <h2 className="text-[2rem] font-bold text-center"></h2>
          <p className="text-[1rem] tracking-widest leading-relaxed w-[85%] md:w-[70%] text-center mx-auto my-20">
            我們是來自台中的在地建設團隊，自創立以來，始終秉持著「實在的構築」精神，將每一塊土地、每一筆線條，{" "}
            <br></br>
            都視為對居住者承諾的起點。宜園建設相信，一棟房子不該只是鋼筋水泥的堆疊，而應是融合人文、生活與美學的理想居所。
            <br></br>
            <br></br>
            從烏日的《誠境五期》、沙鹿的《誠境6》，到即將落成的《一青隱》，我們每一個作品，都是深耕土地、用心規劃的結晶。{" "}
            <br></br>
            無論是透天別墅或電梯華廈，從建築設計、空間尺度到建材選用，我們都嚴格把關，只為實現「買得安心、住得放心」的初衷。
            <br></br>
            <br></br>
            在宜園，我們不追求最大、最快，而是堅持每一戶，都值得被認真對待。{" "}
            <br></br>
            我們希望，未來的你，能在這裡找到安身立命的所在，也找到一處真正能安心生活的「家」。
          </p>
          <div></div>
        </div>
      </section>
      <section>
        <div className="flex  flex-col lg:flex-row">
          <div className=" w-full lg:w-1/2 flex justify-center items-center">
            <div className="flex flex-col  p-10">
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-[2.1rem] font-bold ">建案完工倒數計時</h3>
                <p className="text-center tracking-widest leading-loose ">
                  當您提交房產資訊時，我們將為您提供<br></br>
                  獨家網站的優先訪問權，您可以在此處查看最新資訊和獨家平面圖。
                </p>
              </div>

              <ShiftingCountdown />
            </div>
          </div>
          <div className=" w-full lg:w-1/2 overflow-hidden ">
            <Marquee>
              <div className="w-full lg:h-[550px] h-[450px] 2xl:h-[700px] overflow-hidden">
                <Image
                  src="/images/JPOM9734.jpg"
                  alt=""
                  placeholder="empty"
                  loading="lazy"
                  width={1400}
                  height={800}
                  className="w-full"
                ></Image>
              </div>
              <div className="w-full lg:h-[550px] h-[450px] 2xl:h-[700px] overflow-hidden">
                <Image
                  src="/images/宜園誠境實景照片.jpg"
                  alt=""
                  placeholder="empty"
                  loading="lazy"
                  width={1400}
                  height={800}
                  className="w-full"
                ></Image>
              </div>
            </Marquee>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  實在的構築 <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    宜園大院
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src="https://www.jgran.jp/nishiakashi/common/images/top/img_entry.jpg"
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto mt-[-240px] rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>
      <section className="section-banner relative text-center py-10">
        <div className="relative aspect-[500/500] sm:aspect-[1024/576] xl:aspect-[1920/768]">
          <motion.img
            key={isDay ? "day" : "night"}
            src={
              isDay
                ? "/images/烏日區五張犁西段474地號(誠境5)-完工實景照片03-1090219.JPG"
                : "/images/img003.png"
            }
            alt={isDay ? "Daytime Scene" : "Nighttime Scene"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <button
              onClick={handleToggle}
              className="p-2 bg-gray-200 rounded-full"
            >
              {isDay ? (
                <SunIcon className="h-6 w-6 text-yellow-500" />
              ) : (
                <MoonIcon className="h-6 w-6 text-blue-500" />
              )}
            </button>
          </div>
        </div>

        {/*         
        <button
          onClick={toggleMode}
          className="absolute top-4 right-4 z-10 px-4 py-2 bg-white/90 hover:bg-white text-black font-semibold rounded-full shadow transition"
        >
          {isDay ? "切換為夜晚" : "切換為白天"}
        </button>

        {isDay ? (
          <Image
            src="https://srl.tw/Dadaocheng/img/ss2025022618581832_slider_0.webp"
            alt="白天場景"
            loading="lazy"
            placeholder="empty"
            width={2000}
            height={1080}
            className="w-full transition duration-700 ease-in-out"
          />
        ) : (
          <Image
            src="https://srl.tw/Dadaocheng/img/ss2025022618581832_slider_1.webp"
            alt="夜晚場景"
            loading="lazy"
            placeholder="empty"
            width={2000}
            height={1080}
            className="w-full transition duration-700 ease-in-out"
          />
        )} */}
      </section>

      <div className="py-8 lg:flex-row flex-col flex">
        <div className=" w-full lg:w-1/2 ">
          <div className="relative h-[400px] sm:h-[50vh] lg:h-[70vh] 2xl:h-[65vh] overflow-hidden w-full">
            <Carousel slides={slideData} />
          </div>
        </div>
        <div className="w-full pl-[5%] lg:w-1/2 flex pt-0 lg:pt-2 flex-col">
          <div className="flex flex-col">
            <h2 className="text-[2.3rem]">Story</h2>
            <p className="w-full lg:w-[70%] font-[.9rem] font-normal tracjing-widest leading-loose">
              在一塊塊土地上，我們不只建築房子，而是傾聽生活的聲音，描繪家的模樣。
              「宜園建設」成立的初衷，不是蓋出最多的房，而是創造最適合居住的家。
              我們相信——建築，應該回應土地的氣息、體貼人的節奏、延續一座城市的脈絡。
              每一個案子，我們都以園丁的心情細細栽培，從選地、設計到落成，不急不躁，只為讓家的樣貌，自然生長。
              我們的團隊來自台中，深耕中部地區，重視環境、珍惜文化，也尊重每一位居住者的未來。
              從「一青隱」到「宜園大院」，我們堅持以實在的用料、細緻的工法與親切的售後，換取每一戶人家的信賴與安心。
              因為我們知道，房子不只是結構，而是一種生活的承諾。 —
            </p>
          </div>
          <div className="flex border-gray-400 w-[80%] border-t-1 flex-col mt-20 py-6">
            建地面積：
          </div>
          <div className="flex border-gray-400 w-[80%] border-t-1 flex-col mt-2 py-6">
            樓層：
          </div>
          <div className="flex border-gray-400 w-[80%] border-t-1 flex-col mt-2 py-6">
            規劃：
          </div>
        </div>
      </div>
      <section className="section-info h-auto lg:h-[90vh] py-10 px-4">
        <div className="flex flex-col lg:flex-row h-full w-full max-w-[1920px] mx-auto">
          {/* 左側圖片區塊 */}
          <div
            data-aos="fade-right"
            className="lg:w-[55%] w-full h-[400px] lg:h-auto border-4 border-black bg-[url('/images/img002.png')] bg-center bg-cover bg-no-repeat rounded-tl-[50px] rounded-br-[50px] mb-6 lg:mb-0"
          ></div>

          {/* 右側文字內容 */}
          <div className="lg:w-[42%] w-full flex flex-col justify-center lg:pl-12">
            <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-extrabold mb-4">
              DESIGN - 設計
            </h2>
            <b className="text-[1rem] md:text-[1.1rem] leading-relaxed tracking-wide">
              車站的新標誌。擁有 340 套單位的大型住宅社區，
              <br />
              在湛藍的天空下，猶如盛開的大花。
            </b>
          </div>

          {/* 右側綠色區塊 */}
          <div className="lg:w-[3%] w-full lg:h-auto h-[10px] bg-[#5aa54d] lg:ml-4 mt-6 lg:mt-0"></div>
        </div>
      </section>

      <section className="section-info h-auto lg:h-[90vh] py-10 px-4">
        <div className="flex h-full w-full max-w-[1920px] mx-auto">
          {/* 左側綠色條 */}
          <div className="w-[3%] bg-[#5aa54d]"></div>

          {/* 右側主內容 */}
          <div className="w-[97%]  flex flex-col lg:flex-row justify-between items-center p-4 lg:p-10 gap-8">
            {/* 文字區塊 */}
            <div className="lg:w-[42%] w-full">
              <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-extrabold mb-4">
                DESIGN - 設計
              </h2>
              <b className="text-[1rem] md:text-[1.1rem] leading-relaxed tracking-wide">
                車站的新標誌。擁有340套單位的大型住宅社區，
                <br />
                在湛藍的天空下，猶如盛開的大花。
              </b>
            </div>

            {/* 圖片區塊 */}
            <div
              data-aos="fade-left"
              className="lg:w-[50%] w-full h-[300px] lg:h-[80%] border-4 border-black bg-[url('/images/img002.png')] bg-center bg-cover bg-no-repeat rounded-tr-[50px] rounded-bl-[50px]"
            ></div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="section-banner bg-[url('/images/JPOM9734.jpg')] bg-center bg-cover bg-no-repeat aspect-[500/500] sm:aspect-[1024/576] xl:aspect-[1920/768] w-full relative">
          <div className="absolute hidden md:block w-1/3 h-full  top-0 z-0 right-0 bg-gradient-to-l from-black to-transparent opacity-60"></div>
          <div className="absolute w-[110%] md:w-1/2 h-full  top-0 z-0 left-0 bg-gradient-to-r from-black to-transparent opacity-90 md:opacity-70"></div>

          <div className="absolute w-1/3 h-full   left-10   top-10 z-50">
            <Image
              src="https://storage.googleapis.com/studio-design-asset-files/projects/91aPgdndql/s-263x150_c507d293-450d-4c86-bbf0-dc4a7b16560a.svg"
              alt=""
              width={800}
              height={400}
              className="max-w-[400px] w-full"
              placeholder="empty"
            ></Image>
            <div>
              <Link href="#">
                <p className="text-[.8rem] mt-4 ml-4 tracking-normal hover:tracking-widest duration-300 text-white">
                  {" "}
                  ・ PROJECT - 更多新案銷售
                </p>
              </Link>
              <Link href="#">
                <p className="text-[.8rem] mt-4 ml-4 tracking-normal hover:tracking-widest duration-300 text-white">
                  {" "}
                  ・ ABOUT - 關於宜園建設
                </p>
              </Link>
              <Link href="#">
                <p className="text-[.8rem] mt-4 ml-4 tracking-normal hover:tracking-widest duration-300 text-white">
                  {" "}
                  ・ NEWS - 最新消息
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#71dd6f] py-2">
          <Marquee>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
          </Marquee>
        </div>
      </section>

      <section className="section-CTA pt-20 flex flex-col justify-center items-center">
        <div>
          <p className="text-center font-extrabold">如有疑問，請聯絡 </p>
          <br></br>
          <p className="text-center font-extrabold">
            臺中市北區賴興里文心路四段212號10樓之2 宜園建設辦公室。
          </p>
        </div>
        <a className="flex mx-auto my-10" href="tel:04-22978188">
          {/* <img
            className="w-[120px] h-[55px]"
            src="https://www.jgran.jp/nishiakashi/common/images/common/icon_tel.svg"
          ></img> */}
          <span className="tel__txt">
            <font className="font-bold text-[2.2rem]">
              <font className="font-bold text-[2.2rem]">04-22978188</font>
            </font>
          </span>
        </a>
        <span className="text-[.8rem] mt-5">
          營業時間：10:30～17:30 （週三、週四、每月第二個週二公休 ※假日除外）
        </span>
      </section>
      <section className="section-two-banner py-20 flex flex-col justify-center items-center ">
        <div className="max-w-[1000px] flex justify-center md:px-[20px] ">
          <Image
            src="https://www.31sumai.com/content/dam/31sumai/mfr/H2302/top/btn_design.png"
            alt="banner"
            placeholder="empty"
            loading="lazy"
            width={1500}
            height={650}
            className="w-full"
          ></Image>
        </div>
        <div className="max-w-[1000px]  mt-10 flex justify-center md:px-[20px] ">
          <Image
            src="https://www.31sumai.com/content/dam/31sumai/mfr/H2302/top/btn_access.png"
            alt="banner"
            placeholder="empty"
            loading="lazy"
            width={1500}
            height={650}
            className="w-full"
          ></Image>
        </div>
      </section>
    </ReactLenis>
  );
}
