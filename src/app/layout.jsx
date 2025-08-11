"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import "yakuhanjp";
import { ViewTransitions } from "next-view-transitions";
import Menu from "../components/Menu/Menu";
import { HeroUIProvider } from "@heroui/react";
import Header from "../components/header/index.jsx";
import ClientWrapper from "../components/ClientWrapper.jsx";
import Footer from "../components/Footer/Footer1";
import Link from "next/link";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    // 移除 transition 狀態
    document.body.classList.remove("page-transition");
    sessionStorage.removeItem("transitioning");

    // ✅ 注入 JSON-LD 結構化資料
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "宜園建設",
      legalName: "宜園建設",
      url: "https://www.yiyuan-arch.com.tw",
      logo: "https://www.yiyuan-arch.com.tw/company-logo.ico",
      image:
        "https://www.yiyuan-arch.com.tw/_next/image?url=%2Fimages%2FJPOM9756.jpg&w=1920&q=75",
      description:
        "宜園建設以『實在構築』為核心，融合信任、關係、獨特與永恆的價值觀，致力打造理想宜居空間。",
      address: {
        "@type": "PostalAddress",
        streetAddress: "文心路四段212號10樓之2",
        addressLocality: "北區",
        addressRegion: "台中市",
        postalCode: "404",
        addressCountry: "TW",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+886-4-22978188",
        contactType: "customer service",
        areaServed: "TW",
        availableLanguage: ["zh-TW"],
      },
      sameAs: ["https://www.facebook.com/宜園建設-100063749781596/"],
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <html lang="zh-TW">
      <head>
        {/* ✅ 網站 title */}
        <title>宜園建設｜實在構築的理想居所</title>

        {/* ✅ favicon 公司 LOGO */}
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ Meta 基礎 SEO */}
        <meta
          name="description"
          content="宜園建設以『實在構築』為核心理念，打造融合信任、關係、獨特與永恆的理想空間，為您創造安心宜居的生活。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </head>
      <ViewTransitions>
        <HeroUIProvider>
          <body>
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

            {!isHomePage && <Footer />}
          </body>
        </HeroUIProvider>
      </ViewTransitions>
    </html>
  );
}
