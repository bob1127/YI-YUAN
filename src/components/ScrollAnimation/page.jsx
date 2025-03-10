"use client";

import { useEffect } from "react";
import Image from "next/image";
import Lenis from "lenis";
import "./page.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: "Custom Web Development",
    description:
      "We provide bespoke web development solutions tailored to your business needs. Our team ensures top-notch performance and scalability.",
    imgSrc: "/assets/img1.jpg",
    alt: "Web Development",
  },
  {
    title: "Mobile App Development",
    description:
      "Crafting intuitive and engaging mobile applications for both Android and iOS platforms. Enhance your user experience with our expert team.",
    imgSrc: "/assets/img2.jpg",
    alt: "App Development",
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing services to boost your online presence. From SEO to social media campaigns, we cover it all.",
    imgSrc: "/assets/img3.jpg",
    alt: "Digital Marketing",
  },
  {
    title: "Cloud Solutions",
    description:
      "Reliable and secure cloud solutions to streamline your business operations. Leverage the power of the cloud with our expertise.",
    imgSrc: "/assets/img4.jpg",
    alt: "Cloud Solutions",
  },
  {
    title: "IT Consultancy",
    description:
      "Expert IT consultancy services to guide your business through digital transformation. Optimize your IT infrastructure with our insights.",
    imgSrc: "/assets/img5.jpg",
    alt: "IT Consultancy",
  },
];

export default function ServicesSection() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const services = document.querySelectorAll(".service");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target;
          const imgContainer = service.querySelector(".img");

          ScrollTrigger.create({
            trigger: service,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newWidth = 30 + 70 * progress;
              gsap.to(imgContainer, {
                width: `${newWidth}%`,
                duration: 0.1,
                ease: "none",
              });
            },
          });

          ScrollTrigger.create({
            trigger: service,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newHeight = 150 + 300 * progress;
              gsap.to(service, {
                height: `${newHeight}px`,
                duration: 0.1,
                ease: "none",
              });
            },
          });

          observer.unobserve(service);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    services.forEach((service) => {
      observer.observe(service);
    });
  }, []);

  return (
    <div className="container">
      <section className="hero" />
      <section className="services">
        <div className="services-header flex justify-between items-center">
          <div className="col"></div>
          <div className="col">
            <h1 className="text-3xl font-bold">All Services</h1>
          </div>
        </div>
        {servicesData.map((service, index) => (
          <div key={index} className="service flex items-center">
            <div className="service-info">
              <h1 className="text-2xl font-semibold">{service.title}</h1>
              <p className="mt-2 text-gray-700">{service.description}</p>
            </div>
            <div className="service-img relative">
              <div className="img w-30">
                <Image
                  src={service.imgSrc}
                  alt={service.alt}
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="footer" />
    </div>
  );
}
