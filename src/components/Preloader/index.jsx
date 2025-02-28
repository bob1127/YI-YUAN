"use client";

import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

// 定義動畫變數
const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
};

const slideUp = {
  initial: { top: 0 },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return; // 確保只在客戶端執行

    const handleLoad = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    handleLoad(); // 初次加載時執行

    window.addEventListener("resize", handleLoad);
    return () => window.removeEventListener("resize", handleLoad);
  }, []);

  useEffect(() => {
    if (index >= words.length - 1) return;
    const timer = setTimeout(
      () => setIndex((prev) => prev + 1),
      index === 0 ? 1000 : 150
    );
    return () => clearTimeout(timer);
  }, [index]);

  if (dimension.width === 0) return null; // 確保只在客戶端渲染，避免 SSR 錯誤

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  } L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.introduction}
    >
      <motion.p variants={opacity} initial="initial" animate="enter">
        <span></span>
        {words[index]}
      </motion.p>
      <svg>
        <motion.path
          variants={curve}
          initial="initial"
          exit="exit"
          d={initialPath}
        ></motion.path>
      </svg>
    </motion.div>
  );
}
