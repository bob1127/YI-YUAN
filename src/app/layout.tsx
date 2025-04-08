"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import "yakuhanjp";
import { HeroUIProvider } from "@heroui/react";
import Header from "../components/header/index.jsx";
import ClientWrapper from "../components/ClientWrapper.jsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // ✅ 修正卡住滾動的 bug：每次進入頁面都清除 .page-transition
  useEffect(() => {
    document.body.classList.remove("page-transition");
    sessionStorage.removeItem("transitioning"); // 順便清除狀態
  }, []);

  return (
    <html lang="en">
      <HeroUIProvider>
        <body className="overflow-hidden">
          <ClientWrapper>
            {!isHomePage && (
              <div className="w-[100vw] z-[9999999] left-0 top-0 fixed">
                <Header />
              </div>
            )}
            <main>{children}</main>
          </ClientWrapper>

          {!isHomePage && (
            <footer className="pb-[50px] lg:pb-[150px] z-[-1] sm:pt-[100px] pt-[50px] lg:pt-[200px] flex flex-col justify-center items-center bg-[#f4efe3]">
              {/* ... footer內容不變，略去 ... */}
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
