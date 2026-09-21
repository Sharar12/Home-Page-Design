// src/app/Home/Components/Hero.tsx
"use client";

import { useInView } from "../hooks/useInView";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} id="hero" className="relative flex min-h-screen w-full items-center overflow-hidden bg-slate-950">

      {/* 1. Image Container: 75% width on desktop, aligned to the right */}
      <div className="absolute top-0 right-0 h-full w-full md:w-[75%] pointer-events-none">
        {/* Replace the src below with your actual car image */}
        <img
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury sports car"
          className={`h-full w-full object-cover object-center md:object-right transition-all duration-[2000ms] ease-luxury ${
            isInView ? "scale-100 opacity-100 blur-0" : "scale-108 opacity-20 blur-sm"
          }`}
        />
      </div>

      {/* 2. Gradient Overlay: Extended to 85% width for a wide, gradual fade visibility length.
          Keeps strong opacity behind the text while feathering smoothly across the car. */}
      <div className="absolute top-0 left-0 h-full w-full md:w-[85%] bg-gradient-to-r from-slate-950 from-15% via-slate-950/85 via-45% to-slate-950/0 pointer-events-none" />

      {/* 3. Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-24 md:pb-28">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">

          {/* Left Side: Tag, Headline, Subtext, Feature Highlights */}
          <div
            className={`lg:col-span-7 max-w-xl transition-all duration-[1600ms] ease-luxury ${
              isInView ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-xs"
            }`}
          >
            {/* Small Tag */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
                Premium Car Rentals
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
              Drive Your <br />
              <span className="text-lime-400">Dreams</span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Luxury cars. Flexible rentals. Unforgettable journeys. Experience
              the freedom of the road with ZentriX.
            </p>

            {/* Feature Highlights */}
            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-200 sm:flex-row sm:flex-wrap sm:gap-4">
              {/* Feature 1 */}
              <div className="group flex items-center gap-2.5 rounded-xl px-2.5 py-1.5 -mx-2.5 transition-all duration-300 hover:bg-white/5 hover:scale-105 cursor-pointer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-lime-400 shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:text-lime-300"
                >
                  <path d="M5 17h14v2H5z" />
                  <path d="M5 17v-4l2-4h10l2 4v4" />
                  <path d="M7 13h10" />
                </svg>
                <span className="transition-colors duration-200 group-hover:text-white">Premium Fleet Collection</span>
              </div>

              {/* Feature 2 */}
              <div className="group flex items-center gap-2.5 rounded-xl px-2.5 py-1.5 -mx-2.5 transition-all duration-300 hover:bg-white/5 hover:scale-105 cursor-pointer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-lime-400 shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:text-lime-300"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
                <span className="transition-colors duration-200 group-hover:text-white">
                  <AnimatedCounter target={24} suffix="/7" isInView={isInView} duration={1200} /> Roadside Support
                </span>
              </div>

              {/* Feature 3 */}
              <div className="group flex items-center gap-2.5 rounded-xl px-2.5 py-1.5 -mx-2.5 transition-all duration-300 hover:bg-white/5 hover:scale-105 cursor-pointer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-lime-400 shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:text-lime-300"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
                <span className="transition-colors duration-200 group-hover:text-white">Easy & Secure Booking</span>
              </div>
            </div>
          </div>

          {/* Right Side: CTA Buttons & Live Metrics Counter */}
          <div
            className={`lg:col-span-5 flex flex-col items-start lg:items-end justify-end transition-all duration-[1600ms] delay-200 ease-luxury ${
              isInView ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-xs"
            }`}
          >
            <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-slate-950/[0.67] p-6 sm:p-7 shadow-xl shadow-black/40 transition-all duration-500 hover:border-lime-400/30">
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                {/* Explore Cars Button */}
                <a
                  href="#vehicles"
                  className="group shimmer-effect flex-1 sm:flex-initial flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 sm:px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-lime-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-lime-400/30 active:scale-95 cursor-pointer"
                >
                  <span>Explore Cars</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>

                {/* Watch Video Button */}
                <a
                  href="#about"
                  className="group flex-1 sm:flex-initial flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-4.5 py-2.5 text-white transition-all duration-300 hover:border-lime-400/60 hover:bg-white/10 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10 active:scale-95 cursor-pointer"
                >
                  <div className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/5 shrink-0 transition-all duration-300 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black group-hover:scale-110 shadow-md group-hover:shadow-lime-400/30">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-0.5 transition-transform duration-300 group-hover:scale-110"
                    >
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium transition-colors group-hover:text-lime-400">Watch Video</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      How it Works
                    </p>
                  </div>
                </a>
              </div>

              {/* Live Metrics Counter */}
              <div className="mt-6 sm:mt-7 flex items-center justify-between border-t border-white/10 pt-5 sm:pt-6">
                <div>
                  <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    <AnimatedCounter target={50} suffix="+" isInView={isInView} duration={1600} />
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">Luxury Fleet</p>
                </div>
                <div className="h-9 w-[1px] bg-white/10" />
                <div>
                  <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    <AnimatedCounter target={12500} suffix="+" isInView={isInView} duration={1800} />
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">Happy Drivers</p>
                </div>
                <div className="h-9 w-[1px] bg-white/10" />
                <div>
                  <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    <AnimatedCounter target={99.4} decimals={1} suffix="%" isInView={isInView} duration={1600} />
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">Satisfaction</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}