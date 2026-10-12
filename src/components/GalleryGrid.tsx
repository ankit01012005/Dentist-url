"use client";

import { m, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { site, type GalleryCategory } from "@/content/site";
import Img from "./Img";
import { ease } from "./motion";

type Filter = "All" | GalleryCategory;

export default function GalleryGrid() {
  const g = site.pages.gallery;
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const items = useMemo(() => site.gallery.filter((x) => filter === "All" || x.category === filter), [filter]);
  const filters: Filter[] = ["All", ...g.filters];

  const step = useCallback((d: 1 | -1) => setLightbox((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);
  const close = () => {
    setLightbox(null);
    lastFocus.current?.focus();
  };

  useEffect(() => {
    if (lightbox === null) return;
    closeBtn.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, step]);

  const current = lightbox !== null ? items[lightbox] : null;

  return (
    <>
      <div role="group" aria-label="Filter gallery" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${filter === f ? "text-white" : "bg-white text-brand-dark ring-1 ring-brand-dark/10 hover:ring-brand"}`}
          >
            {filter === f && <m.span layoutId="gallery-filter" className="absolute inset-0 rounded-full bg-brand shadow-glow" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
            <span className="relative">{f === "All" ? g.allLabel : f}</span>
          </button>
        ))}
      </div>

      <m.ul layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <AnimatePresence mode="popLayout">
          {items.map((it, i) => (
            <m.li
              key={it.image + it.title}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, ease }}
            >
              <button
                type="button"
                onClick={(e) => {
                  lastFocus.current = e.currentTarget;
                  setLightbox(i);
                }}
                className="group relative block w-full overflow-hidden rounded-3xl bg-brand-100 text-left shadow-soft ring-1 ring-brand-dark/5"
                aria-label={`${it.title} — ${it.detail}`}
              >
                <Img src={it.image} alt={it.alt} ratio={1.1} width={600} widths={[360, 480, 600, 800]} sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="aspect-[1/1.1] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/10 to-transparent" aria-hidden="true" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-dark backdrop-blur">{it.category}</span>
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-brand-dark opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Expand size={17} aria-hidden="true" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="block font-display text-lg font-bold">{it.title}</span>
                  <span className="mt-0.5 block text-sm text-white/80">{it.detail}</span>
                </span>
              </button>
            </m.li>
          ))}
        </AnimatePresence>
      </m.ul>

      <p className="mt-8 text-center text-xs text-muted">{g.disclaimer}</p>

      <AnimatePresence>
        {current && (
          <m.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-dark/90 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button ref={closeBtn} type="button" onClick={close} aria-label={site.labels.close} className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20">
              <X size={22} aria-hidden="true" />
            </button>
            <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label={site.labels.previous} className="absolute bottom-6 left-3 z-10 grid h-12 w-12 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20 sm:left-6">
              <ChevronLeft size={24} aria-hidden="true" />
            </button>
            <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label={site.labels.next} className="absolute bottom-6 right-3 z-10 grid h-12 w-12 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20 sm:right-6">
              <ChevronRight size={24} aria-hidden="true" />
            </button>

            <AnimatePresence mode="wait">
              <m.figure
                key={lightbox}
                className="w-full max-w-3xl"
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease }}
                onClick={(e) => e.stopPropagation()}
              >
                <Img src={current.image} alt={current.alt} ratio={0.75} width={1200} widths={[600, 900, 1200, 1600]} sizes="(min-width: 768px) 768px, 100vw" priority className="max-h-[72vh] w-full rounded-3xl object-cover" />
                <figcaption className="mt-4 text-center text-white">
                  <span className="block font-display text-xl font-bold">{current.title}</span>
                  <span className="text-sm text-white/70">{current.detail}</span>
                  <span className="mt-2 block text-xs text-white/50">{(lightbox ?? 0) + 1} / {items.length}</span>
                </figcaption>
              </m.figure>
            </AnimatePresence>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
