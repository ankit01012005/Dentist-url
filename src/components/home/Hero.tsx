"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, CalendarCheck, Award } from "lucide-react";
import { site, telLink, whatsappLink } from "@/content/site";
import Img from "../Img";
import { Button, Container, Stars } from "../ui";
import { GoogleIcon, WhatsAppIcon } from "../BrandIcons";
import { ease } from "../motion";
import { sized } from "@/lib/unsplash";

const float = (delay = 0, dist = 8) => ({
  animate: { y: [0, -dist, 0] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay },
});

export default function Hero() {
  const h = site.home.hero;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const words = h.headlineStart.split(" ");

  return (
    <section ref={ref} className="relative -mt-[76px] overflow-hidden pb-16 pt-[110px] sm:pb-24 lg:pb-28 lg:pt-[132px]">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-32 -top-32 h-[560px] w-[560px] rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "linear-gradient(to right, color-mix(in oklab, var(--brand) 10%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--brand) 10%, transparent) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)",
          }}
        />
      </div>

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Copy */}
        <div className="relative z-10">
          <p
            className="rise inline-flex items-center gap-2.5 rounded-full bg-white/80 py-1.5 pl-2 pr-4 text-[13px] font-semibold text-brand-dark shadow-soft ring-1 ring-brand-100 backdrop-blur"
          >
            <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-brand-100">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-brand/60" />
              <span className="relative h-2 w-2 rounded-full bg-brand" />
            </span>
            {h.eyebrow}
          </p>

          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] text-brand-dark min-[400px]:text-[2.9rem] sm:text-6xl lg:text-[4.4rem] xl:text-[4.9rem]">
            <span className="sr-only">
              {h.headlineStart} {h.headlineAccent}
            </span>
            <span aria-hidden="true">
              {words.map((w, i) => (
                <span key={i} className="rise-blur mr-[0.22em] inline-block" style={{ animationDelay: `${0.08 + i * 0.07}s` }}>
                  {w}
                </span>
              ))}
              <span className="rise-blur relative inline-block whitespace-nowrap" style={{ animationDelay: `${0.08 + words.length * 0.07}s` }}>
                <span className="accent-serif bg-gradient-to-r from-brand to-brand-700 bg-clip-text pr-1 font-medium text-transparent">{h.headlineAccent}</span>
                <svg className="absolute -bottom-2 left-0 h-3 w-full text-accent sm:-bottom-3 sm:h-4" viewBox="0 0 300 16" fill="none" preserveAspectRatio="none">
                  <m.path
                    d="M3 12C60 4 140 2 297 8"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.9, ease }}
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p
            style={{ animationDelay: "0.3s" }}
            className="rise-blur mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            {h.sub}
          </p>

          <div
            style={{ animationDelay: "0.6s" }}
            className="rise mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href={whatsappLink()} variant="whatsapp" className="sm:px-7">
              <WhatsAppIcon /> {site.cta.whatsapp}
            </Button>
            <Button href={telLink} variant="outline" className="sm:px-7">
              <Phone size={18} aria-hidden="true" className="transition-transform group-hover:rotate-12" /> {site.cta.call}
            </Button>
          </div>

          <div
            style={{ animationDelay: "0.8s" }}
            className="rise mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {h.avatars.map((a, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={sized(a, 96, 96)} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover ring-[3px] ring-bg" loading="lazy" />
              ))}
            </div>
            <div>
              <Stars rating={5} size={15} />
              <p className="mt-1 text-sm font-medium text-muted">{h.trustLine}</p>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div
          style={{ animationDelay: "0.15s" }}
          className="pop relative mx-auto w-full max-w-[540px] px-3 sm:px-8 lg:px-4"
        >
          <div className="absolute inset-x-3 bottom-0 top-0 translate-x-3 translate-y-3 rounded-t-[999px] rounded-b-[40px] bg-gradient-to-br from-accent-300 via-accent-100 to-brand-200 sm:inset-x-8 sm:translate-x-5 sm:translate-y-5 lg:inset-x-4" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[40px] bg-brand-100 shadow-lift ring-8 ring-white">
            <m.div style={{ y: imgY }} className="will-change-transform">
              <Img src={h.image} alt={h.imageAlt} ratio={1.22} width={640} widths={[400, 560, 720, 960]} sizes="(min-width: 1024px) 520px, 90vw" priority className="h-auto w-full scale-110 object-cover" />
            </m.div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/25 via-transparent to-transparent" aria-hidden="true" />
          </div>

          {/* Floating cards */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="absolute -left-1 bottom-10 sm:-left-4 sm:bottom-16"
          >
            <m.div {...float(0)} className="rounded-2xl bg-white/90 p-3.5 shadow-lift ring-1 ring-white backdrop-blur-xl sm:p-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-soft sm:h-11 sm:w-11"><GoogleIcon size={22} /></span>
                <div>
                  <p className="flex items-center gap-1.5 font-display text-xl font-extrabold leading-none text-brand-dark sm:text-2xl">
                    {site.business.rating}
                    <Stars rating={5} size={13} />
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted">{h.ratingCard.title} · {h.ratingCard.sub}</p>
                </div>
              </div>
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.15, ease }}
            className="absolute -right-1 top-[22%] sm:-right-2"
          >
            <m.div {...float(1.2, 6)} className="flex items-center gap-3 rounded-2xl bg-white/90 p-3 pr-4 shadow-lift ring-1 ring-white backdrop-blur-xl">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600"><CalendarCheck size={20} aria-hidden="true" /></span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">{h.availabilityCard.title}</p>
                <p className="flex items-center gap-1.5 text-sm font-bold text-brand-dark">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                  {h.availabilityCard.sub}
                </p>
              </div>
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease }}
            className="absolute -bottom-5 right-4 sm:right-10"
          >
            <m.div {...float(2.2, 5)} className="flex items-center gap-2.5 rounded-full bg-brand-dark py-2 pl-2 pr-4 text-white shadow-lift">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-brand-dark"><Award size={16} aria-hidden="true" /></span>
              <span className="text-[13px] font-semibold">{h.specialistCard.title} <span className="font-normal text-white/70">· {h.specialistCard.sub}</span></span>
            </m.div>
          </m.div>
        </div>
      </Container>
    </section>
  );
}
