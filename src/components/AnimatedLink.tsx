"use client";
import { useTransitionRouter } from "next-view-transitions";

import { useEffect, useState } from "react";

// ✅ 簡單淡入淡出動畫
const fadeTransition = () => {
  document.documentElement.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 300,
    easing: "ease",
    fill: "forwards",
    pseudoElement: "::view-transition-old(root)",
  });

  document.documentElement.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    easing: "ease",
    fill: "forwards",
    pseudoElement: "::view-transition-new(root)",
  });
};

const Link = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const router = useTransitionRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  if (isMobile) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        router.push(href, {
          onTransitionReady: () => {
            fadeTransition();
            // ✅ 等轉場開始後再 scroll to top（延遲 100ms）
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "instant" });
            }, 100);
          },
        });
      }}
    >
      {children}
    </a>
  );
};

export default Link;
