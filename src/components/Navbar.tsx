"use client";

import { useState, useEffect } from "react";

const navLinks = [
    { label: "Models", href: "#models" },
    { label: "Performance", href: "#performance" },
    { label: "Technology", href: "#technology" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "glass py-3" : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3">
                        <span className="font-heading text-3xl tracking-wider text-white">
                            PORSCHE
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="nav-link font-body text-sm font-medium tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <a
                        href="#contact"
                        className="hidden md:flex items-center px-5 py-2.5 border border-primary text-primary text-xs font-semibold tracking-widest uppercase btn-sweep hover:text-white transition-colors duration-300"
                    >
                        Configure
                    </a>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex flex-col gap-1.5 w-7 z-50"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2 w-7" : "w-7"
                                }`}
                        />
                        <span
                            className={`h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 w-0" : "w-5"
                                }`}
                        />
                        <span
                            className={`h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2 w-7" : "w-4"
                                }`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-500 ${mobileOpen ? "visible" : "invisible"
                    }`}
            >
                <div
                    className={`absolute inset-0 bg-black/80 transition-opacity duration-500 ${mobileOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setMobileOpen(false)}
                />
                <div
                    className={`absolute right-0 top-0 h-full w-72 bg-[#0A0A0A] border-l border-white/5 p-10 pt-24 flex flex-col gap-6 transition-transform duration-500 ${mobileOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {navLinks.map((link, i) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="font-heading text-2xl tracking-wider text-white/70 hover:text-primary transition-colors"
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="mt-auto">
                        <div className="h-px bg-white/10 mb-6" />
                        <a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="inline-block px-6 py-3 border border-primary text-primary text-sm font-semibold tracking-widest uppercase"
                        >
                            Configure
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
