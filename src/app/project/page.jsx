import { TextAnimate } from "../../components/magicui/text-animate";
// import InfiniteCarousel from "../../components/InfiniteCarousel/page";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import SwiperCarousel from "../../components/SwiperCarousel/SwiperCard";
import Image from "next/image";
export default function Pricing() {
  return (
    <main className="p-4 text-center">
      <section className="mt-20">
        <div className="flex">
          <div className="w-1/2  items-center justify-center flex-col">
            <div className="txt">
              <TextAnimate
                className="!text-[50px]"
                animation="blurInUp"
                by="character"
                once
              >
                宜園大院
              </TextAnimate>
              <TextAnimate
                className="!text-[16px] px-[50px]"
                animation="blurInUp"
                by="character"
                once
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                fugit repudiandae vitae ullam. Quos incidunt suscipit totam,
                facere amet aliquid accusantium harum debitis beatae vitae
                aliquam et quae delectus maxime?
              </TextAnimate>
            </div>
            <div>
              {" "}
              <SwiperCarousel />
            </div>
          </div>
          <div className="w-1/2 relative">
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
      </section>
    </main>
  );
}
