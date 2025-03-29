import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimationComponent() {
  useEffect(() => {
    if (window.innerWidth >= 900) {
      const lenis = new Lenis();
      const videoContainer = document.querySelector(".video-container-desktop");
      const videoTitleElements = document.querySelectorAll(".video-title p");

      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      const breakpoints = [
        { maxWidth: 1000, translateY: -135, movMultiplier: 450 },
        { maxWidth: 1100, translateY: -130, movMultiplier: 500 },
        { maxWidth: 1200, translateY: -125, movMultiplier: 550 },
        { maxWidth: 1300, translateY: -120, movMultiplier: 600 },
      ];

      const getInitialValues = () => {
        const width = window.innerWidth;

        for (const bp of breakpoints) {
          if (width <= bp.maxWidth) {
            return {
              translateY: bp.translateY,
              movementMultiplier: bp.movMultiplier,
            };
          }
        }

        return {
          translateY: -105,
          movementMultiplier: 650,
        };
      };

      const initialValues = getInitialValues();

      const animationState = {
        scrollProgress: 0,
        initialTranslateY: initialValues.translateY,
        currentTranslateY: initialValues.translateY,
        movementMultiplier: initialValues.movementMultiplier,
        scale: 0.25,
        fontSize: 80,
        gap: 2,
        targetMouseX: 0,
        currentMouseX: 0,
      };

      window.addEventListener("resize", () => {
        const newValues = getInitialValues();
        animationState.initialTranslateY = newValues.translateY;
        animationState.movementMultiplier = newValues.movementMultiplier;

        if (animationState.scrollProgress === 0) {
          animationState.currentTranslateY = newValues.translateY;
        }
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".intro",
          start: "top bottom",
          end: "top 10%",
          scrub: true,
          onUpdate: (self) => {
            animationState.scrollProgress = self.progress;

            animationState.currentTranslateY = gsap.utils.interpolate(
              animationState.initialTranslateY,
              0,
              animationState.scrollProgress
            );

            animationState.scale = gsap.utils.interpolate(
              0.25,
              1,
              animationState.scrollProgress
            );

            animationState.gap = gsap.utils.interpolate(
              2,
              1,
              animationState.scrollProgress
            );

            if (animationState.scrollProgress <= 0.4) {
              const firstPartProgress = animationState.scrollProgress / 0.4;
              animationState.fontSize = gsap.utils.interpolate(
                80,
                40,
                firstPartProgress
              );
            } else {
              const secondPartProgress =
                (animationState.scrollProgress - 0.4) / 0.6;
              animationState.fontSize = gsap.utils.interpolate(
                40,
                20,
                secondPartProgress
              );
            }
          },
        },
      });

      document.addEventListener("mousemove", (e) => {
        animationState.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      });

      const animate = () => {
        if (window.innerWidth < 900) return;

        const {
          scale,
          targetMouseX,
          currentMouseX,
          currentTranslateY,
          fontSize,
          gap,
          movementMultiplier,
        } = animationState;

        const scaledMovementMultiplier = (1 - scale) * movementMultiplier;

        const maxHorizontalMovement =
          scale < 0.95 ? targetMouseX * scaledMovementMultiplier : 0;

        animationState.currentMouseX = gsap.utils.interpolate(
          currentMouseX,
          maxHorizontalMovement,
          0.05
        );

        videoContainer.style.transform = `translateY(${currentTranslateY}%) translateX(${animationState.currentMouseX}px) scale(${scale})`;

        videoContainer.style.gap = `${gap}em`;

        videoTitleElements.forEach((element) => {
          element.style.fontSize = `${fontSize}px`;
        });

        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  return (
    <div className="overflow-x-hidden font-sans text-[#1a1a1a] bg-[#e3e3db]">
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between mix-blend-difference z-20 text-white text-[20px] font-medium">
        <div className="logo">
          <a href="#">Codegrid</a>
        </div>
        <div className="links flex gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Videos</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="hero w-full h-[100svh] p-10 pt-16 flex flex-col justify-between">
        <h1 className="relative -left-[0.05em] uppercase font-medium text-[20vw] tracking-[-0.04em] leading-none">
          Codegrid
        </h1>
        <div className="hero-copy flex justify-between items-end">
          <p className="text-[20px] font-medium">
            One subscription, endless web design.
          </p>
          <p className="text-[20px] font-medium">(Scroll)</p>
        </div>
      </section>

      <section className="intro w-full h-[100svh] p-10">
        <div
          className="video-container-desktop relative flex flex-col gap-[2em] will-change-transform"
          style={{ transform: "translateY(-105%) scale(0.25)" }}
        >
          <div className="video-preview relative w-full aspect-[16/9] rounded-3xl bg-[#b9b9b3] overflow-hidden">
            <div className="video-wrapper absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/BLisA8zYphs?si=Zq2u4RlEJzcZJHHD"
                frameBorder="0"
                auto
                allow="autoplay; fullscreen"
                referrerPolicy="no-referrer"
                loading="lazy"
                title="Codegrid video"
                className="absolute top-0 left-0 w-full h-full rounded-3xl pointer-events-none"
              ></iframe>
            </div>
          </div>
          <div className="video-title">
            <p className="text-[78px] font-medium relative">PRO Showreel</p>
            <p className="text-[78px] font-medium relative">2023 - 2024</p>
          </div>
        </div>
      </section>

      <section className="outro w-full h-[100svh] p-10 flex justify-center items-center">
        <p className="text-[20px] font-medium">
          Delve into coding without clutter.
        </p>
      </section>
    </div>
  );
}
