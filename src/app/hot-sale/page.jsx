"use client";

import { projects } from "../../components/ParallaxCard/data";
import Card from "../../components/ParallaxCard/page";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <h1 className="mt-[20vh] ml-[20px] md:ml-[10%]  mb-[-15px] lg:mb-[-30px] text-[2.3rems] md:text-[3rem] xl:text-[5rem] font-normal text-gray-800">
        TENDER-宜安
      </h1>
      <main ref={container} className=" relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
      <section>
        <div className="flex  flex-row">
          <div className="w-[10%]">
            <Image
              src="https://niwahouzing.com/wp-content/uploads/2024/10/b54091b9ea851f9c8810b52e50cbc14b-17.jpg"
              placeholder="empty"
              loading="lazy"
              alt=""
              width={500}
              height={800}
            ></Image>
          </div>
          <div className="w-[80%]"></div>
          <div className="w-[10%]"></div>
        </div>
      </section>
    </>
  );
}
