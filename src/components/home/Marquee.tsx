import { site } from "@/content/site";
import { ToothIcon } from "../Icon";

/** Slow, infinite ribbon of clinic highlights. Pauses on hover. */
export default function Marquee() {
  const items = [...site.home.marquee, ...site.home.marquee];
  return (
    <div className="relative overflow-hidden py-8 sm:py-10" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32" />
      <div className="flex w-max animate-marquee items-center gap-8 hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-xl font-semibold text-brand-dark/80 sm:text-2xl">
            {t}
            <ToothIcon size={20} className="text-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
