"use client";
import { useRef } from "react";
import "./photos.css";
import { Card, CardHeader, CardBody } from "@heroui/react";
import HoverCard from "../../components/HoverCard/index.jsx";
import React from "react";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation.tsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import Image from "next/image";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards.tsx";
import ScrollAnimation from "../../components/ScrollAnimation/page.jsx";
import { AnimatePresence, motion } from "framer-motion";
gsap.registerPlugin(CustomEase);

const Photos = () => {
  const sliderImagesRef = useRef(null);
  const counterRef = useRef(null);
  const titlesRef = useRef(null);
  const indicatorsRef = useRef(null);
  const previewsRef = useRef(null);
  const sliderRef = useRef(null);

  return (
    <>
      <section className="section_hero relative overflow-hidden h-[100vh] border border-black">
        <Image
          src="/images/city-img_sp.png"
          alt=" "
          placeholder="empty"
          loading="lazy"
          width={2820}
          height={700}
          className="w-full h-full absolute z-[9] mt-[15vh] top-0 left-0"
        ></Image>
        <BackgroundGradientAnimation></BackgroundGradientAnimation>
        <Image
          src="/images/top-copy.png.webp"
          alt=" "
          placeholder="empty"
          loading="lazy"
          width={820}
          height={300}
          className=" absolute left-[35%]  top-[0%] z-[99999999]"
        ></Image>
      </section>
      <div className=" mt-[-20vh] ">
        <InfiniteMovingCards
          speed={800}
          items={[
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/IMG_3175-1.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/IMG_3323_edit.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-05.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-07.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-07.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-01.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/IMG_3175-1.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/IMG_3323_edit.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-05.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-07.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-07.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-01.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/IMG_3175-1.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/IMG_3323_edit.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-05.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-07.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-07.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-01.jpg",
          ]}
        />
      </div>

      <section className="section_news py-[50px]">
        <div className="w-[80%] flex flex-col xl:flex-row section-container mx-auto">
          <div className="w-full xl:w-[50%]">
            <div className="flex flex-col">
              <h2 className="text-[9vmin] font-bold">NEWS</h2>
              <b>新公告</b>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <div>
              <ul>
                <li className="border-b-1 py-[40px] hover:scale-105 duration-400">
                  <div className="flex w-auto flex-col">
                    <p>2025/01/01</p>
                    <button
                      role="link"
                      class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                    >
                      慶祝宜園大院 動土典禮活動紀錄
                    </button>
                  </div>
                </li>
                <li className="border-b-1 py-[40px] hover:scale-105 duration-400">
                  <div className="flex w-auto flex-col">
                    <p>2025/01/01</p>
                    <button
                      role="link"
                      class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                    >
                      慶祝宜園大院 動土典禮活動紀錄
                    </button>
                  </div>
                </li>
                <li className="border-b-1 py-[40px] hover:scale-105 duration-400">
                  <div className="flex w-auto flex-col">
                    <p>2025/01/01</p>
                    <button
                      role="link"
                      class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                    >
                      慶祝宜園大院 動土典禮活動紀錄
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[0px] overflow-hidden w-[95%] xl:w-[85%] mx-auto xl:flex-row flex-col flex">
        <div className="w-full xl:w-[70%] ">
          <ScrollAnimation />
        </div>
        <div className="w-full xl:w-[30%] pt-0  xl:pt-[10%] pb-20  ">
          <div className="bg-white mt-20 w-full h-[400px] p-10">
            <h3>title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              molestiae eligendi et, ex ratione mollitia, accusamus amet, neque
              iure labore officia deserunt placeat laborum quis incidunt.
              Perferendis voluptates enim architecto!
            </p>
          </div>
        </div>
      </section>
      <section>
        <HoverCard />
      </section>
    </>
  );
};

export default Photos;
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
