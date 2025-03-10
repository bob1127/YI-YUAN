import { TextAnimate } from "../../components/magicui/text-animate";
// import InfiniteCarousel from "../../components/InfiniteCarousel/page";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import SwiperCarousel from "../../components/SwiperCarousel/SwiperCard";
import Image from "next/image";
import SvgImg from "../../components/SVGImage";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
export default function Pricing() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <main className="p-4 text-center">
      <section>
        <SvgImg />
      </section>
      {/* <section className="mt-20 p-[100px]">
        <div className="flex">
          <div className="w-1/2  items-center justify-center flex-col">
            <div className="w-full h-full py-20">
              <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                新案件賞
              </h2>
              <Carousel items={cards} />
            </div>
          </div>
          <div className="w-1/2 relative   ">
            <div className="absolute w-full top-1/2 z-[999]">
              <Popover
                showArrow
                backdrop="opaque"
                classNames={{
                  base: [
                    // arrow color
                    "before:bg-default-200",
                  ],
                  content: [
                    "py-3 px-4 border border-default-200",
                    "bg-gradient-to-br from-white to-default-300",
                    "dark:from-default-100 dark:to-default-50",
                  ],
                }}
                placement="right"
              >
                <PopoverTrigger>
                  <Button>第二層樓</Button>
                </PopoverTrigger>
                <PopoverContent className="!w-[100%]">
                  <h4 className="text-center font-bold my-3 text-[20px]">
                    樓層介紹
                  </h4>
                  <br></br>
                  <Image
                    src="/images/img1.jpg"
                    placeholder="empty"
                    loading="lazy"
                    className="rounded-xl"
                    width={450}
                    height={300}
                  ></Image>
                  <br></br>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br></br>
                </PopoverContent>
              </Popover>
            </div>
            <Image
              src="/assets/oaphoto11_edit_1.jpg"
              placeholder="empty"
              loading="lazy"
              width={600}
              height={1000}
            ></Image>
          </div>
        </div>
      </section> */}
    </main>
  );
}
const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "New Project",
    title: "新案件賞-01",
    src: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: <DummyContent />,
  },
  {
    category: "New Project",
    title: "新案件賞-01",
    src: "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: <DummyContent />,
  },
  {
    category: "New Project",
    title: "新案件賞-01",
    src: "https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: <DummyContent />,
  },

  {
    category: "New Project",
    title: "新案件賞-01",
    src: "https://images.pexels.com/photos/30349784/pexels-photo-30349784.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    content: <DummyContent />,
  },
  {
    category: "New Project",
    title: "新案件賞-01",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "New Project",
    title: "新案件賞-01",
    src: "https://images.pexels.com/photos/11595929/pexels-photo-11595929.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    content: <DummyContent />,
  },
];
