"use client";

import Link, { LinkProps } from "next/link";
import React from "react";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");

    // ✅ 加入轉場動畫 class
    body?.classList.add("page-transition");

    // ✅ 等動畫出場完畢（例如 500ms）
    await sleep(500);

    // ✅ 改為完整重整頁面（不是 router.push）
    window.location.href = href;
  };

  return (
    <Link {...props} href={href} legacyBehavior>
      <a onClick={handleTransition} className="w-full">
        {children}
      </a>
    </Link>
  );
};
