// src/app/Home/Components/Collections.tsx
"use client";

import { useInView } from "../hooks/useInView";

const categories = [
    {
        name: "Sports Cars",
        desc: "Feel the power",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=800&auto=format&fit=crop",
        active: true,
    },
    {
        name: "SUVs",
        desc: "Go further",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop",
        active: false,
    },
    {
        name: "Luxury Cars",
        desc: "Travel in style",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop",
        active: false,
    },
    {
        name: "Electric Cars",
        desc: "Drive the future",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop",
        active: false,
    },
    {
        name: "Vans & MPVs",
        desc: "More space, more fun",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
        active: false,
    },
];

export default function Collections() {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    return (
        <section ref={ref} id="services" className="bg-white py-24 pt-32 overflow-hidden scroll-mt-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Header */}
                <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div
                        className={`transition-all duration-[1400ms] ease-luxury ${
                            isInView
                                ? "translate-x-0 opacity-100 blur-0"
                                : "-translate-x-12 opacity-0 blur-xs"
                        }`}
                    >
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                            Our Collection
                        </p>
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                            Find Your Perfect Ride
                        </h2>
                    </div>
                    <p
                        className={`max-w-sm text-sm leading-relaxed text-slate-500 transition-all duration-[1400ms] ease-luxury ${
                            isInView
                                ? "translate-x-0 opacity-100 blur-0"
                                : "translate-x-12 opacity-0 blur-xs"
                        }`}
                    >
                        From sporty coupes to spacious SUVs, we have the perfect vehicle
                        for every journey, occasion, and style.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {categories.map((category, idx) => (
                        <div
                            key={category.name}
                            onClick={() => {
                                const el = document.getElementById("vehicles");
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                            }}
                            style={{
                                transitionDelay: isInView ? `${idx * 180}ms` : "0ms",
                            }}
                            className={`group relative flex min-h-[240px] cursor-pointer flex-col justify-end overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl active:scale-95 ${
                                isInView
                                    ? "translate-y-0 scale-100 opacity-100 rotate-0"
                                    : "translate-y-16 scale-90 opacity-0 -rotate-1"
                            } ${
                                category.active
                                    ? "border-2 border-lime-400 bg-[#0a1a14] hover:shadow-lime-400/20"
                                    : "border border-slate-200 bg-slate-50 hover:border-lime-400/60 hover:shadow-slate-200/80"
                            }`}
                        >
                            {/* Image */}
                            <img
                                src={category.image}
                                alt={category.name}
                                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${category.active
                                        ? "opacity-60 mix-blend-luminosity"
                                        : "opacity-100"
                                    }`}
                            />

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 transition-opacity duration-300 ${
                                category.active
                                    ? "bg-gradient-to-t from-[#0a1a14] via-[#0a1a14]/80 to-transparent opacity-100"
                                    : "bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80"
                            }`} />

                            {/* Content */}
                            <div className="relative z-10">
                                <h3
                                    className={`text-base font-semibold transition-colors duration-200 group-hover:text-lime-400 ${
                                        category.active ? "text-white" : "text-white sm:text-slate-800 sm:group-hover:text-white"
                                    }`}
                                >
                                    {category.name}
                                </h3>
                                <p
                                    className={`mt-1 text-xs transition-colors duration-200 ${
                                        category.active ? "text-slate-400" : "text-slate-300 sm:text-slate-500 sm:group-hover:text-slate-300"
                                    }`}
                                >
                                    {category.desc}
                                </p>
                            </div>

                            {/* Arrow Button */}
                            <button
                                type="button"
                                aria-label={`Explore ${category.name}`}
                                className={`absolute bottom-5 right-5 grid h-9 w-9 place-items-center rounded-full bg-lime-400 text-black shadow-md shadow-lime-400/30 transition-all duration-300 hover:bg-lime-300 hover:scale-115 hover:rotate-12 hover:shadow-lg hover:shadow-lime-400/50 active:scale-90 ${
                                    category.active
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0"
                                }`}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}