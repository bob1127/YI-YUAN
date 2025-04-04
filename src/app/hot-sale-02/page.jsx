"use client";

import { useEffect } from "react";
import { TransitionLink } from "../../components/utils/TransitionLink";
import EmblaCarousel from "../../components/EmblaCarousel07/EmblaCarousel";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import { Carousel } from "../../components/ui/carousel01";
import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import Image from "next/image";
import { ReactLenis } from "@studio-freight/react-lenis";
import ScrollAnimtion from "../../components/ScrollAnimation01";
import Marquee from "react-fast-marquee";

export default function About() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !sessionStorage.getItem("aboutPageReloaded")
    ) {
      sessionStorage.setItem("aboutPageReloaded", "true");
      window.location.reload();
    }
  }, []);

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

  return (
    <ReactLenis root>
      <ScrollAnimtion />
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

      <div className="content"></div>
    </ReactLenis>
  );
}
