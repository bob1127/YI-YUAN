"use client"; // 需要在 Client Component 中使用 usePathname()
import { usePathname } from "next/navigation";
// import type { Metadata } from "next";
import "./globals.css";
import "yakuhanjp";
import { HeroUIProvider } from "@heroui/react";
import Header from "../components/header/index.jsx";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import ClientWrapper from "../components/ClientWrapper.jsx"; // 引入 Client Component

// export const metadata: Metadata = {
//   title: "Yi-Yuan 宜園建設 | 匠心打造，永續宜居 | 台中優質建案工程",
//   description:
//     "宜園建設，堅持「實在的構築」理念，以匠心工藝打造高品質永續住宅，為您實現理想家園。",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // 取得當前路徑
  const isHomePage = pathname === "/"; // 判斷是否為首頁

  return (
    <html lang="en">
      <HeroUIProvider>
        <body>
          <ClientWrapper>
            {/* 只有當不是首頁時才顯示 Header */}
            {!isHomePage && (
              <div className="w-[100vw] z-[9999999] left-0 top-0 fixed">
                <Header />
              </div>
            )}
            <main>{children}</main>
          </ClientWrapper>

          {/* 只有當不是首頁時才顯示 Footer */}
          {!isHomePage && (
            <footer className=" pb-[50px] lg:pb-[150px] z-[-1]  sm:pt-[100px] pt-[50px] lg:pt-[200px] flex flex-col justify-center items-center bg-[#f4efe3]">
              <div className="top 2xl:w-[70%]  w-[90%] lg:w-[85%]  md:mb-10 mb-0 lg:flex-row flex-col flex mx-auto">
                <div className="w-full lg:w-1/2">
                  <div className="navgation flex flex-col md:flex-row">
                    <div className="mr-3 lg:mt-0 mt-2 ">
                      <button className="relative text-[1.1rem] sm:text-[.9rem] bg-transparent after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        關於我們
                      </button>
                    </div>
                    <div className="mr-3 lg:mt-0 mt-2 ">
                      <button className="relative text-[1.1rem] sm:text-[.9rem] bg-transparent after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        新案鑑賞
                      </button>
                    </div>
                    <div className="mr-3 lg:mt-0 mt-2 ">
                      <button className="relative text-[1.1rem] sm:text-[.9rem] bg-transparent after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        經典選粹
                      </button>
                    </div>
                    <div className="mr-3 lg:mt-0 mt-2 ">
                      <button className="relative text-[1.1rem] sm:text-[.9rem] bg-transparent after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        建築思維
                      </button>
                    </div>
                    <div className="mr-3 lg:mt-0 mt-2 ">
                      <button className="relative text-[1.1rem] sm:text-[.9rem] bg-transparent after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        新聞中心
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-full lg:w-1/2  lg:mt-0 mt-10  ">
                  <div className="flex">
                    <div className="w-1/3 ">
                      <ul>
                        <div className="text-[1.1rem] font-bold mb-4">
                          PROJECT
                        </div>
                        <li className="text-[.9rem] mt-2">誠境二期</li>
                        <li className="text-[.9rem] mt-2">一青隱</li>
                        <li className="text-[.9rem] mt-2">誠境二期</li>
                        <li className="text-[.9rem] mt-2">宜園大院</li>
                      </ul>
                    </div>
                    <div className="w-1/3">
                      <ul>
                        <div className="text-[1.1rem] font-bold mb-4">
                          PROJECT
                        </div>
                        <li className="text-[.9rem] mt-2">誠境二期</li>
                        <li className="text-[.9rem] mt-2">一青隱</li>
                        <li className="text-[.9rem] mt-2">誠境二期</li>
                        <li className="text-[.9rem] mt-2">宜園大院</li>
                      </ul>
                    </div>
                    <div className="w-1/3">
                      <ul>
                        <div className="text-[1.1rem] font-bold mb-4">
                          PROJECT
                        </div>
                        <li className="text-[.9rem] mt-2">誠境二期</li>
                        <li className="text-[.9rem] mt-2">一青隱</li>
                        <li className="text-[.9rem] mt-2">誠境二期</li>
                        <li className="text-[.9rem] mt-2">宜園大院</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl:w-[70%]  w-[90%] lg:w-[85%] flex flex-col mt-[50px] lg:flex-row mx-auto bottom">
                <div className="w-full md:w-[55%] flex flex-col">
                  <div className="flex flex-row items-center">
                    <h2 className="font-extrabold text-[2.2rem] md:text-[4rem] text-nowrap mr-3">
                      Yi Yuan
                    </h2>

                    <p className="text-[1rem]">宜園建設</p>
                  </div>
                  <ul
                    className="sec-footer__social-list footer__list-social list-unstyled flex flex-row list-social"
                    role="list"
                  >
                    <li className=" mr-3 sec-footer__social-list-item list-social__item">
                      <a
                        href=""
                        className="sec-footer__social-link link list-social__link"
                        target="blank"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.6227 12.8412L2.76528 20.6685H5.80304L11.0519 14.6613L15.677 20.6698L21.6004 20.6375L14.0904 10.7066L20.4993 3.36546L17.5103 3.33203L12.6693 8.84913L8.52748 3.34104L2.40039 3.33439L9.6227 12.8412ZM18.013 18.8668L16.4801 18.862L5.94823 5.07402H7.59715L18.013 18.8668Z"
                            fill="#747369"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className=" mr-3 sec-footer__social-list-item list-social__item">
                      <a
                        href=""
                        className="sec-footer__social-link link list-social__link"
                        target="blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill="#747369"
                            d="M21.844 12c0-5.437-4.407-9.844-9.844-9.844-5.437 0-9.844 4.407-9.844 9.844 0 4.913 3.6 8.986 8.306 9.724v-6.879h-2.5V12h2.5V9.831c0-2.467 1.47-3.83 3.718-3.83 1.077 0 2.204.193 2.204.193v2.422h-1.242c-1.223 0-1.604.76-1.604 1.538V12h2.73l-.436 2.845h-2.294v6.88c4.706-.74 8.306-4.812 8.306-9.725Z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className=" mr-3 sec-footer__social-list-item list-social__item">
                      <a
                        href=""
                        className="sec-footer__social-link link list-social__link"
                        target="blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill="#747369"
                            d="M12 3.929c2.63 0 2.942.011 3.976.058.961.042 1.48.203 1.826.338.458.177.789.392 1.13.734.347.346.559.673.735 1.13.135.347.296.87.339 1.827.046 1.039.057 1.35.057 3.976 0 2.63-.011 2.942-.057 3.976-.043.962-.204 1.48-.339 1.827a3.045 3.045 0 0 1-.734 1.13 3.027 3.027 0 0 1-1.13.735c-.347.134-.87.296-1.827.338-1.038.046-1.35.058-3.976.058-2.63 0-2.942-.012-3.976-.058-.961-.042-1.48-.204-1.826-.338a3.044 3.044 0 0 1-1.13-.735 3.027 3.027 0 0 1-.735-1.13c-.135-.346-.296-.87-.339-1.827-.046-1.038-.057-1.35-.057-3.976 0-2.63.011-2.941.057-3.976.043-.961.204-1.48.339-1.826.177-.458.392-.788.734-1.13a3.028 3.028 0 0 1 1.13-.735c.347-.135.87-.296 1.827-.338C9.058 3.94 9.37 3.929 12 3.929Zm0-1.773c-2.672 0-3.007.012-4.057.058-1.046.046-1.765.215-2.388.458-.65.253-1.2.588-1.745 1.138a4.823 4.823 0 0 0-1.138 1.742c-.243.626-.412 1.342-.458 2.387-.046 1.054-.058 1.389-.058 4.061 0 2.672.012 3.007.058 4.057.046 1.046.215 1.765.458 2.388.253.65.588 1.2 1.138 1.745a4.811 4.811 0 0 0 1.742 1.135c.626.242 1.342.411 2.387.457 1.05.046 1.385.058 4.057.058 2.673 0 3.007-.012 4.057-.058 1.046-.046 1.765-.215 2.388-.457a4.811 4.811 0 0 0 1.742-1.135 4.813 4.813 0 0 0 1.134-1.742c.242-.626.411-1.342.457-2.387.047-1.05.058-1.385.058-4.057 0-2.673-.011-3.007-.058-4.057-.046-1.046-.215-1.765-.457-2.388a4.611 4.611 0 0 0-1.127-1.75 4.812 4.812 0 0 0-1.742-1.134c-.626-.242-1.342-.411-2.387-.457-1.054-.05-1.389-.062-4.061-.062Z"
                          ></path>
                          <path
                            fill="#747369"
                            d="M12 6.943a5.058 5.058 0 0 0 0 10.113A5.058 5.058 0 0 0 17.058 12a5.058 5.058 0 0 0-5.056-5.057Zm0 8.337a3.28 3.28 0 1 1 .002-6.561 3.28 3.28 0 0 1-.001 6.56ZM18.437 6.743a1.18 1.18 0 1 1-2.361 0 1.18 1.18 0 0 1 2.361 0Z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className=" mr-3 sec-footer__social-list-item list-social__item">
                      <a
                        href=""
                        className="sec-footer__social-link link list-social__link"
                        target="blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill="#747369"
                            d="M16.161 2.156h-3.318v13.41c0 1.598-1.276 2.91-2.864 2.91-1.588 0-2.864-1.312-2.864-2.91 0-1.569 1.248-2.853 2.779-2.91V9.29c-3.375.057-6.097 2.825-6.097 6.278 0 3.48 2.779 6.277 6.21 6.277 3.432 0 6.21-2.825 6.21-6.277V8.69a7.683 7.683 0 0 0 4.396 1.484V6.807c-2.495-.086-4.452-2.14-4.452-4.65Z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className=" mr-3 sec-footer__social-list-item list-social__item">
                      <a
                        href=""
                        className="sec-footer__social-link link list-social__link"
                        target="blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clip-path="url(#a)">
                            <path
                              fill="#747369"
                              d="M22.775 6.547a2.817 2.817 0 0 0-1.989-1.989c-1.756-.47-8.791-.47-8.791-.47s-7.036 0-8.79.47a2.817 2.817 0 0 0-1.989 1.99c-.47 1.753-.47 5.414-.47 5.414s0 3.662.47 5.415c.26.969 1.02 1.73 1.99 1.99 1.753.47 8.789.47 8.789.47s7.035 0 8.79-.47a2.817 2.817 0 0 0 1.988-1.99c.47-1.753.47-5.415.47-5.415s0-3.66-.47-5.415h.002Z"
                            ></path>
                            <path
                              fill="#fff"
                              d="m9.744 15.336 5.847-3.374-5.847-3.374v6.748Z"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="a">
                              <path
                                fill="#fff"
                                d="M.744 4.088h22.5v15.749H.744z"
                              ></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full sm:w-[45%] flex mt-10 lg:mt-0  justify-end ">
                  <div className="flex flex-col  w-full lg:w-3/4 justify-start items-start">
                    <p className="text-[.9rem] mt-3">地址：</p>
                    <p className="text-[.9rem] mt-3">電話：</p>
                    <p className="text-[.9rem] mt-3">Email:</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center pt-[100px]">
                <p className="text-gray-400 mr-10 font-light text-[.85rem]">
                  Copyright ©宜園建設
                </p>
                <a
                  href="https://www.jeek-webdesign.com.tw"
                  target="_blank"
                  className="text-gray-400 font-light text-[.85rem]"
                >
                  Design by 極客網頁設計
                </a>
              </div>
            </footer>
          )}
        </body>
      </HeroUIProvider>
    </html>
  );
}
