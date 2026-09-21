// src/app/Home/Components/CTA.tsx
export default function CTA() {
  return (
    <section className="px-6 pb-24 sm:pb-32">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-slate-900 to-fuchsia-600/20 px-8 py-16 text-center sm:px-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/25 blur-[100px]"
        />

        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to ship faster?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Join 12,000+ teams already building with Nimbus. Free to start, no
            credit card required.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Get started free
            </a>
            <a
              href="#"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}