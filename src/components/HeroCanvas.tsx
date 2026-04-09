"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { preloadFrames, TOTAL_FRAMES } from "@/lib/frameLoader";

export default function HeroCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef(0);
    const rafRef = useRef<number | null>(null);
    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);

    const drawFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imagesRef.current[index];
        if (!img || !img.complete || !img.naturalWidth) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Cover the canvas
        const scale = Math.max(
            canvas.width / img.naturalWidth,
            canvas.height / img.naturalHeight
        );
        const x = (canvas.width - img.naturalWidth * scale) / 2;
        const y = (canvas.height - img.naturalHeight * scale) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            x,
            y,
            img.naturalWidth * scale,
            img.naturalHeight * scale
        );
    }, []);

    const handleScroll = useCallback(() => {
        if (!sectionRef.current || !loaded) return;

        const section = sectionRef.current;
        const scrollTop = window.scrollY - section.offsetTop;
        const scrollHeight = section.offsetHeight - window.innerHeight;
        const scrollProgress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);

        const frameIndex = Math.min(
            Math.floor(scrollProgress * (TOTAL_FRAMES - 1)),
            TOTAL_FRAMES - 1
        );

        if (frameIndex !== currentFrameRef.current && frameIndex >= 0) {
            currentFrameRef.current = frameIndex;
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
        }

        // Update progress bar
        const bar = document.getElementById("scroll-progress-bar");
        if (bar) {
            bar.style.height = `${scrollProgress * 100}%`;
        }
    }, [loaded, drawFrame]);

    useEffect(() => {
        preloadFrames((loadedCount, total) => {
            setProgress(Math.floor((loadedCount / total) * 100));
        }).then((images) => {
            imagesRef.current = images;
            setLoaded(true);
            drawFrame(0);
        });
    }, [drawFrame]);

    useEffect(() => {
        if (!loaded) return;
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", () => drawFrame(currentFrameRef.current));
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loaded, handleScroll, drawFrame]);

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative"
            style={{ height: "500vh" }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Loading screen */}
                {!loaded && (
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]">
                        <span className="font-heading text-6xl md:text-8xl tracking-wider text-white mb-6">
                            PORSCHE
                        </span>
                        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <span className="mt-3 text-white/40 text-sm font-body tracking-widest">
                            {progress}%
                        </span>
                    </div>
                )}

                {/* Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Vignette + Gradient Overlays */}
                <div className="absolute inset-0 vignette pointer-events-none" />
                <div className="absolute inset-0 gradient-left pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-40 gradient-bottom pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-32 gradient-top pointer-events-none" />

                {/* Large Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                    <h1
                        className="font-heading text-[18vw] leading-none text-white/[0.03] tracking-[0.1em]"
                        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.03)" }}
                    >
                        PORSCHE
                    </h1>
                </div>

                {/* Left Content Overlay */}
                <div className="absolute bottom-24 md:bottom-32 left-6 md:left-16 z-10 max-w-xl">
                    <span className="inline-block text-primary text-xs md:text-sm font-semibold tracking-[0.34em] uppercase mb-5 font-body">
                        Track Specification — 2025
                    </span>
                    <h2 className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-[10vw] leading-[0.8] text-white mb-6 tracking-tighter">
                        911 GT3{" "}
                        <span className="text-primary">RS</span>
                    </h2>
                    <p className="font-body text-white/50 text-base md:text-lg font-light leading-relaxed max-w-md mb-8">
                        Every angle engineered for precision. Every surface
                        optimized for performance. Born on the track.
                    </p>
                    <a
                        href="#performance"
                        className="inline-flex items-center gap-4 px-8 py-4 border border-primary text-primary text-[10px] font-bold tracking-[0.3em] uppercase btn-sweep hover:text-white transition-all duration-300"
                    >
                        Explore the Machine
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                {/* Scroll Progress Bar (Right) */}
                <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-[2px] h-32 bg-white/10 rounded-full overflow-hidden">
                        <div
                            id="scroll-progress-bar"
                            className="w-full bg-primary transition-[height] duration-200 rounded-full"
                            style={{ height: "0%" }}
                        />
                    </div>
                </div>

                {/* Scroll Arrow Hint */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 scroll-indicator">
                    <span className="text-white/30 text-[10px] font-body tracking-[0.3em] uppercase">
                        Scroll
                    </span>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="1.5"
                    >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
