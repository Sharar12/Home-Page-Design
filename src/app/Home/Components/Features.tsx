// src/app/Home/Components/Features.tsx
type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const features: Feature[] = [
  {
    title: "Unified roadmap",
    description:
      "Plan quarters in one view. Drag, drop, and let everyone know what matters next.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 6h18M3 12h12M3 18h6" />
      </svg>
    ),
  },
  {
    title: "AI sprint planning",
    description:
      "Nimbus estimates effort and balances workload across your team automatically.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Realtime sync",
    description:
      "Every update lands instantly across web, desktop, and mobile. No refresh needed.",
    icon: (
      <svg {...iconProps}>
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 3v6h-6" />
      </svg>
    ),
  },
  {
    title: "Deep integrations",
    description:
      "Connect GitHub, Slack, and Figma so context never leaves the conversation.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <path d="M10 6.5h4a3 3 0 0 1 3 3v4" />
      </svg>
    ),
  },
  {
    title: "Insights that matter",
    description:
      "Track velocity, cycle time, and blockers with dashboards your team will actually read.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
  },
  {
    title: "Enterprise security",
    description:
      "SOC 2 Type II, SSO/SAML, and granular permissions out of the box.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3 5 6v6c0 4.2 2.9 8 7 9 4.1-1 7-4.8 7-9V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-indigo-400">Features</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything your team needs. Nothing it does not.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Built for the way modern product teams actually work — fast,
            focused, and out of your way.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 text-indigo-300 ring-1 ring-inset ring-white/10">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}