"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/config";

const DWELL = 7000; // ms per pillar
const STEP = 900;   // ms between pipeline steps
const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ServicesExplorer() {
  const [sel, setSel] = useState(0);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const s = SERVICES[sel];

  // Auto-advance between pillars
  useEffect(() => {
    if (paused || reduced()) return;
    const t = setInterval(() => setSel(v => (v + 1) % SERVICES.length), DWELL);
    return () => clearInterval(t);
  }, [paused, sel]);

  // Light the pipeline step by step whenever the pillar changes
  useEffect(() => {
    const last = SERVICES[sel].flow.length - 1;
    if (reduced()) { setStep(last); return; }
    setStep(0);
    const t = setInterval(() => setStep(v => (v < last ? v + 1 : v)), STEP);
    return () => clearInterval(t);
  }, [sel]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div role="tablist" aria-label="Service pillars" className="flex flex-col gap-3">
        {SERVICES.map((v, i) => (
          <button key={v.t} role="tab" aria-selected={i === sel} onClick={() => setSel(i)}
            className={`relative overflow-hidden rounded-card border p-6 text-left transition duration-300 ${i === sel ? "border-brand/40 bg-white shadow-lift" : "border-hair bg-white/60 hover:-translate-y-0.5 hover:border-brand/30"}`}>
            <span className={`text-lg font-semibold ${i === sel ? "text-brand" : "text-ink"}`}>{v.t}</span>
            {i === sel && (
              <motion.span key={`${sel}-${paused}`} aria-hidden className="absolute inset-x-6 bottom-0 h-0.5 origin-left rounded-full bg-brand"
                initial={{ scaleX: 0 }} animate={{ scaleX: paused ? 0 : 1 }} transition={{ duration: paused ? 0 : DWELL / 1000, ease: "linear" }} />
            )}
          </button>
        ))}
      </div>

      <div aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.article key={s.t} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}
            className="rounded-card border border-hair bg-white p-7 shadow-card md:p-9">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              {s.flow.map((label, i) => (
                <div key={label} className="flex flex-col items-stretch gap-2 md:flex-1 md:flex-row md:items-center">
                  <span className={`flex min-h-[52px] min-w-0 flex-1 items-center justify-center rounded-xl border px-2 py-3 text-center text-xs font-medium transition-all duration-500 md:text-[13px] ${i <= step ? "border-brand bg-brand/10 text-brand" : "border-hair bg-canvas text-muted"} ${i === step ? "shadow-lift" : ""}`}>{label}</span>
                  <span aria-hidden className={`mx-auto h-4 w-px shrink-0 transition-colors duration-500 md:h-px md:w-3 ${i < step ? "bg-brand" : "bg-hair"} ${i === s.flow.length - 1 ? "hidden md:block md:opacity-0" : ""}`} />
                </div>
              ))}
            </div>
            <p className="mt-8 leading-relaxed text-muted">{s.d}</p>
            <p className="mt-4 text-sm font-semibold text-brand">{s.value}</p>
            <ul className="mt-6 space-y-2 border-t border-hair pt-6 text-sm">
              {s.b.map((b, i) => (
                <motion.li key={b} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.1 }} className="flex gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{b}
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}