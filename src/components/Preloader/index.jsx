"use client";

import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Index() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [animationDone, setAnimationDone] = useState(false);

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
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="100"
              viewBox="0 0 2058 1872"
            >
              <motion.path
                d="M 516.249 877.666 L 516.500 1559.500 655.250 1559.754 L 794 1560.007 794 1035.190 L 794 510.372 656.074 353.461 C 580.214 267.159, 517.664 196.388, 517.073 196.191 C 516.308 195.936, 516.071 391.945, 516.249 877.666 M 1399.117 352.250 L 1267.002 508.500 1267.001 1040.250 L 1267 1572 1399.500 1572 L 1532 1572 1532 884 C 1532 505.600, 1531.827 196, 1531.616 196 C 1531.404 196, 1471.780 266.313, 1399.117 352.250"
                stroke="#000"
                fill="none"
                strokeWidth={8}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M 213 786 L 213 1572 106.500 1572 L 0 1572 0 1722 L 0 1872.001 1029.250 1871.750 L 2058.500 1871.500 2058.799 1725 C 2058.963 1644.425, 2058.812 1575.237, 2058.463 1571.250 L 2057.829 1564 1954.915 1564 L 1852 1564 1852 782 L 1852 0 1694.750 0.008 L 1537.500 0.015 1337.250 231.151 L 1137 462.286 1137 1017.143 L 1137 1572 1029 1572 L 921 1572 921 1017.142 L 921 462.283 724.822 231.142 L 528.644 0 370.822 0 L 213 0 213 786 M 516.249 877.666 L 516.500 1559.500 655.250 1559.754 L 794 1560.007 794 1035.190 L 794 510.372 656.074 353.461 C 580.214 267.159, 517.664 196.388, 517.073 196.191 C 516.308 195.936, 516.071 391.945, 516.249 877.666 M 1399.117 352.250 L 1267.002 508.500 1267.001 1040.250 L 1267 1572 1399.500 1572 L 1532 1572 1532 884 C 1532 505.600, 1531.827 196, 1531.616 196 C 1531.404 196, 1471.780 266.313, 1399.117 352.250 M 0.487 1722 C 0.487 1804.775, 0.605 1838.637, 0.750 1797.250 C 0.894 1755.862, 0.894 1688.137, 0.750 1646.750 C 0.605 1605.362, 0.487 1639.225, 0.487 1722"
                stroke="#000"
                fill="none"
                strokeWidth={8}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                onAnimationComplete={() => {
                  setAnimationDone(true);
                }}
              />
            </motion.svg>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="text-[17px]  tracking-widest mt-4 font-['Noto_Sans_TC',_sans-serif]"
          >
            宜園建設
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="text-[17px] tracking-widest mt-0 font-['Noto_Sans_TC',_sans-serif]"
          >
            YiYuan
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
