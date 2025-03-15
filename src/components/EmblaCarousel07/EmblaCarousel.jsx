import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton.jsx";

const EmblaCarousel = (props) => {
  const { slides, options, thumbnails } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="w-full">
      {/* 主幻燈片 */}
      <div className="w-full">
        <div className="embla bg-[#f5f5f5]  w-full sm:-2 p-0 lg:p-10 mx-auto">
          <div
            className="embla__viewport sm:w-[90%] w-full lg:w-[70%] mx-auto border border-red-800 overflow-hidden"
            ref={emblaMainRef}
          >
            <div className="embla__container  flex touch-pan-y touch-pinch-zoom -ml-[1rem]">
              {slides.map((imageUrl, index) => (
                <div
                  className="embla__slide flex-none min-w-0 pl-[1rem]"
                  key={index}
                  style={{
                    flexBasis: "100%",
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "500px",

                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {/* 可選擇在這裡加上 overlay 或者標題 */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 縮略圖 */}
        <div className="embla-thumbs mt-[0.8rem]">
          <div
            className="embla-thumbs__viewport overflow-hidden"
            ref={emblaThumbsRef}
          >
            <div className="embla-thumbs__container  flex -ml-[0.8rem]">
              {thumbnails.map((thumbUrl, index) => (
                <Thumb
                  key={index}
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  className="rounded-none"
                  imageUrl={thumbUrl} // ✅ 傳遞縮略圖圖片
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
