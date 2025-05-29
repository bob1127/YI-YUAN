"use client";
import { useRef } from "react";
import "./page.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const Photos = ({ slides }) => {
  const sliderImagesRef = useRef(null);
  const counterRef = useRef(null);
  const titlesRef = useRef(null);
  const indicatorsRef = useRef(null);
  const previewsRef = useRef([]);
  const sliderRef = useRef(null);

  useGSAP(
    () => {
      CustomEase.create(
        "hop2",
        "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1"
      );

      let currentImg = 1;
      const totalSlides = slides.length;
      let indicatorRotation = 0;

      const updateCounterAndTitlePosition = () => {
        gsap.to(counterRef.current, {
          y: -20 * (currentImg - 1),
          duration: 1,
          ease: "hop2",
        });
        gsap.to(titlesRef.current, {
          y: -60 * (currentImg - 1),
          duration: 1,
          ease: "hop2",
        });
      };

      const updateActiveSlidePreview = () => {
        previewsRef.current.forEach((el, i) =>
          el?.classList.toggle("active", i === currentImg - 1)
        );
      };

      const animateSlide = (direction) => {
        const currentSlide = sliderImagesRef.current.lastElementChild;
        const newSlide = document.createElement("div");
        newSlide.classList.add("img");

        const img = document.createElement("img");
        img.src = slides[currentImg - 1].image;
        gsap.set(img, { x: direction === "left" ? -500 : 500 });

        newSlide.appendChild(img);
        sliderImagesRef.current.appendChild(newSlide);

        const tl = gsap.timeline();
        tl.to(currentSlide.querySelector("img"), {
          x: direction === "left" ? 500 : -500,
          duration: 1.5,
          ease: "hop2",
        })
          .fromTo(
            newSlide,
            {
              clipPath:
                direction === "left"
                  ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                  : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            },
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1.5,
              ease: "hop2",
            },
            0
          )
          .to(img, { x: 0, duration: 1.5, ease: "hop2" }, 0)
          .call(() => cleanupSlides(), null, 1.5);

        indicatorRotation += direction === "left" ? -90 : 90;
        gsap.to(indicatorsRef.current.children, {
          rotate: indicatorRotation,
          duration: 1,
          ease: "hop2",
        });
      };

      const cleanupSlides = () => {
        const imgs = sliderImagesRef.current.querySelectorAll(".img");
        if (imgs.length > totalSlides) {
          gsap.to(imgs[0], {
            opacity: 0,
            duration: 0.5,
            onComplete: () => imgs[0].remove(),
          });
        }
      };

      const nextSlide = () => {
        currentImg = currentImg < totalSlides ? currentImg + 1 : 1;
        animateSlide("right");
        updateActiveSlidePreview();
        updateCounterAndTitlePosition();
      };

      const autoSlideInterval = setInterval(nextSlide, 4000);

      const handleClick = (e) => {
        const sliderWidth = sliderRef.current.clientWidth;
        const clickX = e.clientX;
        const clickedPreview = e.target.closest(".preview");

        if (clickedPreview) {
          const clickedIndex = previewsRef.current.indexOf(clickedPreview);
          if (clickedIndex !== -1 && clickedIndex + 1 !== currentImg) {
            currentImg = clickedIndex + 1;
            animateSlide(clickedIndex + 1 < currentImg ? "left" : "right");
            updateActiveSlidePreview();
            updateCounterAndTitlePosition();
          }
          return;
        }

        if (clickX < sliderWidth / 2 && currentImg > 1) {
          currentImg--;
          animateSlide("left");
        } else if (clickX > sliderWidth / 2 && currentImg < totalSlides) {
          currentImg++;
          animateSlide("right");
        }

        updateActiveSlidePreview();
        updateCounterAndTitlePosition();
      };

      sliderRef.current.addEventListener("click", handleClick);

      return () => {
        sliderRef.current.removeEventListener("click", handleClick);
        clearInterval(autoSlideInterval);
      };
    },
    { scope: sliderRef }
  );

  return (
    <div className="slider" ref={sliderRef}>
      <div className="slider-images" ref={sliderImagesRef}>
        <div className="img">
          <img src={slides[0].image} alt="" />
        </div>
      </div>

      <div className="slider-title">
        <div className="slider-title-wrapper" ref={titlesRef}>
          {slides.map((s, i) => (
            <p key={i}>{s.title}</p>
          ))}
        </div>
      </div>

      <div className="slider-counter">
        <div className="counter" ref={counterRef}>
          {slides.map((_, i) => (
            <p key={i}>{i + 1}</p>
          ))}
        </div>
        <div>
          <p>&mdash;</p>
        </div>
        <div>
          <p>{slides.length}</p>
        </div>
      </div>

      <div className="slider-preview">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`preview ${i === 0 ? "active" : ""}`}
            ref={(el) => (previewsRef.current[i] = el)}
          >
            <img src={s.image} alt="" />
          </div>
        ))}
      </div>

      <div className="slider-indicators" ref={indicatorsRef}>
        <p>+</p>
        <p>+</p>
      </div>
    </div>
  );
};

export default Photos;
