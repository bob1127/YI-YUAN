import { useEffect } from "react";
import gsap from "gsap";
import "./page.css";
const items = [
  {
    id: 1,
    imgSrc: "/images/img01.jpg",
    number: "07",

    bottomLeft: "宜園建設，打造理想生活空間，讓家的每一刻都值得珍藏。",
  },
  {
    id: 2,
    imgSrc: "/images/img02.jpg",
    number: "一清影",

    bottomLeft: "0wastewear",
  },
  {
    id: 3,
    imgSrc: "/images/img02.jpg",
    number: "一清影",

    bottomLeft: "0wastewear",
  },
];

const Codegrid = () => {
  return (
    <div className="items">
      {items.map(({ id, imgSrc, number, bottomLeft }) => (
        <div className="item-wrapper flex flex-wrap " key={id}>
          <div className="item ">
            <div className="item-img">
              <img src={imgSrc} alt="" />
            </div>
            <div className="item-copy">
              <div className="item-copy-2">
                <div className="shape text-white"></div>
              </div>
              <div className="item-copy-1">
                <div className="shape flex flex-col items-start">
                  <div className="text-left w-[85%] text-[24px] text-white">
                    {[...bottomLeft].map((char, idx) => (
                      <span key={idx}>{char}</span>
                    ))}
                  </div>
                  <div
                    id="number"
                    className="text-white text-[16px] flex justify-center items-center"
                  >
                    <p className="text-[16px] mr-4 font-light"> project</p>
                    {[...number].map((char, idx) => (
                      <span className="text-[4.5vmin]" key={idx}>
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom p-10  flex flex-col  ">
            <div className="date font-normal text-[14px] text-gray-600 mt-5">
              日期：2025/01/01
            </div>
            <div className="link mt-5">
              <button
                role="link"
                class="relative font-extrabold text-[18px] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                橋梁補修工事（その３）（週休２日・遠隔臨場）
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Codegrid;
