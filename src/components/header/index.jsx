"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // 監聽當前路徑變化
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./nav";

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname(); // 取得當前的路由路徑

  // 當 pathname 改變時，自動關閉 Nav
  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className="font-bold ">
          宜園建設
        </Link>
        <div onClick={() => setIsActive(!isActive)} className={styles.el}>
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={opacity}
          animate={!isActive ? "open" : "closed"}
          className={styles.shopContainer}
        >
          Yi-YUAN
        </motion.div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      {isActive && (
        <motion.div
          variants={background}
          initial="initial"
          animate="open"
          exit="closed"
          className={styles.background}
        ></motion.div>
      )}
    </div>
  );
}
