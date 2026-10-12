"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import ReviewCard from "../ReviewCard";
import { GoogleIcon } from "../BrandIcons";
import { Container, SectionHeading, Stars } from "../ui";
import { Reveal } from "../motion";

export default function ReviewsCarousel() {
  const r = site.home.reviews;
  const track = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const items = site.reviews.slice(0, 6);

  const update = () => {
    const el = track.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  };
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 20), behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-gradient-to-b from-white to-bg py-20 sm:py-28" aria-labelledby="reviews-heading">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading id="reviews-heading" eyebrow={r.eyebrow} title={r.title} accent={r.titleAccent} end={r.titleEnd} />
          <Reveal className="flex items-center gap-4 self-start rounded-2xl bg-white p-4 pr-6 shadow-soft ring-1 ring-brand-dark/5 lg:self-auto">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-bg"><GoogleIcon size={26} /></span>
            <div>
              <p className="flex items-center gap-2 font-display text-2xl font-extrabold text-brand-dark">
                {site.business.rating} <Stars rating={5} size={16} />
              </p>
              <p className="text-sm text-muted">{site.business.reviewCountLabel} {site.labels.reviewsOnGoogle}</p>
            </div>
          </Reveal>
        </div>
      </Container>

      <Reveal>
        <div
          ref={track}
          onScroll={update}
          className="carousel-pad no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
          role="region"
          aria-roledescription="carousel"
          aria-label={r.eyebrow}
          tabIndex={0}
        >
          {items.map((rv, i) => (
            <div key={rv.name} data-card className="w-[86%] max-w-[380px] shrink-0 snap-start sm:w-[360px]">
              <ReviewCard r={rv} i={i} />
            </div>
          ))}
        </div>
      </Reveal>

      <Container className="mt-8 flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center">
        <a href={site.business.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 font-semibold text-brand underline-offset-4 hover:underline">
          {r.readAll} <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
        <div className="flex gap-2">
          <button type="button" onClick={() => scroll(-1)} disabled={edge.start} aria-label={site.labels.previous} className="grid h-12 w-12 place-items-center rounded-full bg-white text-brand-dark shadow-soft ring-1 ring-brand-dark/5 transition hover:bg-brand hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-brand-dark">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => scroll(1)} disabled={edge.end} aria-label={site.labels.next} className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-glow transition hover:bg-brand-700 disabled:opacity-40">
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>
      </Container>
    </section>
  );
}
