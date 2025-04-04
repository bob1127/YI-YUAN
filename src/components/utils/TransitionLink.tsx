"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(500); // ✅ 動畫出場前延遲
    sessionStorage.setItem("transitioning", "true"); // ✅ 告知下一頁是 transition 進來的

    router.push(href);

    body?.classList.remove("page-transition");

    window.dispatchEvent(new CustomEvent("pageTransitionComplete"));
  };

  return (
    <Link {...props} href={href} legacyBehavior>
      <a onClick={handleTransition} className="w-full">
        {children}
      </a>
    </Link>
  );
};
