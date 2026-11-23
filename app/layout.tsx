import "./globals.css";
import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { TEAM_NAME } from "@/lib/config";
const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700","800"], variable: "--font-poppins" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata: Metadata = {
  title: `${TEAM_NAME} | AI, Applications & Cloud Engineering`,
  description: "Qubit.ai builds intelligent AI agents, applications and cloud systems that simplify complex workflows and help businesses scale.",
  icons: { icon: "/qubit-ai-mark.webp" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${poppins.variable} ${mono.variable}`}><body className="font-sans antialiased"><MotionConfig reducedMotion="user">{children}</MotionConfig></body></html>;
}
