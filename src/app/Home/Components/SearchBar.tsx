// src/app/Home/Components/SearchBar.tsx
"use client";

import { useInView } from "../hooks/useInView";

export default function SearchBar() {
    const { ref, isInView } = useInView({ threshold: 0.15 });

    return (
        <div ref={ref} id="search" className="w-full max-w-6xl mx-auto px-4 scroll-mt-28">
            <div
                className={`flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl bg-white p-3 shadow-2xl transition-all duration-[1400ms] ease-luxury ${
                    isInView
                        ? "translate-y-0 scale-100 opacity-100 blur-0"
                        : "translate-y-12 scale-95 opacity-0 blur-xs"
                }`}
            >

                {/* Input Fields Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full md:w-auto flex-1 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">

                    {/* Pick Up Location */}
                    <div className="group flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-50/80 transition-all duration-300 rounded-lg sm:rounded-none active:scale-[0.98]">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-slate-400 shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:text-lime-500 group-hover:rotate-6"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <div className="flex-1">
                            <p className="text-xs font-semibold text-slate-800 transition-colors group-hover:text-black">Pick Up Location</p>
                            <p className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">Select Location</p>
                        </div>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-slate-400 shrink-0 transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-slate-800"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>

                    {/* Drop Off Location */}
                    <div className="group flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-50/80 transition-all duration-300 rounded-lg sm:rounded-none active:scale-[0.98]">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-slate-400 shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:text-lime-500 group-hover:rotate-6"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <div className="flex-1">
                            <p className="text-xs font-semibold text-slate-800 transition-colors group-hover:text-black">Drop Off Location</p>
                            <p className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">Select Location</p>
                        </div>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-slate-400 shrink-0 transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-slate-800"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>

                    {/* Pick Up Date */}
                    <div className="group flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-50/80 transition-all duration-300 rounded-lg sm:rounded-none active:scale-[0.98]">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-slate-400 shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:text-lime-500 group-hover:rotate-6"
                        >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        <div className="flex-1">
                            <p className="text-xs font-semibold text-slate-800 transition-colors group-hover:text-black">Pick Up Date</p>
                            <p className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">Select Date</p>
                        </div>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-slate-400 shrink-0 transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-slate-800"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>

                    {/* Return Date */}
                    <div className="group flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-50/80 transition-all duration-300 rounded-lg sm:rounded-none active:scale-[0.98]">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-slate-400 shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:text-lime-500 group-hover:rotate-6"
                        >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        <div className="flex-1">
                            <p className="text-xs font-semibold text-slate-800 transition-colors group-hover:text-black">Return Date</p>
                            <p className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">Select Date</p>
                        </div>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-slate-400 shrink-0 transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-slate-800"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>
                </div>

                {/* Search Button */}
                <div className="w-full md:w-auto px-2 pb-2 md:pb-0">
                    <button
                        type="button"
                        onClick={() => {
                            const el = document.getElementById("vehicles");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="group shimmer-effect w-full md:w-auto flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-lime-400 hover:text-black hover:scale-105 hover:shadow-xl hover:shadow-lime-400/30 active:scale-95 cursor-pointer"
                    >
                        <span>Search Cars</span>
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
                    </button>
                </div>
            </div>
        </div>
    );
}