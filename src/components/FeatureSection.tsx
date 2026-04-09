"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    title: "Naturally Aspirated Flat-Six",
    desc: "4.0-litre engine producing 525 HP at 8,500 rpm",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "DRS Rear Wing System",
    desc: "Active aerodynamics for maximum downforce control",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
        <line x1="12" y1="22" x2="12" y2="15.5" />
        <line x1="22" y1="8.5" x2="12" y2="15.5" />
        <line x1="2" y1="8.5" x2="12" y2="15.5" />
      </svg>
    ),
    title: "Carbon Fiber Construction",
    desc: "Lightweight monocoque with track-ready rigidity",
  },
];

export default function FeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    const children = sectionRef.current?.querySelectorAll(".reveal-item");
    children?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="models"
      className="section-shell py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-surface) 0%, var(--color-background) 100%)",
      }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            <span
              className="reveal-item section-kicker mb-6"
              style={{ transitionDelay: "0ms" }}
            >
              Aerodynamic Perfection
            </span>
            <h2
              className="reveal-item font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-6"
              style={{ transitionDelay: "100ms" }}
            >
              ENGINEERED
              <br />
              FOR THE <span className="text-primary">TRACK</span>
            </h2>
            <p
              className="reveal-item section-copy text-base md:text-lg mb-10 max-w-md"
              style={{ transitionDelay: "200ms" }}
            >
              The Porsche GT3 RS is a high-performance sports car renowned for
              its track-focused design and precision engineering. With a
              powerful naturally aspirated engine, aerodynamic enhancements, and
              a lightweight construction.
            </p>

            <div className="space-y-5">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="reveal-item flex items-start gap-4"
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-primary/30 text-primary">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-white text-sm tracking-wide mb-1">
                      {f.title}
                    </h4>
                    <p className="font-body text-white/40 text-sm font-light">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div
            className="reveal-item order-1 lg:order-2 relative group"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src="/frames/frame150.jpg"
                alt="Porsche 911 GT3 RS Aerodynamics"
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Red glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 60px rgba(224, 57, 58, 0.15)" }}
              />
            </div>
            {/* Decorative frame label */}
            <div className="absolute -bottom-3 -right-3 bg-primary text-white text-[10px] font-heading tracking-[0.2em] px-4 py-2">
              GT3 RS
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
