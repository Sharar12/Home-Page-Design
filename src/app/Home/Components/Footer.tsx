// src/app/Home/Components/Footer.tsx
"use client";

import { useInView } from "../hooks/useInView";
import ZXLogo from "./ZXLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fleetLinks = [
    { name: "Sports & Supercars", href: "#" },
    { name: "Luxury Sedans", href: "#" },
    { name: "Premium SUVs", href: "#" },
    { name: "Electric & Hybrid", href: "#" },
    { name: "Convertibles", href: "#" },
  ];

  const serviceLinks = [
    { name: "Chauffeur Service", href: "#" },
    { name: "Airport Meet & Greet", href: "#" },
    { name: "Corporate Fleet", href: "#" },
    { name: "Long-Term Rental", href: "#" },
    { name: "Weddings & VIP Events", href: "#" },
  ];

  const supportLinks = [
    { name: "24/7 Roadside Assistance", href: "#" },
    { name: "Rental Protection Plans", href: "#" },
    { name: "FAQ & Help Center", href: "#" },
    { name: "Pick-up & Drop-off Points", href: "#" },
    { name: "Damage Waiver Terms", href: "#" },
  ];

  const trustBadges = [
    {
      title: "Best Rate Guarantee",
      desc: "Transparent rates with zero hidden fees",
      icon: (
        <svg className="h-5 w-5 text-lime-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "24/7 VIP Support",
      desc: "Instant concierge & roadside backup",
      icon: (
        <svg className="h-5 w-5 text-lime-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Fully Sanitized Fleet",
      desc: "Multi-point inspection before every drive",
      icon: (
        <svg className="h-5 w-5 text-lime-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Flexible Cancellations",
      desc: "Free cancellation up to 24h prior to pickup",
      icon: (
        <svg className="h-5 w-5 text-lime-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const { ref, isInView } = useInView({ threshold: 0.08 });

  return (
    <footer ref={ref} id="contact" className="relative border-t border-slate-800/80 bg-slate-950 text-slate-300 overflow-hidden scroll-mt-20">
      {/* Top Trust Features Strip */}
      <div
        className={`border-b border-slate-800/80 bg-slate-900/40 transition-all duration-[1600ms] ease-luxury ${
          isInView ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="group flex items-center gap-3.5 p-2 rounded-xl transition-all duration-300 hover:bg-white/[0.04] cursor-pointer">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime-400/10 border border-lime-400/20 transition-all duration-300 group-hover:scale-115 group-hover:rotate-6 group-hover:border-lime-400 group-hover:bg-lime-400/20 group-hover:shadow-md group-hover:shadow-lime-400/20 ease-spring">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {badge.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white transition-colors group-hover:text-lime-400">{badge.title}</h4>
                  <p className="text-xs text-slate-400">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div
        className={`mx-auto max-w-7xl px-6 pt-16 pb-12 transition-all duration-[1800ms] delay-[200ms] ease-luxury ${
          isInView ? "translate-y-0 opacity-100 blur-0" : "translate-y-12 opacity-0 blur-xs"
        }`}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Brand & Newsletter Column (4 cols) */}
          <div className="lg:col-span-4">
            <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-block">
              <ZXLogo size="md" showWordmark={true} />
            </div>
            
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Luxury cars. Flexible rentals. Unforgettable journeys. Experience the freedom of the road with ZentriX&apos;s curated exotic and luxury fleet.
            </p>

            {/* Newsletter Input */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Subscribe for Exclusive Member Offers
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex max-w-md items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-full border border-slate-800 bg-slate-900/90 px-4 py-2.5 text-xs text-white placeholder-slate-500 backdrop-blur-sm transition-all focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400"
                  />
                </div>
                <button
                  type="submit"
                  className="shimmer-effect rounded-full bg-lime-400 px-6 py-2.5 text-xs font-semibold text-black transition-all duration-300 hover:bg-lime-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lime-400/30 active:scale-95 cursor-pointer"
                >
                  Join VIP
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Links Columns (8 cols) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {/* Column 1: Fleet */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-lime-400">
                Our Fleet
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {fleetLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="inline-block text-slate-400 transition-all duration-200 hover:text-lime-400 hover:translate-x-1.5">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-lime-400">
                Services
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="inline-block text-slate-400 transition-all duration-200 hover:text-lime-400 hover:translate-x-1.5">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Support & Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-lime-400">
                Support & Concierge
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="inline-block text-slate-400 transition-all duration-200 hover:text-lime-400 hover:translate-x-1.5">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Direct Hotline Badge */}
              <div className="group mt-6 rounded-2xl border border-white/5 bg-slate-900/60 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-lime-400/30 hover:bg-slate-900/90 hover:scale-[1.02] hover:shadow-md hover:shadow-lime-400/10 cursor-pointer">
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium transition-colors group-hover:text-slate-300">
                  24/7 VIP Concierge
                </p>
                <a href="tel:+18005557623" className="mt-1 block text-sm font-semibold text-lime-400 transition-all duration-200 group-hover:text-lime-300 group-hover:translate-x-0.5">
                  +1 (800) 555-ROAD &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800/80 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} ZentriX Luxury Rentals, Inc. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="group grid h-9 w-9 place-items-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-400 transition-all duration-300 hover:border-lime-400 hover:bg-lime-400/15 hover:text-lime-400 hover:scale-115 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-400/25 active:scale-90 cursor-pointer"
            >
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="#"
              aria-label="X (Twitter)"
              className="group grid h-9 w-9 place-items-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-400 transition-all duration-300 hover:border-lime-400 hover:bg-lime-400/15 hover:text-lime-400 hover:scale-115 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-400/25 active:scale-90 cursor-pointer"
            >
              <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="group grid h-9 w-9 place-items-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-400 transition-all duration-300 hover:border-lime-400 hover:bg-lime-400/15 hover:text-lime-400 hover:scale-115 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-400/25 active:scale-90 cursor-pointer"
            >
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="transition-colors duration-200 hover:text-lime-400 hover:underline">Privacy Policy</a>
            <a href="#" className="transition-colors duration-200 hover:text-lime-400 hover:underline">Terms of Service</a>
            <a href="#" className="transition-colors duration-200 hover:text-lime-400 hover:underline">Rental Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}