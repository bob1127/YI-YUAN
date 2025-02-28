"use client";
import { TransitionLink } from "../../components/utils/TransitionLink";
import ParallaxImage from "../../components/ParallaxImage";
import { ReactLenis } from "@studio-freight/react-lenis";

import "./about.css";
export default function About() {
  return (
    <ReactLenis root>
      <div className="app">
        <section className="hero">
          <div className="img">
            <ParallaxImage src="/portraits/portrait1.jpg" alt="" />
          </div>

          <div className="nav">
            <p>Tour</p>
            <p>Updates</p>
            <p>Contact</p>
            <p>Merch</p>
          </div>
        </section>

        <section className="projects">
          <div className="img">
            <ParallaxImage src="/images/img1.jpg" alt="" />
          </div>

          <div className="projects-brief">
            <p>
              Liam 2023 breakout track “Sundown” climbed the global charts,
              achieved multi-platinum status, and amassed over 1 billion streams
              in its first year.
            </p>
          </div>

          <div className="col projects-cover">
            <div className="img">
              <ParallaxImage src="/images/img1.jpg" alt="" />
            </div>
          </div>

          <div className="col projects-list">
            <NavLeft />
            <div className="project">
              <p>Apple Music / Spotify / YouTube</p>
            </div>
            <div className="project">
              <h1>Echoes Within</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
            <div className="project">
              <h1>Fading Memories</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
            <div className="project">
              <h1>Edge</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="col intro">
            <p>Introduction</p>
            <p>
              Liam 2023 sensation “Sundown” made waves on global charts,
              achieved multi-platinum accolades, and surpassed 1 billion streams
              within its debut year.
            </p>
          </div>
          <div className="col portrait">
            <div className="portrait-container">
              <div className="img">
                <ParallaxImage src="/portraits/portrait7.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="banner">
          <div className="img">
            <ParallaxImage src="/images/img1.jpg" alt="" />
          </div>

          <div className="banner-copy">
            <p>綠意生活，宜園共築</p>
            <h1>宜園建設</h1>
            <p className="!mt-10 !leading-loose !w-[60%]">
              宜園建設以「品質、匠心、宜居」為核心理念，專注於打造兼具美學與實用性的建築空間。我們堅持嚴選優質建材、融合自然環境，讓每一個細節都承載溫度，為您築起舒適、安全、永續的理想家園。
            </p>
            <button>Join the newsletter</button>
          </div>
        </section>

        <section className="footer">
          <div className="col">
            <p>Instagram / Tiktok / Discord</p>

            <div className="footer-links">
              <p>Menu</p>
              <h1>Tour</h1>
              <h1>Updates</h1>
              <h1>Merch</h1>
              <h1>Contact</h1>
            </div>

            <p>&copy; Designed by Codegrid</p>
          </div>
          <div className="col">
            <p>
              Join the newsletter <br />
              <button>Subscribe</button>
            </p>

            <div className="shop">
              <div className="img">
                <ParallaxImage src="/portraits/portrait8.jpg" alt="" />
              </div>
            </div>

            <p>Spotify / Apple Music / Youtube</p>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <TransitionLink href="/about">
        <h1>About</h1>
      </TransitionLink>
      <TransitionLink href="/community">Community</TransitionLink>
      <TransitionLink href="/pricing">Pricing</TransitionLink>
      <TransitionLink href="/company">Company</TransitionLink>
    </div>
  );
};
