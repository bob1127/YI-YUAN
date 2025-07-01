"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import "yakuhanjp";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { ViewTransitions } from "next-view-transitions";
import Menu from "../components/Menu/Menu"; // 改為 default import
import { HeroUIProvider } from "@heroui/react";
import Header from "../components/header/index.jsx";
import ClientWrapper from "../components/ClientWrapper.jsx";
import Footer from "../components/Footer/Footer1";
import Link from "next/link";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // ✅ 修正卡住滾動的 bug：每次進入頁面都清除 .page-transition
  useEffect(() => {
    document.body.classList.remove("page-transition");
    sessionStorage.removeItem("transitioning"); // 順便清除狀態
  }, []);
  const placeholders = [
    "理想的家，該具備哪些元素？",
    "選擇房子時，你最在意什麼？",
    "如何找到兼具品質與舒適的住宅？",
    "買房是投資還是生活選擇？",
    "未來的家，會是什麼模樣？",
  ];
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <html lang="en">
      <ViewTransitions>
        <HeroUIProvider>
          <body className="">
            <ClientWrapper>
              {!isHomePage && (
                <div className="w-[100vw] z-[9999999] left-0 top-0 fixed">
                  <div className="hidden md:block">
                    <Menu />
                  </div>
                  <div className="block md:hidden">
                    <Header />
                  </div>
                </div>
              )}
              <main>{children}</main>
            </ClientWrapper>
            {!isHomePage && (
              <footer className="section-footer  py-[40px] md:py-[40px] 2xl:py-[90px] px-[30px] sm:px-[50px] md:px-[100px] bg-[#474141]">
                <div className="flex sm:w-[90%] w-full lg:w-[80%] mx-auto flex-col md:flex-row border-t-1  border-[#c7c7c7]">
                  <div className="left flex flex-col justify-between mt-5 w-full md:w-[50%]">
                    <div className="flex flex-col">
                      <b className="text-[1.1rem] text-white font-bold">
                        宜園建設
                      </b>
                      <b className="text-[.9rem] text-[#d9d9d9] mt-2 font-light">
                        臺中市北區賴興里文心路四段212號10樓之2
                      </b>
                    </div>
                    <div className="flex flex-col mt-8">
                      <p className="text-[.8rem] text-[#d9d9d9] font-light">
                        PHONE: 04-22978188
                      </p>
                      <p className="text-[.8rem] text-[#d9d9d9] font-light">
                        <a
                          href="mailto:yi.yuan@msa.hinet.net"
                          className="text-[#d9d9d9]"
                        >
                          EMAIL: yi.yuan@msa.hinet.net
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="right mt-[40px] md:mt-5 justify-center items-center md:justify-end md:items-end w-full md:w-[50%] flex flex-row">
                    <div className="flex justify-center  pr-0 md:pr-[80px] social-media">
                      <Link href="" target="_blank">
                        <svg
                          role="img"
                          aria-label="Facebook"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#cfcfcf]" // Facebook 藍色，可自訂 text-white / text-black
                        >
                          <path
                            d="M22 11.0672C22 16.5913 17.9773 21.17 12.7188 22V14.2663H15.2818L15.7695 11.0672H12.7188V8.99126C12.7188 8.11582 13.145 7.26287 14.5114 7.26287H15.8984V4.53929C15.8984 4.53929 14.6395 4.32313 13.4359 4.32313C10.9235 4.32313 9.28125 5.85525 9.28125 8.62898V11.0672H6.48828V14.2663H9.28125V22C4.02273 21.17 0 16.5913 0 11.0672C0 4.95518 4.92508 0 11 0C17.0749 0 22 4.95518 22 11.0672Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="flex flex-col  items-end justify-end pr-[50px]">
                      <span className="text-[.9rem] group flex items-center text-right  font-light text-[#e0e0e0]">
                        GO PROJECT
                        <button class=" relative ml-3 inline-flex h-10 w-10 items-center justify-center z-[1] overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
                          <div class="translate-x-0 transition group-hover:translate-x-[300%]">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5"
                            >
                              <path
                                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5"
                            >
                              <path
                                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </span>
                      <span className="font-extralight text-nowrap text-[.8rem] text-right mt-[100px] text-[#e0e0e0]">
                        2013-2025 Yi Yuan Inc.
                      </span>
                    </div>
                  </div>
                </div>
              </footer>
            )}
          </body>
        </HeroUIProvider>
      </ViewTransitions>
    </html>
  );
}
