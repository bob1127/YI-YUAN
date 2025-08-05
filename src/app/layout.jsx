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
              <footer className="section-footer  py-4 sm:py-[20px]   px-[30px] sm:px-[50px] md:px-[100px] bg-[#474141]">
                <div className="flex sm:w-[90%] w-full lg:w-[80%] mx-auto flex-col md:flex-row ">
                  <div className="left flex flex-col justify-between mt-5 w-full md:w-[50%]">
                    <div className="flex flex-col">
                      <b className="text-[1.1rem] text-white font-bold">
                        宜園建設股份有限公司
                      </b>
                      <b className="text-[.9rem] text-[#d9d9d9] mt-2 font-light">
                        臺中市北區賴興里文心路四段212號10樓之2
                      </b>
                      <p className="text-[.8rem] text-[#d9d9d9] font-light">
                        PHONE: 04-22978188
                      </p>
                    </div>
                    <div className="flex mt-4 social-media">
                      <Link
                        href="https://www.facebook.com/%E5%AE%9C%E5%9C%92%E5%BB%BA%E8%A8%AD-100063749781596/?wtsid=rdr_03dfhLEjozbKUYktM"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                          className="mr-2"
                        >
                          <linearGradient
                            id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                            x1="9.993"
                            x2="40.615"
                            y1="9.993"
                            y2="40.615"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#2aa4f4"></stop>
                            <stop offset="1" stop-color="#007ad9"></stop>
                          </linearGradient>
                          <path
                            fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                            d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                          ></path>
                        </svg>
                      </Link>
                      <Link href="mailto:yi.yuan@msa.hinet.net">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="45"
                          height="45"
                          viewBox="0 0 48 48"
                          className="mr-2"
                        >
                          <path
                            fill="#1e88e5"
                            d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z M12.074,17.488C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512 L18.586,24L12.074,17.488z"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="right mt-3  items-center justify-center w-full md:w-[50%]  flex flex-row">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.645756798055!2d120.67565527588012!3d24.172904872433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44766439ed9d2f13%3A0x7915785e2ed054c3!2z5a6c5ZyS5bu66Kit6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1754358378407!5m2!1szh-TW!2stw"
                      width="600"
                      height="150"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="flex justify-center flex-col items-center pt-8 pb-4">
                  <div className="w-full text-center py-4 text-sm text-gray-50 ">
                    © {new Date().getFullYear()} 宜園建設股份有限公司 版權所有
                  </div>
                  <div>
                    {" "}
                    <Link
                      href="https://www.jeek-webdesign.com.tw"
                      target="_black"
                    >
                      <span className="text-[14px] text-gray-200">
                        Design by Jeek WebDesign
                      </span>
                    </Link>
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
