"use client";
import { TransitionLink } from "../../components/utils/TransitionLink";
// import React from "react";
import React, { useRef } from "react";
import Image from "next/image";

import { ReactLenis } from "@studio-freight/react-lenis";
import ProjectSlider from "../../components/SwiperCarousel/BuildProject";
import "./page.css";
export default function About() {
  return (
    <ReactLenis root>
      <section className="section-hero-title w-full relative h-[60vh] sm:h-[70vh] lg:h-[80vh]">
        {/* Hero Image */}
        <Image
          src="/images/project/pexels-may-abeki-1238188510-24033295.tif"
          alt="經典建築案例"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-[10%] text-white text-right z-10 px-4">
          <div className="flex ">
            <h1 className="text-4xl sm:text-5xl text-white tracking-wide">
              PROJECT
            </h1>
            <p className=" text-xl mt-5 ml-2 sm:text-4xl text-white font-normal">
              超越設想的心思量
            </p>
          </div>
        </div>
        ;
      </section>
      <ProjectSlider />
    </ReactLenis>
  );
}
