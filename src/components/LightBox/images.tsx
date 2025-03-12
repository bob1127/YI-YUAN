import { FC } from "react";

interface ImagesProps {
  data: {
    src?: string;
    title: string;
    description: string;
    borderRadius?: string;
    customStyle?: string;
  }[];
  onClick: (index: number) => void;
}

const Images: FC<ImagesProps> = ({ data, onClick }) => {
  return (
    <div className="wrapper   p-[50px]">
      <div className="container p-2 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] auto-rows-[125px] gap-2 grid-flow-dense mx-auto max-w-[1400px]">
        {data.map((slide, index) => (
          <div
            key={index}
            className={`relative flex justify-center items-center  overflow-hidden ${getGridArea(
              index
            )} ${slide.customStyle || ""}`}
            onClick={() => onClick(index)}
          >
            {slide.src ? (
              <img
                src={slide.src}
                alt={slide.description}
                className={`w-full border border-black h-full object-cover ${
                  slide.borderRadius || ""
                }`}
              />
            ) : (
              <div className="w-full h-full   p-2 grid items-center text-center border-radius-custom">
                {slide.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const getGridArea = (index: number) => {
  const areas = [
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
  ];
  return areas[index] || "col-span-1 row-span-1";
};

export default Images;
