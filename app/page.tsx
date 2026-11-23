import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Problems, Services, HowWeWork, Cases, Marquee, Team, CtaFooter } from "@/components/Sections";
export default function Page() {
  return <><Navbar /><main><Hero /><Problems /><Services /><HowWeWork /><Cases /><Marquee /><Team /></main><CtaFooter /></>;
}
