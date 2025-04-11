"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import Image from "next/image";
import HomeSlider from "../HeroSliderHome/page";
import { DragCloseDrawer } from "../../components/DragCloseDrawer";
import usePageTransitionReady from "../../../hooks/usePageTransitionReady";
import "./page.css";

// GSAP easing curve
gsap.registerPlugin(CustomEase);
CustomEase.create(
  "hop",
  "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1 "
);

export default function LandingPage() {
  const counterRef = useRef(null);
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const heroImgRef = useRef(null);
  const ready = usePageTransitionReady();

  const { scrollYProgress } = useScroll();
  const fadeOut = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const slideLeft = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
  const slideRight = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);

  useEffect(() => {
    if (!ready) return;
    document.body.style.overflow = "hidden";

    const splitTextIntoSpans = (selector) => {
      let elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text
          .split("")
          .map((char) => `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`) // 加強空白可視性
          .join("");
        element.innerHTML = splitText;
      });
    };

    splitTextIntoSpans(".header h1");

    const animateCounter = () => {
      let currentValue = 0;
      const updateInterval = 300;
      const maxDuration = 2000;
      const endValue = 100;
      const startTime = Date.now();

      const updateCounter = () => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < maxDuration) {
          currentValue = Math.min(
            currentValue + Math.floor(Math.random() * 30) + 5,
            endValue
          );
          if (counterRef.current) counterRef.current.textContent = currentValue;
          setTimeout(updateCounter, updateInterval);
        } else {
          if (counterRef.current) counterRef.current.textContent = endValue;
          setTimeout(() => {
            gsap.to(counterRef.current, {
              y: -20,
              duration: 1,
              ease: "power3.inOut",
              onStart: revealLandingPage,
            });
          }, 500);
        }
      };
      updateCounter();
    };

    gsap.to(counterRef.current, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1,
      onComplete: animateCounter,
    });

    const revealLandingPage = () => {
      gsap.to(heroRef.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 2,
        ease: "hop",
        onStart: () => {
          gsap.to(heroRef.current, {
            transform: "translate(-50%, -50%) scale(1)",
            duration: 2.25,
            ease: "power3.inOut",
            delay: 0.25,
          });

          gsap.to(overlayRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 2,
            delay: 0.5,
            ease: "hop",
          });

          gsap.to(heroImgRef.current, {
            transform: "scale(1)",
            duration: 2.25,
            ease: "power3.inOut",
            delay: 0.25,
          });

          gsap.to(".header h1 span", {
            y: 0,
            stagger: 0.1,
            duration: 2,
            ease: "power4.inOut",
            delay: 0.75,
            onComplete: () => {
              document.body.style.overflow = "auto";
            },
          });
        },
      });
    };
  }, [ready]);

  return (
    <div className="relative">
      <div className="container">
        <div className="counter">
          <p ref={counterRef}>0</p>
        </div>
        <section className="hero" ref={heroRef}>
          <div className="overlay" ref={overlayRef}></div>
          <div className="hero-img h-[120vh]" ref={heroImgRef}>
            <section className="section-hero relative">
              <HomeSlider />
              <motion.div
                style={{ opacity: fadeOut, x: slideLeft }}
                className="absolute top-[-160px] md:top-[-50px] 2xl:top-[-150px] left-[-5%] 2xl:left-0 sm:w-[450px] w-[350px] xl:w-[600px] h-auto z-[1]"
              >
                <Image
                  src="/images/—Pngtree—green trees branches and leaves_4877518.png"
                  alt="Left Tree"
                  width={600}
                  height={600}
                />
              </motion.div>
              <motion.div
                style={{ opacity: fadeOut, x: slideRight }}
                className="absolute top-0 lg:top-0 right-0 sm:w-[450px] w-[300px] xl:w-[600px] h-auto z-[1]"
              >
                <Image
                  src="/images/—Pngtree—tree branch_5643252.png"
                  alt="Right Tree"
                  width={600}
                  height={600}
                />
              </motion.div>
              {/* DragCloseDrawer omitted for brevity */}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
