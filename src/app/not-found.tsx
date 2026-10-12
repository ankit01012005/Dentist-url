import type { Metadata } from "next";
import { ArrowLeft, CalendarCheck } from "lucide-react";
import { site } from "@/content/site";
import { Button, Container } from "@/components/ui";
import { ToothIcon } from "@/components/Icon";
import { Reveal } from "@/components/motion";

const p = site.pages.notFound;

export const metadata: Metadata = { title: p.title, robots: { index: false } };

export default function NotFound() {
  return (
    <section className="relative -mt-[76px] overflow-hidden pb-24 pt-[150px] sm:pb-32 sm:pt-[180px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
      </div>
      <Container className="relative text-center">
        <Reveal>
          <div className="relative mx-auto flex w-fit items-center justify-center font-display text-[7rem] font-extrabold leading-none text-brand-dark sm:text-[11rem]">
            <span>4</span>
            <span className="mx-1 grid h-[0.8em] w-[0.8em] place-items-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-white shadow-glow">
              <ToothIcon size={64} strokeWidth={1.6} className="h-[0.42em] w-[0.42em]" />
            </span>
            <span>4</span>
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold text-brand-dark sm:text-5xl">
            {p.heading} <span className="accent-serif text-brand">{p.headingAccent}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted">{p.text}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/" variant="primary"><ArrowLeft size={18} aria-hidden="true" /> {p.home}</Button>
            <Button href="/contact/" variant="outline"><CalendarCheck size={18} aria-hidden="true" /> {p.contact}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
