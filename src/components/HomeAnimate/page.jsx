import { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import Image from "next/image";
import "./page.css";
import Marquee from "react-fast-marquee";
// 確保 GSAP 插件已註冊
gsap.registerPlugin(CustomEase);
CustomEase.create(
  "hop",
  "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1 "
);

export default function LandingPage() {
  const counterRef = useRef(null);
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);
  const heroImgRef = useRef(null);

  useEffect(() => {
    // 禁止滾動
    document.body.style.overflow = "hidden";

    function splitTextIntoSpans(selector) {
      let elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text
          .split("")
          .map(function (char) {
            return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
          })
          .join("");
        element.innerHTML = splitText;
      });
    }
    splitTextIntoSpans(".header h1");

    function animateCounter() {
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
    }

    gsap.to(counterRef.current, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1,
      onComplete: animateCounter,
    });

    function revealLandingPage() {
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
              // 動畫完成後允許滾動
              document.body.style.overflow = "auto";
            },
          });
        },
      });
    }
  }, []);

  return (
    <div className="container">
      <div className="counter">
        <p ref={counterRef}>0</p>
      </div>
      <section className="hero" ref={heroRef}>
        <div className="overlay" ref={overlayRef}></div>
        <nav>
          <div className="nav-col">
            <div className="nav-items">
              <a href="#">zayno</a>
            </div>
            <div className="nav-items">
              <p>digital studio</p>
            </div>
          </div>
          <div className="nav-col">
            <div className="nav-items">
              <a href="#">work</a>
              <a href="#">studio</a>
              <a href="#">contact</a>
            </div>
            <div className="nav-items">
              <a href="#">twitter</a>
              <a href="#">instagram</a>
            </div>
            <div className="nav-items">
              <p>toronto, ca</p>
            </div>
          </div>
        </nav>
        <div
          className="header overflow-hidden w-1/2 px-4 sm:px-[10%]"
          ref={headerRef}
        >
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-normal text-[#f4f2f0]">
            宜園建設
          </h1>
          <p className="text-white">-Yi Yuan</p>
          <div className="flex flex-row py-4 btn-wrap">
            <button class="group relative inline-flex h-8 items-center border-gray-400  border justify-center rounded-full bg-[#022c22] px-6 font-medium text-neutral-200">
              <span className="text-[.9rem]">關於宜園建設</span>
              <div class="relative ml-1 h-5 w-5 overflow-hidden">
                <div class="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 -translate-x-4"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
            <button class="group relative ml-3 inline-flex h-8 items-center justify-center rounded-full border-gray-400 border bg-[#022c22] px-6 font-medium text-neutral-200">
              <span className="text-[.9rem]">精選建案案例</span>
              <div class="relative ml-1 h-5 w-5 overflow-hidden">
                <div class="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 -translate-x-4"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <Marquee>
            <div className="flex">
              <h2 className="text-white font-normal text-[1.5rem] md:text-[2.3rem]">
                宜家 -{" "}
              </h2>
              <h2 className="text-white font-normal text-[1.5rem] md:text-[2.3rem]">
                宜居 -{" "}
              </h2>
              <h2 className="text-white font-normal text-[1.5rem] md:text-[2.3rem]">
                宜園 -{" "}
              </h2>
              <h2 className="text-white font-normal text-[1.5rem] md:text-[2.3rem]">
                YI YUAN -{" "}
              </h2>
              <h2 className="text-white font-normal text-[1.5rem] md:text-[2.3rem]">
                YI YUAN -{" "}
              </h2>
            </div>
          </Marquee>
        </div>

        <div
          className="hero-img border border-black h-[70vh] md:h-[90vh]"
          ref={heroImgRef}
        >
          <Image
            src="/images/ph_esperanza.jpg"
            alt=""
            width={800}
            height={900}
          />
        </div>
      </section>
    </div>
  );
}
