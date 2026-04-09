"use client";

const footerLinks = {
  Company: ["About Porsche", "Careers", "Press", "Investor Relations"],
  Models: ["911 GT3 RS", "911 Turbo S", "718 Cayman GT4", "Taycan"],
  Experience: [
    "Porsche Experience Centers",
    "Motorsport",
    "Porsche Museum",
    "Heritage",
  ],
  Support: ["Contact", "Find a Dealer", "Porsche Finder", "Accessories"],
};

const socialLinks = [
  {
    name: "Instagram",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="4" width="20" height="16" rx="4" />
        <polygon points="10,8 16,12 10,16" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "X",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 4l16 16M20 4L4 20" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="section-shell bg-[#030303] border-t border-primary/20">
      {/* Main Footer */}
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-heading text-2xl tracking-wider text-white">
              PORSCHE
            </span>
            <p className="font-body text-white/30 text-sm font-light mt-4 leading-relaxed max-w-xs">
              There is no substitute. The Porsche 911 GT3 RS — track-focused
              precision engineering since 1963.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading text-sm tracking-[0.2em] text-white/70 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-white/30 text-sm hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/20 text-xs">
            © 2025 Dr. Ing. h.c. F. Porsche AG. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-white/20 text-xs hover:text-white/40 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-white/20 text-xs hover:text-white/40 transition-colors"
            >
              Legal Notice
            </a>
            <a
              href="#"
              className="font-body text-white/20 text-xs hover:text-white/40 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
