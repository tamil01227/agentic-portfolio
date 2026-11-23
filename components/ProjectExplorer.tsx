"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/config";

const CATS = ["All", ...Array.from(new Set(PROJECTS.map(p => p.cat as string)))];
// One ring per project type, smallest group innermost. Counts come from the list, never typed by hand.
const RINGS = Array.from(new Set(PROJECTS.map(p => p.cat as string)))
  .map(c => ({ c, items: PROJECTS.map((p, i) => ({ p, i })).filter(x => x.p.cat === c) }))
  .sort((a, b) => a.items.length - b.items.length);
const STARS = Array.from({ length: 30 }, (_, i) => ({ x: (i * 37 + 11) % 100, y: (i * 53 + 7) % 100, s: 1 + (i % 3), d: (i % 7) * 0.5 }));
const INTERVAL = 3000; // ms per project

export default function ProjectExplorer() {
  const [cat, setCat] = useState("All");
  const [sel, setSel] = useState(0);
  const [paused, setPaused] = useState(false);
  const on = (c: string) => cat === "All" || c === cat;

  // Auto-play: move to the next project (within the active filter) every INTERVAL ms.
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setSel(s => {
      for (let k = 1; k <= PROJECTS.length; k++) {
        const j = (s + k) % PROJECTS.length;
        if (on(PROJECTS[j].cat)) return j;
      }
      return s;
    }), INTERVAL);
    return () => clearInterval(t);
  }, [paused, cat]); // eslint-disable-line react-hooks/exhaustive-deps

  const pickCat = (c: string) => {
    setCat(c);
    const f = PROJECTS.findIndex(p => c === "All" || p.cat === c);
    if (f >= 0) setSel(f);
  };
  const p = PROJECTS[sel];

  return (
    <div className="grid items-center gap-10 rounded-card border border-hair bg-white p-6 shadow-card md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects by type">
          {CATS.map(c => (
            <button key={c} onClick={() => pickCat(c)} aria-pressed={cat === c}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${cat === c ? "bg-ink text-white shadow-btn" : "bg-soft text-ink hover:-translate-y-0.5"}`}>{c}</button>
          ))}
        </div>

        <div className="orbit-map relative mx-auto aspect-square w-full max-w-[560px]"
          onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {STARS.map((s, i) => (
            <span key={i} aria-hidden className="star absolute rounded-full bg-brand/30"
              style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, animationDelay: `${s.d}s` }} />
          ))}

          {RINGS.map((r, ri) => {
            const d = 40 + ri * 22, dur = 30 + ri * 14, rev = ri % 2 === 1;
            return (
              <div key={r.c} className="absolute" style={{ inset: `${(100 - d) / 2}%` }}>
                <div className={`orbit absolute inset-0 rounded-full border border-dashed transition-colors duration-300 ${r.items.some(x => x.i === sel) ? "border-brand" : on(r.c) ? "border-brand/30" : "border-hair"}`}
                  style={{ animationDuration: `${dur}s`, animationDirection: rev ? "reverse" : "normal" }}>
                  {r.items.map(({ p: pr, i }, k) => {
                    const a = (k / r.items.length) * 2 * Math.PI + ri * 0.9;
                    const active = i === sel;
                    return (
                      <span key={pr.n} className="absolute" style={{ left: `${50 + 50 * Math.cos(a)}%`, top: `${50 + 50 * Math.sin(a)}%`, transform: "translate(-50%,-50%)" }}>
                        <span className="counter block" style={{ animationDuration: `${dur}s`, animationDirection: rev ? "normal" : "reverse" }}>
                          <button
                            onClick={() => { setSel(i); setPaused(true); setTimeout(() => setPaused(false), 6000); }}
                            aria-pressed={active} aria-label={pr.n}
                            className={`flex flex-col items-center gap-1 transition-opacity duration-300 ${on(r.c) ? "" : "opacity-30"}`}>
                            <span className={`block rounded-full border-2 border-brand transition-all duration-300 ${active ? "h-5 w-5 bg-brand shadow-lift" : "h-3.5 w-3.5 bg-white hover:bg-brand/30"}`} />
                            <span className={`whitespace-nowrap rounded bg-white/85 px-1.5 text-[11px] font-medium md:text-xs ${active ? "text-brand" : "text-ink"}`}>{pr.s}</span>
                          </button>
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="absolute inset-[40%] grid place-items-center rounded-full bg-brand text-center text-white shadow-lift">
            <motion.span aria-hidden className="absolute inset-0 rounded-full border border-brand"
              animate={{ scale: [1, 1.6], opacity: [0.5, 0] }} transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }} />
            <span><span className="block text-3xl font-extrabold leading-none md:text-4xl">{PROJECTS.length}</span><span className="text-[10px] font-medium md:text-xs">projects</span></span>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted"></p>
      </div>

      <div aria-live="polite" className="min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div key={p.n} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}
            className="relative rounded-card border border-hair bg-canvas p-7">
            <motion.span aria-hidden className="absolute inset-x-7 top-0 h-0.5 origin-left rounded-full bg-brand"
              initial={{ scaleX: 0 }} animate={{ scaleX: paused ? 0 : 1 }}
              transition={{ duration: paused ? 0 : INTERVAL / 1000, ease: "linear" }} />
            <span className="rounded-md border border-hair bg-white px-2 py-1 font-mono text-xs text-muted">{p.cat}</span>
            <h4 className="mt-4 text-2xl font-semibold leading-snug tracking-tight">{p.n}</h4>
            <p className="mt-3 text-muted">{p.d}</p>
            <p className="mt-6 text-sm font-medium text-brand">Project {sel + 1} of {PROJECTS.length}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}