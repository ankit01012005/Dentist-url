"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Container, Eyebrow } from "./ui";

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  end?: string;
  sub?: string;
  crumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
};

/** Header band for inner pages, with breadcrumb and soft atmosphere. */
export default function PageHero({ eyebrow, title, accent, end, sub, crumbs, children }: Props) {
  return (
    <section className="relative -mt-[76px] overflow-hidden pb-14 pt-[124px] sm:pb-20 sm:pt-[148px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-24 -top-40 h-[480px] w-[480px] rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      </div>
      <Container className="relative">
        {crumbs && (
          <m.nav aria-label="Breadcrumb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight size={14} className="text-brand-300" aria-hidden="true" />}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-brand">{c.label}</Link>
                  ) : (
                    <span aria-current="page" className="font-medium text-brand-dark">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </m.nav>
        )}
        <div className="rise max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-brand-dark sm:text-5xl lg:text-[4rem]">
            {title} {accent && <span className="accent-serif font-medium text-brand">{accent}</span>}
            {end && <> {end}</>}
          </h1>
          {sub && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{sub}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
