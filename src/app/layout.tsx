"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import "yakuhanjp";
import { ViewTransitions } from "next-view-transitions";

import Navs from "../components/Nav";
import { HeroUIProvider } from "@heroui/react";
import Header from "../components/header/index.jsx";
import ClientWrapper from "../components/ClientWrapper.jsx";
import Footer from "../components/Footer/Footer1";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // ✅ 修正卡住滾動的 bug：每次進入頁面都清除 .page-transition
  // useEffect(() => {
  //   document.body.classList.remove("page-transition");
  //   sessionStorage.removeItem("transitioning"); // 順便清除狀態
  // }, []);

  return (
    <ViewTransitions>
      <html lang="en">
        <body className="">
          {!isHomePage && (
            <div className="w-[100vw] z-[9999999] left-0 top-0 fixed">
              <Header />
              {/* <Navs /> */}
            </div>
          )}
          <main data-aos-duration="fade-up">{children}</main>

          {!isHomePage && <Footer />}
        </body>
      </html>
    </ViewTransitions>
  );
}
