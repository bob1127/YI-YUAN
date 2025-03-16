"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroComponent = () => {
  const heroRef = useRef(null);
  const blobsRef = useRef([]);
  const blobsRef02 = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current.children, {
        opacity: 0,
        y: 60,
        ease: "power3.inOut",
        delay: 1,
        duration: 1,
        stagger: 0.2,
      });

      gsap.from(blobsRef.current, {
        scale: 0,
        ease: "power3.inOut",
        delay: 1.5,
        duration: 2,
        stagger: 0.3,
      });
      gsap.from(blobsRef02.current, {
        scale: 0,
        ease: "power3.inOut",
        delay: 2.5,
        duration: 2.5,
        stagger: 0.4,
      });
      gsap.from(bgRef.current, {
        scale: 0,
        ease: "power3.inOut",
        delay: 2,
        duration: 2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative  w-full my-[100px] 2xl:w-[70%] mx-auto">
      <div
        ref={(el) => (blobsRef02.current[0] = el)}
        className="absolute top-[-15%] w-[80vmin] sm:top-0 left-[-40%] sm:left-[0%] "
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 500"
          width="1100"
          height="500"
          className="absolute"
        >
          <defs>
            <pattern
              id="imagePattern1"
              patternUnits="userSpaceOnUse"
              width="500"
              height="500"
            >
              <image
                href="/images/lookbook.png"
                x="0"
                y="0"
                width="500"
                height="500"
              />
            </pattern>
          </defs>

          <path
            fill="url(#imagePattern1)"
            className="left-0 absolute"
            transform="translate(0,0)"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M421.6,307.3Q364.7,364.7,307.3,427.4Q250,490,191.6,428.3Q133.3,366.6,70.9,308.3Q8.4,250,54.2,174.9Q99.9,99.9,174.9,81.4Q250,63,330.6,75.8Q411.3,88.6,444.9,169.3Q478.4,250,421.6,307.3Z;
                M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;
                M408.2,332.6Q415.2,415.2,332.6,434.7Q250,454.1,179.3,422.7Q108.6,391.3,65.8,320.6Q23,250,63.2,176.7Q103.4,103.4,176.7,63Q250,22.5,311.8,74.4Q373.7,126.2,387.4,188.1Q401.2,250,408.2,332.6Z;
                M421.6,307.3Q364.7,364.7,307.3,427.4Q250,490,191.6,428.3Q133.3,366.6,70.9,308.3Q8.4,250,54.2,174.9Q99.9,99.9,174.9,81.4Q250,63,330.6,75.8Q411.3,88.6,444.9,169.3Q478.4,250,421.6,307.3Z;
              "
            />
          </path>
        </svg>
      </div>
      <div
        ref={(el) => (blobsRef.current[0] = el)}
        className="absolute top-[20%] sm:top-0  right-[10%] w-[40vmin] h-[500px]"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 500"
          width="900"
          height="500"
          className="absolute"
        >
          <defs>
            <pattern
              id="imagePattern1"
              patternUnits="userSpaceOnUse"
              width="700"
              height="700"
            >
              <image
                href="/images/lookbook.png"
                x="0"
                y="0"
                width="500"
                height="500"
              />
            </pattern>
          </defs>

          <path
            fill="url(#imagePattern1)"
            className="left-0 absolute"
            transform="translate(0,0)"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M421.6,307.3Q364.7,364.7,307.3,427.4Q250,490,191.6,428.3Q133.3,366.6,70.9,308.3Q8.4,250,54.2,174.9Q99.9,99.9,174.9,81.4Q250,63,330.6,75.8Q411.3,88.6,444.9,169.3Q478.4,250,421.6,307.3Z;
                M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;
                M408.2,332.6Q415.2,415.2,332.6,434.7Q250,454.1,179.3,422.7Q108.6,391.3,65.8,320.6Q23,250,63.2,176.7Q103.4,103.4,176.7,63Q250,22.5,311.8,74.4Q373.7,126.2,387.4,188.1Q401.2,250,408.2,332.6Z;
                M421.6,307.3Q364.7,364.7,307.3,427.4Q250,490,191.6,428.3Q133.3,366.6,70.9,308.3Q8.4,250,54.2,174.9Q99.9,99.9,174.9,81.4Q250,63,330.6,75.8Q411.3,88.6,444.9,169.3Q478.4,250,421.6,307.3Z;
              "
            />
          </path>
        </svg>
      </div>
      <div
        ref={(el) => (blobsRef.current[1] = el)}
        className="blob-2 blob"
      ></div>
      <div ref={(el) => (blobsRef.current[2] = el)} className="blob-3 blob">
        +
      </div>

      <div
        ref={bgRef}
        className="bg-gradient  absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          width="100%"
          id="blobSvg"
          className="opacity-100"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "rgb(248, 121, 21)" }} />
              <stop offset="100%" style={{ stopColor: "rgb(255, 201, 69)" }} />
            </linearGradient>
          </defs>
          <path id="blob" fill="url(#gradient)">
            <animate
              attributeName="d"
              dur="4s"
              repeatCount="indefinite"
              values="M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;"
            ></animate>
          </path>
        </svg>
      </div>

      <div className="hero-container relative z-10 w-full">
        <div ref={heroRef} className="hero w-1/3 mx-auto text-center py-16">
          <h1 className="font-voyage font-medium text-[5.5vmin] leading-tight">
            宜園建設
          </h1>
          <button class="group relative h-12   px-4 text-neutral-950">
            <span class="relative inline-flex overflow-hidden">
              <div class="translate-y-0 skew-y-0 text-black transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12 text-[20px] font-bold">
                更多詳情
              </div>
              <div class="absolute translate-y-[110%] skew-y-12 text-[20px] font-bold  transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                建案詳情
              </div>
            </span>
          </button>
          <p className="mt-16 leading-[32px] text-sm font-neue">
            在繁忙的生活中，我們渴望一處溫暖的歸屬，一個能夠安放心靈的家。怡園建設，細心打造每一處空間，讓陽光灑落的角落充滿溫度，讓微風輕拂的窗前滿載幸福。
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
