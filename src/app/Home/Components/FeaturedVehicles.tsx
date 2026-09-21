"use client";

import { useState } from "react";
import { useInView } from "../hooks/useInView";
import AnimatedCounter from "./AnimatedCounter";

const vehicles = [
    {
        name: "Mercedes-Benz C-Class",
        category: "Luxury Sedan",
        price: 120,
        rating: 5,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2000&auto=format&fit=crop",
        thumb: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=200&auto=format&fit=crop",
    },
    {
        name: "BMW M4 Competition",
        category: "Sports Coupe",
        price: 180,
        rating: 5,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000&auto=format&fit=crop",
        thumb: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=200&auto=format&fit=crop",
    },
    {
        name: "Porsche 911 Carrera",
        category: "Exotic Sports",
        price: 250,
        rating: 5,
        reviews: 184,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
        thumb: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=200&auto=format&fit=crop",
    },
];

export default function FeaturedVehicles() {
    const [selected, setSelected] = useState(0);
    const current = vehicles[selected];
    const { ref, isInView } = useInView({ threshold: 0.1 });

    return (
        <section ref={ref} id="vehicles" className="relative flex min-h-[700px] w-full items-center overflow-hidden bg-slate-950 py-24 pb-48 lg:min-h-[720px] lg:py-32 lg:pb-32 scroll-mt-20">
            {/* 1. Vehicle Image: 75% width on desktop, aligned to the LEFT */}
            <div className="absolute top-0 left-0 h-full w-full md:w-[75%] pointer-events-none z-0">
                <img
                    key={current.image}
                    src={current.image}
                    alt={current.name}
                    className={`h-full w-full object-cover object-center md:object-left transition-all duration-[2000ms] ease-luxury ${
                        isInView
                            ? "translate-x-0 scale-100 opacity-100"
                            : "-translate-x-20 scale-105 opacity-0"
                    }`}
                />
            </div>

            {/* 2. Gradient Scrim Overlay: Aligned to the RIGHT, fading towards the left */}
            <div className="absolute top-0 right-0 h-full w-full md:w-[85%] bg-gradient-to-l from-slate-950 from-15% via-slate-950/85 via-45% to-slate-950/0 pointer-events-none z-0" />

            {/* 3. Top & Bottom Vertical Bleed: Seamless transition into neighboring sections */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none z-0" />

            {/* Content Container (Writing aligned to the right) */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
                <div className="flex justify-end">
                    <div
                        className={`w-full max-w-lg lg:ml-auto transition-all duration-[1600ms] ease-luxury ${
                            isInView
                                ? "translate-x-0 opacity-100 blur-0"
                                : "translate-x-20 opacity-0 blur-xs"
                        }`}
                    >
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
                            Featured Vehicles
                        </p>
                        <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                            Popular Picks <br />
                            <span className="text-lime-400">Right Now</span>
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-slate-300">
                            Explore our most rented vehicles, loved by our customers for their
                            performance, comfort and style.
                        </p>
                        <a
                            href="#pricing"
                            className="group shimmer-effect mt-10 inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-lime-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-lime-400/30 active:scale-95 cursor-pointer"
                        >
                            <span>View All Vehicles</span>
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

            {/* Anchored at Very Left Bottom Corner: Price Tag Card + Image Toggle underneath */}
            <div
                className={`absolute bottom-6 left-6 z-20 flex flex-col items-start gap-3 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-12 transition-all duration-[1600ms] delay-[400ms] ease-luxury ${
                    isInView
                        ? "translate-y-0 scale-100 opacity-100"
                        : "translate-y-16 scale-95 opacity-0"
                }`}
            >
                {/* Price Tag & Details Card */}
                <div className="group/card w-72 rounded-2xl border border-white/10 bg-slate-900/85 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-lime-400/40 hover:shadow-lime-400/10 hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                        <span className="rounded-full bg-lime-400/20 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-lime-400 uppercase group-hover/card:bg-lime-400/30 transition-colors">
                            Available Now
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                            <AnimatedCounter target={2024} isInView={isInView} duration={1400} />
                        </span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-white transition-colors group-hover/card:text-lime-400">
                        {current.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-400">{current.category}</p>

                    <div className="mt-3 flex items-center gap-1.5">
                        <div className="flex text-lime-400">
                            {[...Array(current.rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="transition-transform duration-200 group-hover/card:scale-110"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-xs text-slate-400">
                            (<AnimatedCounter target={current.reviews} isInView={isInView} duration={1600} /> reviews)
                        </span>
                    </div>

                    <div className="mt-4 flex items-baseline justify-between border-t border-slate-800 pt-3">
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-white">
                                <AnimatedCounter target={current.price} prefix="$" isInView={isInView} duration={1600} />
                            </span>
                            <span className="text-xs text-slate-400">/day</span>
                        </div>
                        <a
                            href="#pricing"
                            className="shimmer-effect inline-flex items-center gap-1 rounded-lg bg-lime-400 px-3 py-1.5 text-xs font-bold text-black transition-all duration-300 hover:bg-lime-300 hover:scale-105 active:scale-95 shadow-md shadow-lime-400/20"
                        >
                            <span>Rent</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Image Toggle (Thumbnails directly at the bottom of the price tag) */}
                <div className="flex items-center gap-2.5">
                    {vehicles.map((v, i) => (
                        <button
                            key={v.name}
                            type="button"
                            onClick={() => setSelected(i)}
                            aria-label={`Select ${v.name}`}
                            className={`relative h-12 w-20 overflow-hidden rounded-xl border-2 transition-all duration-300 sm:h-14 sm:w-24 hover:scale-105 hover:-translate-y-1 active:scale-95 cursor-pointer ${
                                selected === i
                                    ? "border-lime-400 ring-2 ring-lime-400/50 shadow-lg shadow-lime-400/30 scale-105"
                                    : "border-transparent opacity-60 hover:opacity-100 hover:border-white/30"
                            }`}
                        >
                            <img
                                src={v.thumb}
                                alt={v.name}
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}