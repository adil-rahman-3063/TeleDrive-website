"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Hero from "../components/Hero";
import About from "../components/About";
import Download from "../components/Download";
import Creator from "../components/Creator";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useGSAP(() => {
    // Reveal animation for sections as they scroll into view
    const sections = gsap.utils.toArray(".gsap-reveal");
    sections.forEach((section: any) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 100,
          visibility: "hidden",
        },
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, { scope: container });

  return (
    <main ref={container} style={{ width: "100%" }}>
      <div className="gsap-reveal">
        <Hero />
      </div>
      <div className="gsap-reveal">
        <About />
      </div>
      <div className="gsap-reveal">
        <Download />
      </div>
      <div className="gsap-reveal">
        <Creator />
      </div>
    </main>
  );
}
