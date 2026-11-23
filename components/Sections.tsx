import Reveal from "./Reveal";
import Avatar from "./Avatar";
import ServicesExplorer from "./ServicesExplorer";
import { PROBLEMS, SERVICES, CASES, MEMBERS, STACK, TEAM_NAME, LOCATION } from "@/lib/config";
import ProjectExplorer from "./ProjectExplorer";
import { primaryBtn } from "./Hero";
import ContactForm from "./ContactForm";
import HowWeWorkSteps from "./HowWeWorkSteps";
const card = "rounded-card border border-hair bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift";
const h2 = "text-4xl font-bold tracking-[-0.03em] md:text-5xl";
const Wrap = ({ id, title, sub, children }: { id?: string; title: string; sub?: string; children: React.ReactNode }) => (
  <section id={id} className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24">
    <Reveal><h2 className={h2}>{title}</h2>{sub && <p className="mt-4 max-w-2xl font-light text-muted">{sub}</p>}</Reveal>
    <div className="mt-12">{children}</div>
  </section>
);
const ProblemIcon = ({ index }: { index: number }) => (
  <span aria-hidden style={{ animationDelay: `${index * 0.7}s` }} className="problem-icon grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {index === 0 ? <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" /></> : index === 1 ? <><rect x="3.5" y="4" width="7" height="6" rx="1.5" /><rect x="13.5" y="14" width="7" height="6" rx="1.5" /><path d="M10.5 7h3a2 2 0 0 1 2 2v5" /><path d="m13 12 2.5 2.5L18 12" /></> : <><path d="M4 19.5h16" /><path d="m5.5 15 4-4 3 2 5.5-6" /><path d="M14.5 7H18v3.5" /></>}
    </svg>
  </span>
);
const Tag = ({ t }: { t: string }) => <span className="rounded-md border border-hair bg-canvas px-2 py-1 font-mono text-xs text-muted">{t}</span>;

export function Problems() {
  return <Wrap title="Your Business Deserves Smarter Ways to Work." sub="Growing businesses often face challenges that slow down productivity, increase costs and make scaling difficult.">
    <div className="grid gap-6 md:grid-cols-3">{PROBLEMS.map(([t, f, trigger], i) => <Reveal key={t} delay={i * 0.12}>
      <article className={`problem-card group relative h-full overflow-hidden ${card}`}>
        <span aria-hidden className="problem-glow absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand/[0.04] blur-2xl transition duration-500 group-hover:scale-150 group-hover:bg-brand/[0.09]" />
        <div className="relative flex items-center justify-between">
          <ProblemIcon index={i} />
          <span className="font-mono text-sm font-medium tracking-widest text-brand/40">0{i + 1}</span>
        </div>
        <p className="relative mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">The challenge</p>
        <h3 className="relative mt-2 text-lg font-semibold leading-snug">{t}</h3>
        <p className="relative mt-3 text-sm leading-relaxed text-muted">{f}</p>
        <p className="relative mt-6 inline-flex rounded-full bg-brand/[0.06] px-3 py-1.5 font-mono text-[11px] text-brand">{trigger}</p>
      </article>
    </Reveal>)}</div>
  </Wrap>;
}
export function Services() {
  return <Wrap id="services" title="Technology That Moves Your Business Forward." sub="From intelligent automation to scalable infrastructure, we build technology around your real business needs.">
    <ServicesExplorer />
  </Wrap>;
}
export function HowWeWork() {
  return <Wrap title="From Business Challenge to Working Solution." sub="A clear, collaborative process that takes your idea from the first conversation to production.">
    <HowWeWorkSteps />
  </Wrap>;
}
export function Cases() {
  return <Wrap id="work" title="Real Problems. Thoughtful Engineering. Practical Solutions." sub="Explore how we approach technical challenges and turn ideas into working systems.">
    <ProjectExplorer />
    <h3 className="mb-6 mt-20 text-2xl font-semibold tracking-tight">Case studies</h3>
    <div className="grid gap-6 lg:grid-cols-3">{CASES.map((c, i) => <Reveal key={c.n} delay={i * 0.08}><article className={`${card} flex h-full flex-col`}>
      <p className="text-xs text-muted">{c.c}</p><h3 className="mt-2 text-xl font-semibold leading-snug">{c.n}</h3>
      <dl className="mt-5 space-y-4 text-sm"><div><dt className="font-medium">The Challenge</dt><dd className="mt-1 text-muted">{c.p}</dd></div><div><dt className="font-medium">Our Approach</dt><dd className="mt-1 text-muted">{c.s}</dd></div></dl>
      <div className="mt-auto pt-6"><p className="mb-3 text-xs font-medium text-muted">Built With</p><div className="flex flex-wrap gap-2">{c.tags.map(t => <Tag key={t} t={t} />)}</div></div>
    </article></Reveal>)}</div>
  </Wrap>;
}
export function Team() {
  return <Wrap id="team" title="Small Team. Deep Technical Thinking. Real Ownership." sub="Meet the engineers who design, build and deploy intelligent solutions.">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{MEMBERS.map((m, i) => (
      <Reveal key={m.name} delay={i * 0.06}><article className={`${card} flex h-full flex-col`}>
        <Avatar name={m.name} src={m.img} size={136} grayscale={false} />
        <div className="mt-5"><h3 className="text-xl font-semibold">{m.name}</h3><p className="text-sm text-brand">{m.role}</p>
          <div className="mt-3 flex flex-wrap gap-2">{m.chips.map(c => <Tag key={c} t={c} />)}</div>
          <p className="mt-4 text-sm leading-relaxed text-muted"><span className="font-medium text-ink">Role in the team: </span>{m.team}</p>
        </div>
      </article></Reveal>))}</div>
  </Wrap>;
}
export function Marquee() {
  const items = [...STACK, ...STACK];
  return <section aria-label="Technology stack" className="py-16">
    <div className="marquee overflow-hidden border-y border-hair py-8">
      <ul className="marquee-track flex w-max gap-12">{items.map((s, i) => <li key={i} aria-hidden={i >= STACK.length} className="text-xl font-semibold tracking-tight text-zinc-400 transition-colors hover:text-brand">{s}</li>)}</ul>
    </div>
  </section>;
}
export function CtaFooter() {
  return <footer className="mx-auto max-w-7xl px-6 pb-10 pt-28">
    <Reveal><h2 className="max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">Have a Business Challenge? Let&apos;s Build a Better Way.</h2>
      <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted">You don&apos;t need a complete technical plan to get started. Tell us what&apos;s slowing your business down, and we&apos;ll explore how technology can help.</p>
      <div className="mt-8 flex flex-wrap items-center gap-6"><a href="#contact-form" className={primaryBtn}>Let&apos;s Talk About Your Project</a></div>
      <p className="mt-5 text-sm text-muted">No pressure. Just a practical conversation about what you need.</p></Reveal>
    <div className="mt-12"><ContactForm /></div>
    <div className="mt-24 flex flex-col gap-4 border-t border-hair pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
      <span className="text-lg font-bold text-ink">{TEAM_NAME}</span>
      <span>{LOCATION}. Open to remote and global clients.</span>
      <span>© {new Date().getFullYear()} {TEAM_NAME}</span>
    </div>
  </footer>;
}
