"use client";

import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Index() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleLoad = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    handleLoad();
    window.addEventListener("resize", handleLoad);
    return () => window.removeEventListener("resize", handleLoad);
  }, []);

  if (dimension.width === 0) return null;

  return (
    <motion.div
      exit={{
        top: "-100vh",
        opacity: 1, // ✅ 保持不透明
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
      }}
      className={styles.introduction}
    >
      <div className={styles.lottieContainer}>
        <div className="flex flex-col justify-center items-center h-full">
          <div className="relative">
            <Player
              autoplay
              loop={false}
              className="z-20"
              src="/animations/Animation - 1749187340337.json"
              style={{ height: 350, width: 350 }}
              keepLastFrame
            />
            <h3 className="absolute z-50 left-1/2 text-white top-1/2 -translate-x-1/2 -translate-y-1/2">
              YiYuan
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
