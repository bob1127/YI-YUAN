"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    src: "https://www.jgran.jp/nishiakashi/common/images/top/vision03.png",
    alt: "日常生活新站點",
  },
  {
    src: "https://www.jgran.jp/nishiakashi/common/images/top/vision01.png",
    alt: "每天散步逛街都是樂趣",
  },
  {
    src: "https://www.jgran.jp/nishiakashi/common/images/top/vision02.png",
    alt: "我們將創建一個城鎮中的每個人都能享受的廣場。",
  },
  {
    src: "https://www.jgran.jp/nishiakashi/common/images/top/vision06.png",
    alt: "大人小孩都喜歡的趣味讀書空間",
  },
  {
    src: "https://www.jgran.jp/nishiakashi/common/images/top/vision05.png",
    alt: "成為育兒支援城市",
  },
  {
    src: "https://www.jgran.jp/nishiakashi/common/images/top/vision04.png",
    alt: "人們可以聚集並繼續生活的地方",
  },
];

export default function Swiper3DComponent() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full relative">
      {/* Navigation buttons */}
      <div
        ref={prevRef}
        className="swiper-button-prev !text-black !left-0 z-10"
      ></div>
      <div
        ref={nextRef}
        className="swiper-button-next !text-black !right-0 z-10"
      ></div>

      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        speed={3000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // 這段是關鍵：讓 Swiper 在初始化前認得按鈕
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="w-full "
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="w-[300px] h-[400px] my-10 bg-white rounded-lg shadow-xl overflow-hidden "
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
