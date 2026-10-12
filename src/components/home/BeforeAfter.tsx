"use client";

import { m, AnimatePresence, animate, useInView, useMotionTemplate, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronsLeftRight, Clock, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import Img from "../Img";
import { Button, Container, SectionHeading } from "../ui";
import { ease } from "../motion";

function Slider({ index }: { index: number }) {
  const c = site.beforeAfter[index];
  const s = site.home.beforeAfter;
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const pos = useMotionValue(50);
  const clip = useMotionTemplate`inset(0 ${useTransform(pos, (v) => 100 - v)}% 0 0)`;
  const left = useMotionTemplate`${pos}%`;
  const [value, setValue] = useState(50);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const reduce = useReducedMotion();

  useEffect(() => pos.on("change", (v) => setValue(Math.round(v))), [pos]);

  // A gentle "hint" sweep the first time the slider scrolls into view.
  useEffect(() => {
    if (!inView || reduce) return;
    const ctl = animate(pos, [50, 22, 78, 50], { duration: 2.4, ease: "easeInOut", delay: 0.4 });
    return () => ctl.stop();
  }, [inView, reduce, pos]);

  const setFromX = useCallback(
    (clientX: number) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      pos.stop();
      pos.set(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
    },
    [pos],
  );

  const onKey = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 4;
    pos.stop();
    if (e.key === "ArrowLeft") pos.set(Math.max(0, pos.get() - step));
    else if (e.key === "ArrowRight") pos.set(Math.min(100, pos.get() + step));
    else if (e.key === "Home") pos.set(0);
    else if (e.key === "End") pos.set(100);
    else return;
    e.preventDefault();
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/5] w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[28px] bg-brand-100 shadow-lift ring-1 ring-brand-dark/5 sm:aspect-[5/4]"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
        setFromX(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && setFromX(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      {/* After (base layer) */}
      <Img src={c.image} alt={`${c.alt} — ${s.afterLabel.toLowerCase()}`} ratio={0.8} width={900} widths={[480, 720, 900, 1200]} sizes="(min-width: 1024px) 640px, 100vw" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      {/* Before (clipped layer) */}
      <m.div className="absolute inset-0" style={{ clipPath: clip }}>
        <Img
          src={c.beforeImage ?? c.image}
          alt={`${c.alt} — ${s.beforeLabel.toLowerCase()}`}
          ratio={0.8}
          width={900}
          widths={[480, 720, 900, 1200]}
          sizes="(min-width: 1024px) 640px, 100vw"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ filter: c.beforeImage ? undefined : c.beforeFilter }}
        />
      </m.div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-brand-dark/75 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">{s.beforeLabel}</span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/85 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-dark backdrop-blur">{s.afterLabel}</span>

      {/* Handle */}
      <m.div className="pointer-events-none absolute inset-y-0 -ml-px w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,.25)]" style={{ left }}>
        <div
          role="slider"
          tabIndex={0}
          aria-label={`${s.beforeLabel} / ${s.afterLabel}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={value}
          aria-valuetext={`${value}% ${s.beforeLabel.toLowerCase()}`}
          onKeyDown={onKey}
          className="pointer-events-auto absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand shadow-lift ring-4 ring-white/40 transition-transform active:scale-95"
        >
          <ChevronsLeftRight size={24} aria-hidden="true" />
        </div>
      </m.div>
    </div>
  );
}

export default function BeforeAfter() {
  const s = site.home.beforeAfter;
  const [active, setActive] = useState(0);
  const c = site.beforeAfter[active];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28" aria-labelledby="ba-heading">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading id="ba-heading" eyebrow={s.eyebrow} title={s.title} accent={s.titleAccent} sub={s.sub} />

          <div role="tablist" aria-label={s.eyebrow} className="mt-8 inline-flex flex-wrap gap-1 rounded-full bg-brand-50 p-1.5 ring-1 ring-brand-100">
            {site.beforeAfter.map((x, i) => (
              <button
                key={x.tab}
                role="tab"
                type="button"
                aria-selected={active === i}
                aria-controls="ba-panel"
                onClick={() => setActive(i)}
                className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5 ${active === i ? "text-white" : "text-brand-dark hover:text-brand"}`}
              >
                {active === i && <m.span layoutId="ba-tab" className="absolute inset-0 rounded-full bg-brand shadow-glow" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                <span className="relative">{x.tab}</span>
              </button>
            ))}
          </div>

          <div className="relative mt-8 min-h-[150px]">
            <AnimatePresence mode="wait">
              <m.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4, ease }}>
                <h3 className="font-display text-2xl font-bold text-brand-dark">{c.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted">{c.summary}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent-100 px-3.5 py-1.5 text-sm font-semibold text-accent-700">
                  <Clock size={15} aria-hidden="true" /> {c.duration}
                </p>
              </m.div>
            </AnimatePresence>
          </div>

          <Button href="/gallery/" variant="outline" className="mt-6">
            {site.pages.gallery.title} <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div id="ba-panel" role="tabpanel">
          <AnimatePresence mode="wait">
            <m.div key={active} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.45, ease }}>
              <Slider index={active} />
            </m.div>
          </AnimatePresence>
          <p className="mt-3 text-center text-xs text-muted">{s.disclaimer}</p>
        </div>
      </Container>
    </section>
  );
}
