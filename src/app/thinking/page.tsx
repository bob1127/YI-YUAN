"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import "./about.css";
import TextScroll from "../../components/TextScroll/page";
// import Carousel from "@/components/ui/carousel";
// import InfiniteCarousel from "../../components/InfiniteCarousel/page";
import Image from "next/image";
export default function About() {
  return (
    <ReactLenis root>
      <TextScroll />
      <section className="section_content w-[60%] mx-auto my-10">
        <div className="title py-[100px] border-b-1 border-gray-300 ">
          <h1 className="font-normal">「不熱也不冷」 世界標準的房子。</h1>
          <p>
            被動設計是指最大限度地利用太陽、風等自然能源，創造舒適節能的居住環境的設計思想和設計方法。
          </p>
        </div>
        <div className="border-b-1 border-gray-300  py-[100px]">
          <h2>被動設計的特點</h2>
          <div className="flex">
            <div>
              <Image
                src="/images/feature-passive-design01.png"
                placeholder="empty"
                alt="design-img"
                loading="lazy"
                width={900}
                height={550}
              ></Image>
            </div>
            <div>
              <Image
                src="/images/feature-passive-design02.png"
                placeholder="empty"
                alt="design-img"
                loading="lazy"
                width={900}
                height={550}
              ></Image>
            </div>
          </div>
        </div>
        <div className="py-[100px] border-b-1 border-gray-300 ">
          <h2>高氣密、高隔熱</h2>
          <div className="flex">
            <div>
              <Image
                src="/images/feature-passive-design03.png"
                placeholder="empty"
                alt="design-img"
                loading="lazy"
                width={1700}
                height={550}
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}
