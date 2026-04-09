"use client";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="section-shell py-24 md:py-32 overflow-hidden gradient-mesh"
      style={{ backgroundColor: "var(--color-background)" }}
    >


      {/* Background decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-white/[0.03]" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/[0.03]" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-white/[0.03]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Tag */}
        <span className="section-kicker mb-6">Book Your Experience</span>

        {/* Headline */}
        <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white leading-[0.85] mb-8 tracking-tighter">
          EXPERIENCE
          <br />
          THE <span className="text-primary">911</span>
        </h2>

        {/* Subtext */}
        <p className="section-copy text-base md:text-lg max-w-lg mx-auto mb-12">
          Book a private viewing session and witness precision engineering in
          its purest form.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#"
            className="w-full sm:w-auto px-12 py-5 bg-primary text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#c82e2f] hover:scale-105 active:scale-95 transition-all duration-300 pulse-red text-center"
          >
            Book Now
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-12 py-5 border border-white/10 text-white/50 text-[10px] font-bold tracking-[0.3em] uppercase btn-sweep hover:text-white hover:border-primary hover:scale-105 active:scale-95 transition-all duration-300 text-center"
          >
            Learn More
          </a>
        </div>

        {/* German flag accent */}
        <div className="w-16 h-1 german-flag mx-auto mt-16" />
      </div>
    </section>
  );
}
