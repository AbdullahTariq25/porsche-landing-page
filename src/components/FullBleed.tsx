"use client";

import Image from "next/image";

export default function FullBleed() {
  return (
    <section className="section-shell h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/frames/frame060.jpg"
          alt="Porsche 911 GT3 RS"
          fill
          className="object-cover"
          style={{ transform: "scale(1.1)" }}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
        <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-6">
          Precision Engineering
        </span>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] max-w-4xl">
          ENGINEERED WITHOUT
          <br />
          <span className="text-primary">COMPROMISE</span>
        </h2>
        <p className="section-copy mt-6 text-base md:text-lg max-w-lg">
          The pursuit of perfection, redefined on the racetrack and refined for
          the road.
        </p>
      </div>
    </section>
  );
}
