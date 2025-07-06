"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MenuBar = ({ closeMenu }) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "關於宜園 ABOUT", href: "/about" },
    { label: "建築經典 CLASSIC", href: "/project" },
    { label: "新案鑑賞 PROJECT", href: "/hot-sale" },
    { label: "工程進度 PROGRESS", href: "/news" },
    { label: "聯絡我們 CONTACT", href: "/contact" },
  ];

  return (
    <motion.div
      className="menu-bar flex flex-row fixed top-0 left-0 w-full px-4 py-2 z-50 transition-all duration-500 ease-in-out"
      initial={false}
      animate={{
        backgroundColor: isTop ? "rgba(255, 255, 255, 0)" : "#ffffff",
        borderBottom: isTop
          ? "1px solid rgba(255,255,255,0.2)"
          : "1px solid rgba(0,0,0,0.05)",
      }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1], // CSS standard easing for smoothness
      }}
    >
      {/* Logo */}
      <div
        className="logo w-[20%] flex justify-center items-center"
        onClick={closeMenu}
      >
        <Link href="/home">
          <span className="text-[1.8rem] font-extrabold">宜園建設</span>
        </Link>
      </div>

      {/* Nav Items */}
      <div className="menu-toggle-wrapper w-[60%] flex items-center justify-end">
        <div className="flex items-center w-full justify-center font-light flex-row">
          {navItems.map(({ label, href }) => (
            <Link href={href} key={label}>
              <button className="group relative w-full px-4 font-medium flex items-center justify-center">
                <span
                  className={`
    relative mx-1 inline-flex border-t border-b
    border-black  // ✅ 固定為黑色
    transition-colors duration-300
    text-center
  `}
                >
                  <div
                    className={`
            text-[.9rem] flex items-center justify-center
            transition-transform duration-300 ease-in-out
            group-hover:scale-[1.05]
            will-change-transform
            transform origin-center
          `}
                  >
                    {label}
                  </div>
                </span>
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Facebook Icon */}
      <div className="w-[20%] flex justify-center items-center icons">
        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100063749781596"
        >
          <Image
            src="/images/facebook-icon.png"
            placeholder="empty"
            alt="facebook-icon"
            loading="eager"
            width={80}
            height={80}
            className="w-[42px]"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default MenuBar;
