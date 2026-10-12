import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { site } from "@/content/site";

export default function AnnouncementBar() {
  const a = site.announcement;
  if (!a.enabled) return null;
  return (
    <div className="relative z-50 bg-brand-dark text-white">
      <Link href={a.href} className="group mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-[13px] font-medium sm:text-sm">
        <Sparkles size={15} className="shrink-0 text-accent" aria-hidden="true" />
        <span className="truncate">{a.text}.</span>
        <span className="inline-flex shrink-0 items-center gap-1 font-semibold text-accent underline-offset-4 group-hover:underline">
          {a.linkText}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </Link>
    </div>
  );
}
