// src/app/Home/Components/WhyChooseUs.tsx
"use client";

import { useInView } from "../hooks/useInView";
import AnimatedCounter from "./AnimatedCounter";

const features = [
  {
    title: "Affordable Price",
    desc: "Best rates, no hidden fees.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Clean & Safe",
    desc: "Fully inspected vehicles.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 5 6v6c0 4.2 2.9 8 7 9 4.1-1 7-4.8 7-9V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    desc: "Always here for you.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    title: "Easy Booking",
    desc: "Fast & hassle-free.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 15h8" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const { ref, isInView } = useInView({ threshold: 0.12 });

  return (
    <section ref={ref} id="about" className="bg-white py-24 sm:py-32 overflow-hidden scroll-mt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        
        {/* Left Image Block */}
        <div
          className={`relative mx-auto w-full max-w-lg lg:max-w-none transition-all duration-[2000ms] ease-luxury ${
            isInView
              ? "scale-100 rotate-0 opacity-100 blur-0"
              : "scale-90 -rotate-2 opacity-0 blur-xs"
          }`}
        >
          {/* Lime Green Accent Background */}
          <div
            className="absolute inset-0 bg-lime-400"
            style={{
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
              transform: "translate(-8px, 8px)",
            }}
          />
          
          {/* Main Image Container */}
          <div
            className="relative overflow-hidden bg-slate-900 shadow-2xl"
            style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury car interior"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right Content Block */}
        <div className="max-w-xl">
          <div
            className={`transition-all duration-[1400ms] ease-luxury ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Why Choose ZentriX
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              More Than Just <br />
              Car Rental
            </h2>
          </div>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                style={{
                  transitionDelay: isInView ? `${300 + idx * 200}ms` : "0ms",
                }}
                className={`group cursor-pointer rounded-2xl p-4 -m-4 flex flex-col items-start transition-all duration-[1400ms] ease-spring hover:bg-slate-50/80 hover:shadow-lg hover:-translate-y-1 ${
                  isInView
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-10 scale-90 opacity-0"
                }`}
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-lime-400 text-slate-900 shadow-md shadow-lime-400/20 transition-all duration-300 group-hover:scale-115 group-hover:rotate-6 group-hover:bg-lime-300 group-hover:shadow-lime-400/50 group-hover:shadow-lg ease-spring">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-slate-900 transition-colors duration-200 group-hover:text-black">
                  {feature.title === "24/7 Support" ? (
                    <>
                      <AnimatedCounter target={24} suffix="/7" isInView={isInView} duration={1200} /> Support
                    </>
                  ) : (
                    feature.title
                  )}
                </h3>
                <p className="mt-1 text-sm text-slate-500 transition-colors duration-200 group-hover:text-slate-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
