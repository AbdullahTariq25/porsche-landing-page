"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const galleryFrames = [
  { frame: "frame015", label: "FRAME 015" },
  { frame: "frame040", label: "FRAME 040" },
  { frame: "frame060", label: "FRAME 060" },
  { frame: "frame080", label: "FRAME 080" },
  { frame: "frame100", label: "FRAME 100" },
  { frame: "frame120", label: "FRAME 120" },
  { frame: "frame160", label: "FRAME 160" },
  { frame: "frame200", label: "FRAME 200" },
];

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const initGSAP = async () => {
      const gsapModule = await import("gsap");
      const scrollModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      if (!trackRef.current || !sectionRef.current) return;

      const track = trackRef.current;
      const totalWidth = track.scrollWidth - window.innerWidth;

      ctx = gsap.context(() => {
        gsap.to(track, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: "top top",
            end: () => `+=${totalWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      });
    };

    initGSAP();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="section-shell overflow-hidden"
      style={{ background: "#050505", zIndex: 1 }}
    >
      {/* Section Header */}
      <div className="absolute top-8 md:top-12 left-6 md:left-16 z-10">
        <span className="text-[var(--primary)] text-xs font-semibold tracking-[0.3em] uppercase font-body">
          360° View
        </span>
        <h2 className="font-heading text-4xl md:text-6xl text-white mt-2">
          EVERY ANGLE
        </h2>
      </div>

      {/* Gallery Track */}
      <div
        ref={trackRef}
        className="flex items-center gap-6 md:gap-8 pl-6 md:pl-16 pt-28 md:pt-32 pb-12 h-screen"
      >
        {galleryFrames.map((item) => (
          <div
            key={item.frame}
            className="flex-shrink-0 relative group cursor-pointer"
          >
            <div className="w-[350px] h-[250px] sm:w-[450px] sm:h-[320px] md:w-[550px] md:h-[380px] lg:w-[600px] lg:h-[400px] relative overflow-hidden rounded-sm border border-white/5 transition-all duration-500 group-hover:border-[var(--primary)]/50 group-hover:shadow-[0_0_40px_rgba(224,57,58,0.15)]">
              <Image
                src={`/frames/${item.frame}.jpg`}
                alt={`Porsche 911 GT3 RS - ${item.label}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Label */}
            <span className="block mt-3 text-[var(--primary)] text-[10px] font-body tracking-[0.3em] font-medium opacity-40 group-hover:opacity-100 transition-opacity duration-300">
              {item.label}
            </span>
          </div>
        ))}
        {/* Spacer */}
        <div className="flex-shrink-0 w-[100px]" />
      </div>
    </section>
  );
}
