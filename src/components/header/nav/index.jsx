"use client";
import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Footer from "./Footer";
import Image from "./Image";

const links = [
  {
    title: "關於宜園",
    href: "/about",
    src: "home.png",
  },
  {
    title: "建築經典",
    href: "/project",
    src: "shop.png",
  },
  {
    title: "新案鑑賞",
    href: "/hot-sale",
    src: "home.png",
  },
  {
    title: "工程進度",
    href: "/news",
    src: "lookbook.png",
  },
  {
    title: "聯絡我們",
    href: "/contact",
    src: "contact.png",
  },
];

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: true,
    index: 0,
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 當組件掛載時，設置 isOpen 為 true
    setIsOpen(true);
  }, []);

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            isOpen={isOpen}
          />
          <Footer />
        </div>
        <Image
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
          alt=""
        />
      </div>
    </motion.div>
  );
}
