"use client";

import { useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";
import AnimatedCounter from "./AnimatedCounter";

const testimonials = [
  {
    quote:
      "ZentriX made our road trip unforgettable! The Porsche 911 was in showroom condition and the pickup took less than two minutes.",
    author: "Sarah Johnson",
    location: "New York, USA",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    rating: 5,
  },
  {
    quote:
      "Renting the Mercedes C-Class for our business conference in Miami was effortless. 24/7 concierge support answered every question instantly.",
    author: "David Chen",
    location: "San Francisco, USA",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    rating: 5,
  },
  {
    quote:
      "Hands down the best luxury rental agency. Zero hidden fees, pristine vehicles, and unbeatable weekend rates. Will definitely book again!",
    author: "Elena Rostova",
    location: "London, UK",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    rating: 5,
  },
  {
    quote:
      "We took the BMW M4 up the Pacific Coast Highway. The car sounded glorious and performed like a dream. Top-tier service from start to finish.",
    author: "Marcus Vance",
    location: "Austin, Texas",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 4.5 seconds (paused when user hovers)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} id="testimonials" className="relative w-full overflow-hidden bg-slate-950 py-24 sm:py-32 scroll-mt-20">
      {/* 1. Background Image Container: 75% width on desktop, aligned to the right */}
      <div className="absolute top-0 right-0 h-full w-full md:w-[75%] pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2000&auto=format&fit=crop"
          alt="Car on a road at dusk"
          className={`h-full w-full object-cover object-center md:object-right transition-all duration-[2000ms] ease-luxury ${
            isInView
              ? "scale-100 opacity-85 lg:opacity-90 blur-0"
              : "scale-110 opacity-20 blur-sm"
          }`}
        />
      </div>

      {/* 2. Gradient Scrim Overlay: 85% width for a wide, gradual fade visibility length */}
      <div className="absolute top-0 left-0 h-full w-full md:w-[85%] bg-gradient-to-r from-slate-950 from-15% via-slate-950/85 via-45% to-slate-950/0 pointer-events-none z-0" />

      {/* 3. Top & Bottom Vertical Bleed: Seamless transition into neighboring sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Top Section: Testimonials Header & Auto-Sliding Card */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* Left Column: Heading & Navigation Controls */}
          <div
            className={`transition-all duration-[1600ms] ease-luxury ${
              isInView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
              Testimonials
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              What Our <br />
              <span className="text-lime-400">Customers Say</span>
            </h2>

            {/* Live Trust Metric Rating */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-1 text-lime-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-bold text-white">
                <AnimatedCounter target={4.9} decimals={1} isInView={isInView} duration={1400} />/5
              </span>
              <span className="text-xs text-slate-400">
                (from <AnimatedCounter target={2850} suffix="+" isInView={isInView} duration={1800} /> verified customer reviews)
              </span>
            </div>

            {/* Navigation Arrows & Progress Dots */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="group grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 hover:border-lime-400 hover:bg-lime-400/15 hover:text-lime-400 hover:scale-110 hover:shadow-lg hover:shadow-lime-400/25 active:scale-90 cursor-pointer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  >
                    <path d="M19 12H5" />
                    <path d="m12 19-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="group grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 hover:border-lime-400 hover:bg-lime-400/15 hover:text-lime-400 hover:scale-110 hover:shadow-lg hover:shadow-lime-400/25 active:scale-90 cursor-pointer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Auto-Slide Indicator Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to review ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === i
                        ? "w-8 bg-lime-400"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sliding Carousel Track */}
          <div
            className={`w-full max-w-xl overflow-hidden rounded-3xl shadow-2xl transition-all duration-[1600ms] delay-[200ms] ease-luxury ${
              isInView
                ? "translate-x-0 opacity-100 blur-0"
                : "translate-x-16 opacity-0 blur-xs"
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <div
                  key={item.author}
                  className="w-full shrink-0 rounded-3xl border border-white/10 bg-slate-900/85 p-8 backdrop-blur-md"
                >
                  <blockquote className="min-h-[100px] text-lg leading-relaxed text-slate-200 sm:text-xl font-light">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>

                  <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                    {/* Author Avatar */}
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-lime-400/40"
                    />

                    {/* Author Details */}
                    <div className="flex-1">
                      <p className="text-base font-semibold text-white">
                        {item.author}
                      </p>
                      <p className="text-xs text-slate-400">{item.location}</p>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 text-lime-400">
                      {[...Array(item.rating)].map((_, starIdx) => (
                        <svg
                          key={starIdx}
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Floating White CTA Bar */}
        <div
          className={`relative mt-24 transition-all duration-[1600ms] delay-[400ms] ease-luxury ${
            isInView
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-16 scale-95 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-white p-6 shadow-2xl sm:p-8 md:flex-row">
            
            {/* Left Side: Copy & Icon */}
          <div className="flex items-center gap-5">
            <div className="group grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-lime-400 text-slate-900 shadow-md shadow-lime-400/20 transition-all duration-300 hover:scale-115 hover:rotate-6 hover:shadow-lg hover:shadow-lime-400/40 cursor-pointer">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M5 17h14v2H5z" />
                <path d="M5 17v-4l2-4h10l2 4v4" />
                <path d="M7 13h10" />
              </svg>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Ready to Hit the Road?
              </h3>
              <p className="text-sm text-slate-500">
                Book your dream car today and make every journey special.
              </p>
            </div>
          </div>

          {/* Right Side: CTA Button */}
          <a
            href="#pricing"
            className="group shimmer-effect flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-lime-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lime-400/30 active:scale-95 md:w-auto cursor-pointer"
          >
            <span>Book Now</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}