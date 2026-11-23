import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { canvas: "#FCFCFD", ink: "#1F2128", muted: "#6B6F7B", hair: "#ECECF1", soft: "#F1F1F4", brand: "#6A0DF0" },
    fontFamily: { sans: ["var(--font-poppins)", "system-ui", "sans-serif"], mono: ["var(--font-mono)", "monospace"] },
    boxShadow: { card: "0 1px 2px rgba(31,33,40,.04), 0 8px 24px rgba(31,33,40,.04)", lift: "0 12px 32px rgba(106,13,240,.12)", btn: "0 6px 16px rgba(31,33,40,.18)" },
    borderRadius: { card: "22px" },
  } },
} satisfies Config;
