"use client";
import { useState } from "react";
// Falls back to initials until a real photo is added to /public/team.
export default function Avatar({ name, src, size = 96, className = "", grayscale = true }: { name: string; src: string; size?: number; className?: string; grayscale?: boolean }) {
  const [ok, setOk] = useState(true);
  const ini = name.split(" ").map(w => w[0]).slice(0, 2).join("");
  return (
    <span className={`relative inline-flex shrink-0 rounded-full border border-brand p-[6%] ${className}`} style={{ width: size, height: size }}>
      <span className="relative block h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-zinc-200 to-zinc-400">
        <span className="absolute inset-0 grid place-items-center font-semibold text-ink/60" style={{ fontSize: size / 4 }} aria-hidden>{ini}</span>
        {ok && /* eslint-disable-next-line @next/next/no-img-element */ <img src={src} alt={name} onError={() => setOk(false)} className={`absolute inset-0 h-full w-full object-cover ${grayscale ? "grayscale" : ""}`} />}
      </span>
    </span>
  );
}
