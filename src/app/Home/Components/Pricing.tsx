// src/app/Home/Components/Pricing.tsx
"use client";

import { useState } from "react";
import { useInView } from "../hooks/useInView";
import AnimatedCounter from "./AnimatedCounter";

const pricingTiers = [
  {
    name: "Daily Explorer",
    badge: "Standard",
    price: { daily: 149, monthly: 119 },
    period: "per day",
    description: "Ideal for day trips, city cruising, and business meetings with premium style.",
    popular: false,
    features: [
      "150 miles included per day",
      "Choice of Luxury Sedans & SUVs",
      "Standard Collision Protection",
      "24/7 Roadside Assistance",
      "Free cancellation up to 24h prior",
      "Contactless digital check-in",
    ],
    cta: "Choose Daily",
  },
  {
    name: "Weekend Escape",
    badge: "Most Popular",
    price: { daily: 199, monthly: 159 },
    period: "per day",
    description: "The ultimate getaway package with high-performance coupes and convertibles.",
    popular: true,
    features: [
      "Unlimited weekend miles",
      "Access to Exotic & Sports Fleet",
      "Zero-Deductible Full Coverage",
      "Priority Airport Delivery & Pickup",
      "Complimentary Second Driver",
      "Dedicated 24/7 VIP Concierge Line",
      "Flexible rebooking guarantee",
    ],
    cta: "Book Weekend",
  },
  {
    name: "Monthly Elite Club",
    badge: "VIP Membership",
    price: { daily: 2499, monthly: 1999 },
    period: "per month",
    description: "Maximum flexibility with weekly vehicle swaps and white-glove door-to-door delivery.",
    popular: false,
    features: [
      "2,500 miles included per month",
      "Free vehicle swap every 7 days",
      "Full Supercar & Exotic Fleet Access",
      "Complimentary private chauffeur credits",
      "Free doorstep delivery anywhere",
      "Complete comprehensive coverage",
      "Weekly complimentary detailing",
    ],
    cta: "Join Elite Club",
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"daily" | "monthly">("daily");
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} id="pricing" className="relative w-full overflow-hidden bg-white py-24 sm:py-32 text-slate-900 scroll-mt-20">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-[1600ms] ease-luxury ${
            isInView ? "translate-y-0 opacity-100 blur-0" : "-translate-y-10 opacity-0 blur-xs"
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Pricing & Offer Tiers
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Choose Your <br />
            <span className="text-slate-900">Driving Experience</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Transparent pricing with zero surprise charges. All tiers include roadside assistance and multi-point vehicle inspection.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-100 p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setBillingCycle("daily")}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                billingCycle === "daily"
                  ? "bg-lime-400 text-black shadow-md scale-105"
                  : "text-slate-600 hover:bg-white/80 hover:text-slate-950"
              }`}
            >
              Standard Rates
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-lime-400 text-black shadow-md scale-105"
                  : "text-slate-600 hover:bg-white/80 hover:text-slate-950"
              }`}
            >
              <span>Member Rates</span>
              <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-lime-400 shadow-sm animate-pulse">
                Save <AnimatedCounter target={20} suffix="%" isInView={isInView} duration={1400} />
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
          {pricingTiers.map((tier, idx) => (
            <div
              key={tier.name}
              style={{
                transitionDelay: isInView ? (tier.popular ? "400ms" : idx === 0 ? "200ms" : "600ms") : "0ms",
              }}
              className={`group/card relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                isInView
                  ? tier.popular
                    ? "translate-y-0 lg:-translate-y-3 scale-100 opacity-100"
                    : "translate-y-0 scale-100 opacity-100"
                  : tier.popular
                    ? "translate-y-24 scale-90 opacity-0"
                    : "translate-y-16 scale-95 opacity-0"
              } ${
                tier.popular
                  ? "border-2 border-lime-400 bg-slate-950 text-white shadow-2xl shadow-slate-950/20 ring-4 ring-lime-400/20 hover:shadow-lime-400/20"
                  : "border border-slate-800 bg-slate-900/95 text-white shadow-xl hover:border-slate-700 hover:shadow-slate-900/50"
              }`}
            >
              {/* Most Popular Ribbon */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-lime-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-black shadow-md transition-transform duration-300 group-hover/card:scale-105">
                  {tier.badge}
                </div>
              )}

              <div>
                {/* Tier Name & Badge */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover/card:text-lime-400">{tier.name}</h3>
                  {!tier.popular && (
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300 uppercase tracking-wider">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-400">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-1.5 border-b border-slate-800 pb-6">
                  <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    <AnimatedCounter
                      target={billingCycle === "daily" ? tier.price.daily : tier.price.monthly}
                      prefix="$"
                      isInView={isInView}
                      duration={1800}
                    />
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    /{billingCycle === "daily" ? tier.period : "month"}
                  </span>
                </div>

                {/* Feature List */}
                <ul className="mt-6 space-y-3.5 text-xs text-slate-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="group/feat flex items-center gap-3 transition-colors duration-200 hover:text-white cursor-pointer">
                      <div className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-lime-400 text-slate-950 font-bold transition-all duration-300 group-hover/feat:scale-125 group-hover/feat:rotate-12 group-hover/feat:bg-lime-300 shadow-sm">
                        <svg
                          className="h-2.5 w-2.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span className="group-hover/feat:translate-x-0.5 transition-transform duration-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className={`group/btn shimmer-effect flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs font-bold transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-95 cursor-pointer ${
                    tier.popular
                      ? "bg-lime-400 text-black shadow-lg shadow-lime-400/25 hover:bg-lime-300 hover:shadow-lime-400/40"
                      : "border border-white/20 bg-white/5 text-white hover:border-lime-400 hover:bg-lime-400 hover:text-black hover:shadow-lg hover:shadow-lime-400/20"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}