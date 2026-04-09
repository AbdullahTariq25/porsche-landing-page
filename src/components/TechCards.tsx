"use client";

import { useEffect, useRef } from "react";

const cards = [
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="8" />
        <circle cx="24" cy="24" r="3" />
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6" />
        <path d="M11.3 11.3l4.2 4.2M32.5 32.5l4.2 4.2M11.3 36.7l4.2-4.2M32.5 15.5l4.2-4.2" />
      </svg>
    ),
    title: "4.0L Flat-Six Engine",
    desc: "Naturally aspirated flat-six engine producing 525 HP at 8,500 RPM, delivering raw, unfiltered power with motorsport-derived precision.",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 36L14 12h20L44 36" />
        <path d="M10 36h28" />
        <path d="M18 12v-4h12v4" />
        <path d="M24 12v24" />
        <path d="M14 24h20" />
        <path d="M17 18h14" />
        <path d="M11 30h26" />
      </svg>
    ),
    title: "Active Aerodynamics",
    desc: "DRS rear wing system with swan-neck mounts and adjustable elements generating over 409 kg of downforce at top speed.",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polygon points="24,4 44,16 44,32 24,44 4,32 4,16" />
        <polygon points="24,12 36,20 36,28 24,36 12,28 12,20" />
        <line x1="24" y1="4" x2="24" y2="12" />
        <line x1="44" y1="16" x2="36" y2="20" />
        <line x1="44" y1="32" x2="36" y2="28" />
        <line x1="24" y1="44" x2="24" y2="36" />
        <line x1="4" y1="32" x2="12" y2="28" />
        <line x1="4" y1="16" x2="12" y2="20" />
      </svg>
    ),
    title: "Carbon Fiber Chassis",
    desc: "Full carbon fiber reinforced plastic body panels and magnesium roof. Every gram optimized — 1,525 kg total dry weight.",
  },
];

export default function TechCards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".reveal-item");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("is-visible");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="technology"
      className="section-shell py-24 md:py-32"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="section-kicker">Race Technology</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mt-3">
            PRECISION COMPONENTS
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="reveal-item"
            >
              <div className="h-full p-8 md:p-10 bg-[#0F0F0F] border border-white/5 card-hover group relative overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-primary/0 group-hover:border-primary/50 transition-all duration-500" />

                {/* Icon */}
                <div className="text-primary mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                  {card.icon}
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl md:text-2xl text-white tracking-wider mb-4">
                  {card.title}
                </h3>
                <p className="font-body text-white/40 text-sm font-light leading-relaxed">
                  {card.desc}
                </p>

                {/* Bottom line */}
                <div className="mt-8 h-px bg-white/5 group-hover:bg-primary/30 transition-colors duration-500" />
                <div className="mt-4 flex items-center gap-2 text-primary text-xs tracking-[0.2em] font-body opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span>LEARN MORE</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
