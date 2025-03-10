"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./InfiniteScroll.module.css"; // 确保有对应的 CSS 文件

const projectData = [
  { title: "Euphoria", image: "/assets/img1.jpeg", isAlternate: false },
  { title: "Scratcher", image: "/assets/img2.jpeg", isAlternate: true },
  { title: "Ember", image: "/assets/img3.jpeg", isAlternate: false },
  { title: "Liquid Soleil", image: "/assets/img4.jpeg", isAlternate: true },
  { title: "Vacuum", image: "/assets/img5.jpeg", isAlternate: false },
  { title: "Synthesis", image: "/assets/img6.jpeg", isAlternate: true },
];

const lerp = (start, end, factor) => start + (end - start) * factor;

const InfiniteScroll = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [targetY, setTargetY] = useState(0);
  const projectHeight =
    typeof window !== "undefined" ? window.innerHeight : 800;

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      setTargetY((prev) => prev - e.deltaY * 0.75);
    };

    const animate = () => {
      setScrollY((prev) => lerp(prev, targetY, 0.05));
      requestAnimationFrame(animate);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("wheel", handleWheel, { passive: false });
      animate();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("wheel", handleWheel);
      }
    };
  }, [targetY]);

  return (
    <div className={styles.container} ref={containerRef}>
      <ul className={styles.projectList}>
        {projectData.map((data, index) => (
          <li
            key={index}
            className={styles.project}
            style={{
              transform: `translateY(${index * projectHeight + scrollY}px)`,
            }}
          >
            {data.isAlternate ? (
              <>
                <div className={styles.side}>
                  <div className={styles.img}>
                    <Image
                      src={data.image}
                      alt={data.title}
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
                <div className={styles.side}>
                  <div className={styles.title}>
                    <h1>{data.title}</h1>
                    <h1>{String(index + 1).padStart(2, "0")}</h1>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.side}>
                  <div className={styles.title}>
                    <h1>{data.title}</h1>
                    <h1>{String(index + 1).padStart(2, "0")}</h1>
                  </div>
                </div>
                <div className={styles.side}>
                  <div className={styles.img}>
                    <Image
                      src={data.image}
                      alt={data.title}
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteScroll;
