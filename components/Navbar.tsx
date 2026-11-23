import Image from "next/image";
import { LINKEDIN_URL, NAV, TEAM_NAME } from "@/lib/config";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-canvas/85 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6">
        <a href="#home" aria-label={`${TEAM_NAME} home`} className="inline-flex shrink-0 items-center gap-2">
          <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl border border-hair bg-white">
            <Image src="/qubit-ai-mark.webp" alt="" width={48} height={48} priority unoptimized className="h-11 w-11 object-contain" />
          </span>
          <span className="text-xl font-semibold tracking-tight text-ink">{TEAM_NAME}</span>
        </a>
        <ul className="hidden gap-9 md:flex">
          {NAV.map(([l, h], i) => <li key={l}><a href={h} aria-current={i === 0 ? "page" : undefined} className={`text-sm font-medium transition-colors hover:text-brand ${i === 0 ? "text-brand" : "text-muted"}`}>{l}</a></li>)}
        </ul>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile in a new tab" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand/20 px-4 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand/5">
          <span aria-hidden="true" className="inline-flex h-4 w-4 items-center justify-center rounded-[2px] bg-[#0A66C2] text-[10px] font-bold leading-none text-white">in</span>
          LinkedIn
        </a>
      </nav>
    </header>
  );
}
