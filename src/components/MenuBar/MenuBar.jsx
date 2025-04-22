import React from "react";
import Link from "next/link";
import "./MenuBar.css";
import Image from "next/image";
import MenuBtn from "../MenuBtn/MenuBtn";
import AnimatedLink from "../AnimatedLink";
import {
  Lightbulb,
  LayoutDashboard,
  CalendarCheck,
  ShieldCheck,
  LifeBuoy,
  BookOpenText,
} from "lucide-react";

const MenuBar = ({ isOpen, toggleMenu, closeMenu, isDarkBg }) => {
  const navItems = [
    {
      label: "關於宜園 ABOUT",
      href: "/about",
    },
    {
      label: "建築經典 CLASSIC",
      href: "/hot-slae",
    },
    {
      label: "新案鑑賞 PROJECT",
      href: "/project",
    },
    {
      label: "工程進度 PROGRESS",
      href: "/progress",
    },
    {
      label: "聯絡我們 CONTACT",
      href: "/contact",
    },
  ];

  return (
    <div className="menu-bar bg-white  flex flex-row fixed top-0 left-0 w-full px-4 py-2 z-50">
      <div
        className="logo w-[20%] flex justify-center items-center"
        onClick={closeMenu}
      >
        <Link href="/home">
          <span className="text-[1.8rem] font-extrabold">宜園建設</span>
        </Link>
      </div>

      <div className="menu-toggle-wrapper  w-[60%] flex items-center justify-end">
        <div className="flex items-center w-full justify-center font-light flex-row">
          {navItems.map(({ label, href, icon }) => (
            <AnimatedLink href={href} key={label}>
              <button
                className={`group relative rounded-full w-full   px-4 font-medium flex items-center  justify-center`}
              >
                <span className="relative !text-gray-900  inline-flex overflow-hidden">
                  <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] font-normal text-[.9rem]  group-hover:skew-y-10  flex items-center">
                    {label}
                    <span className="hidden  group-hover:inline-block ml-1">
                      {icon}
                    </span>
                  </div>
                  <div className="absolute font-normal !text-gray-900 text-[.9rem] translate-y-[110%] skew-y-12 pb-2 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0  flex items-center">
                    {label}
                    <span className="hidden group-hover:inline-block ml-1">
                      {icon}
                    </span>
                  </div>
                </span>
              </button>
            </AnimatedLink>
          ))}
        </div>
      </div>
      <div className="w-[20%] flex justify-center items-center icons">
        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100063749781596"
        >
          {" "}
          <Image
            src="/images/icon/facebook-3.png"
            placeholder="empty"
            alt="facebook-icon"
            loading="eager"
            width={80}
            height={80}
            className="w-[42px]"
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default MenuBar;
