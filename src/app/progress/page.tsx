"use client";
import { TransitionLink } from "../../components/utils/TransitionLink";
import ParallaxImage from "../../components/ParallaxImage";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Timeline } from "@/components/ui/timeline";
import "./about.css";
import Framer from "../../components/FramerMotionParallax/page";
import SvgImg from "../../components/SvgImg/page.jsx";
import { EvervaultCard, Icon } from "../../components/ui/evervault-card";
import Marquee from "react-fast-marquee";

// import Carousel from "@/components/ui/carousel";
// import InfiniteCarousel from "../../components/InfiniteCarousel/page";
import Image from "next/image";
export default function About() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const data = [
    {
      title: "2024 年 3 月｜最新工程進度",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            第一階段：地下室工程完成（基礎結構已完工，進入地上層施作）
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/inasato71.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/RIMG6747.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 年 3 月｜最新工程進度",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            第一階段：地下室工程完成（基礎結構已完工，進入地上層施作）
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/inasato71.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/RIMG6747.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 年 3 月｜最新工程進度",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            第一階段：地下室工程完成（基礎結構已完工，進入地上層施作）
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/inasato71.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/RIMG6747.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <ReactLenis root>
      <div className="w-full overflow-hidden ">
        <Timeline data={data} />
      </div>
      <Marquee>
        <div className="flex py-10 mt-[200px] flex-row">
          <div className="border mx-5 hover:bg-white group border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard
              text="hover"
              backgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              hoverBackgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              className="group-hover:scale-105 duration-1000"
            />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              感謝您對本建案的支持與關注！為了讓您即時掌握最新的施工進度，我們將定期更新工程狀況，確保施工品質與安全，敬請安心期待您的理想家園。
            </h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              More
            </p>
          </div>
          <div className="border mx-5 hover:bg-white group border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard
              text="hover"
              backgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              hoverBackgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              className="group-hover:scale-105 duration-1000"
            />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              感謝您對本建案的支持與關注！為了讓您即時掌握最新的施工進度，我們將定期更新工程狀況，確保施工品質與安全，敬請安心期待您的理想家園。
            </h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              More
            </p>
          </div>
          <div className="border mx-5 hover:bg-white group border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard
              text="hover"
              backgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              hoverBackgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              className="group-hover:scale-105 duration-1000"
            />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              感謝您對本建案的支持與關注！為了讓您即時掌握最新的施工進度，我們將定期更新工程狀況，確保施工品質與安全，敬請安心期待您的理想家園。
            </h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              More
            </p>
          </div>
          <div className="border mx-5 hover:bg-white group border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard
              text="hover"
              backgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              hoverBackgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              className="group-hover:scale-105 duration-1000"
            />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              感謝您對本建案的支持與關注！為了讓您即時掌握最新的施工進度，我們將定期更新工程狀況，確保施工品質與安全，敬請安心期待您的理想家園。
            </h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              More
            </p>
          </div>
          <div className="border mx-5 hover:bg-white group border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard
              text="hover"
              backgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              hoverBackgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              className="group-hover:scale-105 duration-1000"
            />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              感謝您對本建案的支持與關注！為了讓您即時掌握最新的施工進度，我們將定期更新工程狀況，確保施工品質與安全，敬請安心期待您的理想家園。
            </h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              More
            </p>
          </div>
          <div className="border mx-5 hover:bg-white group border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard
              text="hover"
              backgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              hoverBackgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              className="group-hover:scale-105 duration-1000"
            />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              感謝您對本建案的支持與關注！為了讓您即時掌握最新的施工進度，我們將定期更新工程狀況，確保施工品質與安全，敬請安心期待您的理想家園。
            </h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              More
            </p>
          </div>
          <div className="border mx-5 hover:bg-white group border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard
              text="hover"
              backgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              hoverBackgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              className="group-hover:scale-105 duration-1000"
            />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              感謝您對本建案的支持與關注！為了讓您即時掌握最新的施工進度，我們將定期更新工程狀況，確保施工品質與安全，敬請安心期待您的理想家園。
            </h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              More
            </p>
          </div>
          <div className="border mx-5 hover:bg-white group border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard
              text="hover"
              backgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              hoverBackgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              className="group-hover:scale-105 duration-1000"
            />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              感謝您對本建案的支持與關注！為了讓您即時掌握最新的施工進度，我們將定期更新工程狀況，確保施工品質與安全，敬請安心期待您的理想家園。
            </h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              More
            </p>
          </div>
          <div className="border mx-5 hover:bg-white group border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard
              text="hover"
              backgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              hoverBackgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              className="group-hover:scale-105 duration-1000"
            />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              感謝您對本建案的支持與關注！為了讓您即時掌握最新的施工進度，我們將定期更新工程狀況，確保施工品質與安全，敬請安心期待您的理想家園。
            </h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              More
            </p>
          </div>
          <div className="border mx-5 hover:bg-white group border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard
              text="hover"
              backgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              hoverBackgroundImage="/images/hadashinoie016-2048x1365.jpg.webp"
              className="group-hover:scale-105 duration-1000"
            />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              感謝您對本建案的支持與關注！為了讓您即時掌握最新的施工進度，我們將定期更新工程狀況，確保施工品質與安全，敬請安心期待您的理想家園。
            </h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              More
            </p>
          </div>
        </div>
      </Marquee>
      {/* <Framer /> */}
    </ReactLenis>
  );
}
