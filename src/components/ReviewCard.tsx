import { BadgeCheck } from "lucide-react";
import { site, type Review } from "@/content/site";
import { GoogleIcon } from "./BrandIcons";
import { Stars } from "./ui";

const tones = ["bg-brand", "bg-[#7C5CBF]", "bg-[#D9663B]", "bg-[#2F7D4F]", "bg-[#B5477A]", "bg-[#3C6FB5]"];

export default function ReviewCard({ r, i = 0 }: { r: Review; i?: number }) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft ring-1 ring-brand-dark/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-bold text-white ${tones[i % tones.length]}`} aria-hidden="true">
            {r.initials}
          </span>
          <div>
            <h3 className="font-display text-[15px] font-bold text-brand-dark">{r.name}</h3>
            <p className="text-xs text-muted">
              {r.localGuide ? `${site.pages.reviews.localGuide} · ` : ""}
              {r.when}
            </p>
          </div>
        </div>
        <GoogleIcon size={20} className="shrink-0" />
      </header>
      <div className="mt-4 flex items-center gap-2">
        <Stars rating={r.rating} size={16} />
        <BadgeCheck size={16} className="text-[#4285F4]" aria-hidden="true" />
      </div>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/85">{r.text}</p>
      <p className="mt-5 inline-flex self-start rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{r.treatment}</p>
    </article>
  );
}
