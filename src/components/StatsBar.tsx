"use client";

import { useEffect, useRef } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 525, suffix: " HP", label: "Power" },
  { value: 4.0, suffix: " L", label: "Engine" },
  { value: 296, suffix: " km/h", label: "Top Speed" },
  { value: 3.2, suffix: " s", label: "0-100 km/h" },
  { value: 465, suffix: " Nm", label: "Torque" },
  { value: 1525, suffix: " Kg", label: "Weight" },
];

function animateCounter(
  el: HTMLElement,
  target: number,
  suffix: string,
  duration: number = 2000,
) {
  const start = performance.now();
  const isDecimal = target % 1 !== 0;

  const update = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease out: power2.out
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;

    el.textContent =
      (isDecimal ? current.toFixed(1) : Math.floor(current).toString()) +
      suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
}

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const counters =
              sectionRef.current?.querySelectorAll("[data-counter]");
            counters?.forEach((el) => {
              const target = parseFloat(el.getAttribute("data-target") || "0");
              const suffix = el.getAttribute("data-suffix") || "";
              animateCounter(el as HTMLElement, target, suffix);
            });
          }
        });
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="performance"
      className="section-shell w-full bg-surface border-t border-primary/30"
    >
      {/* German flag accent line */}
      <div className="w-full h-1 german-flag" />

      <div className="section-container py-16 md:py-20">
        {/* Section label */}
        <div className="text-center mb-12">
          <span className="section-kicker">Performance Specifications</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div
                data-counter
                data-target={stat.value}
                data-suffix={stat.suffix}
                className="font-heading text-4xl md:text-5xl text-white group-hover:text-primary transition-colors duration-500"
              >
                0{stat.suffix}
              </div>
              <div className="text-white/40 text-xs md:text-sm font-body tracking-[0.2em] uppercase mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
