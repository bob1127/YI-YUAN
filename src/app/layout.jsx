"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import "yakuhanjp";
import Menu from "../components/Menu/Menu"; // 改為 default import
import { HeroUIProvider } from "@heroui/react";
import Header from "../components/header/index.jsx";
import ClientWrapper from "../components/ClientWrapper.jsx";
import Footer from "../components/Footer/Footer1";

export default function RootLayout({ children }) {
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
          {/* {!isHomePage && <Footer />} */}
        </body>
      </HeroUIProvider>
    </html>
  );
}
