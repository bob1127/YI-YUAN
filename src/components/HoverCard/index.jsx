import { useEffect } from "react";
import gsap from "gsap";
import "./page.css";
import { TransitionLink } from "../utils/TransitionLink";

const items = [
  {
    id: 1,
    imgSrc: "/images/img01.jpg",
    number: "動土典禮",
    textLeft: "活動照片",
    textRight: "active",
    bottomLeft: "紀錄",
  },
  {
    id: 1,
    imgSrc: "/images/img01.jpg",
    number: "動土典禮",
    textLeft: "活動照片",
    textRight: "active",
    bottomLeft: "紀錄",
  },
  {
    id: 1,
    imgSrc: "/images/img01.jpg",
    number: "動土典禮",
    textLeft: "活動照片",
    textRight: "active",
    bottomLeft: "紀錄",
  },
  {
    id: 1,
    imgSrc: "/images/img01.jpg",
    number: "動土典禮",
    textLeft: "活動照片",
    textRight: "active",
    bottomLeft: "紀錄",
  },
  {
    id: 1,
    imgSrc: "/images/img01.jpg",
    number: "動土典禮",
    textLeft: "活動照片",
    textRight: "active",
    bottomLeft: "紀錄",
  },
  {
    id: 1,
    imgSrc: "/images/img01.jpg",
    number: "動土典禮",
    textLeft: "活動照片",
    textRight: "active",
    bottomLeft: "紀錄",
  },
];

const Codegrid = () => {
  useEffect(() => {
    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("mouseenter", function () {
        gsap.set(this.querySelectorAll("span"), { opacity: 0 });
        gsap.to(this.querySelectorAll("span"), {
          opacity: 1,
          duration: 0.075,
          stagger: {
            from: "random",
            each: 0.02,
          },
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", function () {
        gsap.to(this.querySelectorAll("span"), {
          opacity: 0,
          duration: 0.075,
          stagger: {
            from: "random",
            each: 0.02,
          },
          ease: "power2.in",
        });
      });
    });
  }, []);

  return (
    <div className="items">
      {items.map(({ id, imgSrc, number, textLeft, textRight, bottomLeft }) => (
        <div className="item-wrapper flex flex-wrap " key={id}>
          <div className="item ">
            <div className="item-img">
              <img src={imgSrc} alt="" />
            </div>

            <div className="item-copy">
              <div className="item-copy-1">
                <div className="shape">
                  <div id="number">
                    {[...number].map((char, idx) => (
                      <span key={idx}>{char}</span>
                    ))}
                  </div>
                  <div className="text-right">
                    {[...textRight].map((char, idx) => (
                      <span key={idx}>{char}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="item-copy-2">
                <div className="shape">
                  <div>
                    {[...textLeft].map((char, idx) => (
                      <span key={idx}>{char}</span>
                    ))}
                  </div>
                  <div className="text-right">
                    {[...bottomLeft].map((char, idx) => (
                      <span key={idx}>{char}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom p-10  flex flex-col  ">
            <div className="btn-wrap flex">
              <TransitionLink href="/news-inner">
                <button class="group mr-4 relative inline-flex h-12 items-center justify-center overflow-hidden border border-neutral-200 bg-white font-medium">
                  <div class="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
                    了解更多
                  </div>
                  <div class="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                    <span class="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-black transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                    <span class="z-10">NEWS</span>
                  </div>
                </button>
              </TransitionLink>
              <TransitionLink href="/news-inner">
                <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden border border-neutral-200 bg-white font-medium">
                  <div class="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
                    了解更多
                  </div>
                  <div class="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                    <span class="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-black transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                    <span class="z-10">NEWS</span>
                  </div>
                </button>
              </TransitionLink>
            </div>
            <div className="date font-normal text-[14px] text-gray-600 mt-5">
              日期：2025/01/01
            </div>
            <div className="link mt-5">
              <TransitionLink href="/news-inner">
                <button
                  role="link"
                  class="relative font-extrabold text-[1rem] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  慶祝宜園大院 動土典禮活動紀錄
                </button>
              </TransitionLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Codegrid;
