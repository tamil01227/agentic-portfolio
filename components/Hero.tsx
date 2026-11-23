"use client";
import { motion } from "framer-motion";
import Avatar from "./Avatar";
import { TEAM_NAME, MEMBERS } from "@/lib/config";
const LINES = [["Turn", "Complex"], ["Work Into"], ["Intelligent", "Automation."]];
export const primaryBtn = "inline-flex items-center justify-center rounded-lg bg-ink px-6 py-3.5 text-sm font-medium text-white shadow-btn transition hover:-translate-y-0.5";
export const secondaryBtn = "inline-flex items-center justify-center rounded-lg bg-soft px-6 py-3.5 text-sm font-medium text-ink transition hover:-translate-y-0.5";
const pos = ["left-[2%] top-[13%]", "right-[2%] top-[14%]", "bottom-[6%] right-[10%]"];
export default function Hero() {
  let k = 0;
  const centerMember = MEMBERS.find(m => m.name === "Sujitha A") ?? MEMBERS[0];
  const orbitMembers = MEMBERS.filter(m => m.name !== centerMember.name);
  return (
    <section id="home" className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <p className="mb-5 text-base text-muted">Hey, we&apos;re {TEAM_NAME} <span aria-hidden>👋</span> Coimbatore, India</p>
        <h1 className="font-serif text-[clamp(2.6rem,6.2vw,5.25rem)] font-bold leading-[0.98] tracking-[-0.03em]">
          {LINES.map((line, li) => (
            <span key={li} className="block">
              {line.map((w, wi) => (
                <motion.span key={w} className={`mr-[0.22em] inline-block ${li === 0 && wi === 0 ? "hl-grad" : ""}`} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 * k++ }}>{w}</motion.span>
              ))}
            </span>
          ))}
        </h1>
        <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-muted">We build intelligent AI agents, applications and cloud systems that help businesses simplify complex workflows, reduce repetitive work and scale with confidence.</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#contact-form" className={primaryBtn}>Let&apos;s Build Something Smarter</a>
          <a href="#work" className={secondaryBtn}>Explore Our Work</a>
        </div>
      </div>
      <div aria-label={`${TEAM_NAME} team portraits`} className="relative mx-auto aspect-square w-full max-w-[500px]">
        <span aria-hidden className="absolute inset-[3%] rounded-full bg-brand/[0.04] blur-2xl" />
        <motion.span aria-hidden className="absolute inset-[5%] rounded-full border-2 border-brand border-r-brand/20" initial={{ rotate: -120 }} animate={{ rotate: 0 }} transition={{ duration: 1.8, ease: "easeOut" }} />
        <span aria-hidden className="absolute inset-[10%] rounded-full border border-brand/15" />
        <div className="absolute inset-[18%] rounded-full border border-brand/20 bg-white p-2 shadow-lift">
          <Avatar name={centerMember.name} src={centerMember.img} size={0} grayscale className="!h-full !w-full !border-brand/30 !p-0" />
        </div>
        {orbitMembers.map((m, i) => <Avatar key={m.name} name={m.name} src={m.img} size={120} grayscale className={`absolute z-10 bg-white shadow-card ring-4 ring-white !p-[2%] transition duration-300 hover:scale-110 ${pos[i]}`} />)}
      </div>
    </section>
  );
}
