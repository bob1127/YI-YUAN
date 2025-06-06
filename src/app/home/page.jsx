import Client from "./Client";

export const metadata = {
  title: "宜園建設",
  description:
    "了解宜園建設的理念與價值觀，從信任、關係、獨特到永恆，帶您深入認識我們的實在構築與真誠初心。",
  keywords: [
    "宜園建設",
    "關於我們",
    "建築理念",
    "信任",
    "關係",
    "獨特設計",
    "永恆建築",
    "台中建商",
    "實在構築",
  ],
  openGraph: {
    title: "宜園建設",
    description:
      "深入了解宜園建設從信任、關係到永恆的建築哲學，打造真正宜居的空間。",
    url: "https://www.yiyuan-arch.com.tw/home",
    siteName: "宜園建設",
    images: [
      {
        url: "https://www.yiyuan-arch.com.tw/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "宜園建設關於我們",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "宜園建設",
    description: "認識宜園建設的初心與核心理念，與您一起打造理想生活空間。",
    images: ["https://www.yiyuan-arch.com.tw/images/og-about.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "宜園建設",
  url: "https://www.yiyuan-arch.com.tw",
  logo: "https://www.yiyuan-arch.com.tw/images/logo.png",
  sameAs: [
    "https://www.facebook.com/你的粉專",
    "https://www.instagram.com/你的帳號",
  ],
};
export default function HomePage() {
  return (
    <>
      <Client />
      <script type="application/ld+json" />
    </>
  );
}
