import dynamic from "next/dynamic";

export const metadata = {
  title: "宜園建設｜實在構築的理想居所",
  description:
    "宜園建設以『實在構築』為核心理念，打造融合信任、關係、獨特與永恆的理想空間，為您創造安心宜居的生活。",
  keywords: [
    "宜園建設",
    "台中建設公司",
    "建案推薦",
    "實在構築",
    "宜居空間",
    "建築設計",
    "台中建案",
  ],
  openGraph: {
    title: "宜園建設｜實在構築的理想居所",
    description: "打造理想的宜居建築，融合信任、關係、獨特與永恆的空間價值。",
    url: "https://www.yiyuan-arch.com.tw/home",
    siteName: "宜園建設",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "https://www.yiyuan-arch.com.tw/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "宜園建設實景",
      },
    ],
  },
  alternates: {
    canonical: "https://www.yiyuan-arch.com.tw/home",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const HomeClient = dynamic(() => import("./Client"), { ssr: false });

export default function HomePage() {
  return <HomeClient />;
}
