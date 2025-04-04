"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThreeDSlider from "../../components/3DSlider.jsx";
import { TransitionLink } from "../../components/utils/TransitionLink";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
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

export default function About() {
  const pathname = usePathname();

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
      src: "https://www.hasegawa-kogyo.co.jp/lucano/img/sec_gallery01.jpg",
    },
    {
      title: "誠境二期",
      src: "https://www.hasegawa-kogyo.co.jp/lucano/img/sec_gallery05.jpg",
    },
    {
      title: "誠境二期",
      src: "https://www.hasegawa-kogyo.co.jp/lucano/img/sec_gallery02.jpg",
    },
    {
      title: "誠境二期",
      src: "https://www.hasegawa-kogyo.co.jp/lucano/img/sec_feature05.jpg",
    },
  ];
  const [isDay, setIsDay] = useState(true);

  const handleToggle = () => {
    setIsDay(!isDay);
  };
  return (
    <ReactLenis root>
      <section className="section-hero">
        <video
          src="https://www.jgran.jp/nishiakashi/common/images/top/webtop0120_pc.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-[100vw] h-screen object-cover"
        ></video>
      </section>
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
      <section className="py-20">
        <ThreeDSlider />
      </section>
      <section>
        <Image
          src="https://www.jgran.jp/nishiakashi/common/images/top/vision_title.png"
          alt=""
          width={1000}
          height={500}
          placeholder="empty"
          loading="lazy"
          className="max-w-[800px] mx-auto"
        ></Image>
        <div>
          <p className="text-[1rem] tracking-widest leading-relaxed w-[70%] text-center mx-auto my-20">
            這個名字象徵著明石市和 JR 西日本集團共同建造的「未來的希望 」。
            「TOMORROW」蘊含著對未來的「持續成長」和「希望」的訊息，
            這個城鎮將成為居民們懷抱希望、共同成長、共建未來的地方。
            我們追求永續發展，與子孫後代緊密相連，形成整個地區相互支持的包容性社區。
            明日城將體現未來的永續發展， 成為引領地區發展的地標。
          </p>
          <div></div>
        </div>
      </section>
      <section>
        <div className="flex  flex-col lg:flex-row">
          <div className=" w-full lg:w-1/2 flex justify-center items-center">
            <div className="flex flex-col  p-10">
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-[3rem] font-bold ">建案完工倒數計時</h3>
                <p className="text-center tracking-widest leading-loose ">
                  當您提交房產資訊時，我們將為您提供
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
                  src="https://www.31sumai.com/content/dam/31sumai/mfr/H2302/top/mainv.png"
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
                  src="https://www.31sumai.com/content/dam/31sumai/mfr/B2223/top/add2.jpg"
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
        <div className="relative w-full h-screen">
          <motion.img
            key={isDay ? "day" : "night"}
            src={
              isDay
                ? "https://srl.tw/Dadaocheng/img/ss2025022618581832_slider_0.webp"
                : "https://srl.tw/Dadaocheng/img/ss2025022618581832_slider_1.webp"
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
              自2005年事業開始以來，我們已經參與了3000多件的翻新案件。在客戶需求不斷變化的情況下，像是「買了新建的房子但想稍微自訂一下」、「買了翻新過的物件，但因為客廳過於簡單所以想加入一些個性」等，非全訂製，而是在預算內的隨意自訂需求正在增加。對於設備和格局並無不滿，但想要一些質感和個性。不需要過度講究細節，也希望能創造出讓人舒適而滿意的空間。這樣「想要稍微改善普通的東西」的心情，就是「模樣替」所回應的。
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
      <section className="section-info h-[90vh]">
        <div className="flex h-full">
          <div className="w-[3%] bg-[#5aa54d] h-full">
            <div className="txt">
              <b></b>
            </div>
          </div>
          <div className="w-[97%] border border-black h-full relative">
            <div className="text top-[20%] absolute z-10 left-[6%]">
              <h2 className="text-[3rem] font-extrabold ">DESIGN - 設計</h2>
              <b>
                車站的新標誌。 擁有340套單位的大型住宅社區<br></br>
                ，在湛藍的天空下，猶如盛開的大花。
              </b>
            </div>
            <div
              data-aos="fade-left"
              className="w-[55%] absolute z-50 right-[2%] top-[5%] h-[90%] border-4 border-black bg-[url('https://www.jgran.jp/nishiakashi/common/images/top/img_location.jpg')] bg-center bg-cover bg-no-repeat rounded-tr-[50px] rounded-bl-[50px]"
            ></div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-banner bg-[url('https://storage.googleapis.com/studio-design-asset-files/projects/91aPgdndql/s-2338x1328_v-frms_webp_37d66fac-41e3-41bf-80a5-2b9e118acf96.webp')] bg-center bg-cover bg-no-repeat h-[80vh] w-full relative">
          <div className="absolute hidden md:block w-1/3 h-full  top-0 z-0 right-0 bg-gradient-to-l from-black to-transparent opacity-60"></div>
          <div className="absolute w-[110%] md:w-1/2 h-full  top-0 z-0 left-0 bg-gradient-to-r from-black to-transparent opacity-90 md:opacity-70"></div>

          <div className="absolute w-1/3 h-full   left-10   top-10 z-50">
            <Image
              src="https://storage.googleapis.com/studio-design-asset-files/projects/91aPgdndql/s-263x150_c507d293-450d-4c86-bbf0-dc4a7b16560a.svg"
              alt=""
              width={800}
              height={400}
              className="max-w-[400px]"
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
            「J-GRAND CITY西明石塔西」專案籌備辦公室。
          </p>
        </div>
        <a className="flex mx-auto my-10" href="tel:0120-292-210">
          <img
            className="w-[120px] h-[55px]"
            src="https://www.jgran.jp/nishiakashi/common/images/common/icon_tel.svg"
          ></img>
          <span className="tel__txt">
            <font className="font-bold text-[2.2rem]">
              <font className="font-bold text-[2.2rem]">0120-292-210</font>
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
