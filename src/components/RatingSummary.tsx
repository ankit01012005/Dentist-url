"use client";

import { m } from "framer-motion";
import { ArrowUpRight, PenLine } from "lucide-react";
import { site } from "@/content/site";
import { GoogleIcon } from "./BrandIcons";
import { Button, Stars } from "./ui";
import { ease } from "./motion";

export default function RatingSummary() {
  const p = site.pages.reviews;
  const total = p.distribution.reduce((s, d) => s + d.count, 0);
  return (
    <div className="grid gap-8 rounded-[32px] bg-white p-6 shadow-lift ring-1 ring-brand-dark/5 sm:p-10 md:grid-cols-[auto_1fr] md:gap-14">
      <div className="text-center md:border-r md:border-brand-100 md:pr-14 md:text-left">
        <div className="inline-flex items-center gap-2 rounded-full bg-bg px-3 py-1.5 text-sm font-semibold text-brand-dark">
          <GoogleIcon size={18} /> {site.labels.googleLabel}
        </div>
        <p className="mt-4 font-display text-7xl font-extrabold leading-none text-brand-dark">{site.business.rating}</p>
        <Stars rating={5} size={22} className="mt-3" />
        <p className="mt-2 text-sm text-muted">{p.basedOn}</p>
      </div>

      <div className="flex flex-col justify-center">
        <ul className="space-y-3" aria-label="Rating distribution">
          {p.distribution.map((d, i) => {
            const pct = (d.count / total) * 100;
            return (
              <li key={d.stars} className="flex items-center gap-3 text-sm">
                <span className="w-8 shrink-0 font-semibold text-brand-dark">{d.stars}★</span>
                <span className="relative h-3 flex-1 overflow-hidden rounded-full bg-brand-50" role="img" aria-label={`${d.stars} stars: ${d.count} reviews`}>
                  <m.span
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent to-[#F5B323]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.max(pct, 1)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease }}
                  />
                </span>
                <span className="w-10 shrink-0 text-right tabular-nums text-muted">{d.count}</span>
              </li>
            );
          })}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={site.business.googleReviewsUrl} variant="primary"><PenLine size={17} aria-hidden="true" /> {p.writeReview}</Button>
          <Button href={site.business.googleReviewsUrl} variant="outline">{p.readAll} <ArrowUpRight size={17} aria-hidden="true" /></Button>
        </div>
      </div>
    </div>
  );
}
