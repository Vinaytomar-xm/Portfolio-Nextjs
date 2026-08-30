"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const heroContentRef = useRef(null);

  // Parallax effect for hero section
  // useEffect(() => {
  //   const onScroll = () => {
  //     const scrolledY = window.pageYOffset;
  //     const el = heroContentRef.current;
  //     if (el && scrolledY < window.innerHeight) {
  //       el.style.transform = `translateY(${scrolledY * 0.3}px)`;
  //       el.style.opacity = 1 - scrolledY / 700;
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <section className="hero">
      <div className="hero-spotlight" aria-hidden="true">
        <span className="spotlight-beam beam-left"></span>
        <span className="spotlight-beam beam-right"></span>
      </div>
      <div className="hero-content" ref={heroContentRef}>
        <div className="hero-text">
          <div className="hero-label">💻 AVAILABLE FOR OPPORTUNITIES</div>
          <h1 className="hero-title">
            Hi, I&apos;m <span className="gradient-text">Vinay Singh Tomar</span>
          </h1>
          <p className="hero-subtitle">
            I am 1st year B.Tech CSE student, passionate about the web development.
            I build responsive web applications and create efficient, logic-based solutions.
          </p>
          <p className="hero-location">Indore, Madhya Pradesh, India</p>
          <div className="hero-buttons">
            <Link href="/projects" className="btn btn-primary">
              View My Work →
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <Image
              src="/vinay.jpeg"
              alt="Vinay Singh Tomar"
              width={320}
              height={320}
              className="hero-image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
