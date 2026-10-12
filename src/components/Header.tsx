"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { site, telLink, whatsappLink } from "@/content/site";
import Logo from "./Logo";
import { WhatsAppIcon } from "./BrandIcons";
import { ease } from "./motion";

const isActive = (path: string, href: string) => (href === "/" ? path === "/" : path.startsWith(href.replace(/\/$/, "")));

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl px-3 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "bg-white/75 shadow-soft ring-1 ring-brand-dark/5 backdrop-blur-xl backdrop-saturate-150"
              : "bg-white/40 ring-1 ring-white/60 backdrop-blur-md"
          }`}
        >
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {site.nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative z-10 block rounded-full px-4 py-2 text-[14.5px] font-medium transition-colors ${active ? "text-brand-dark" : "text-muted hover:text-brand-dark"}`}
                    >
                      {item.label}
                    </Link>
                    {active && (
                      <m.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-brand-100" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href={telLink} className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-brand-dark transition hover:text-brand xl:inline-flex">
              <Phone size={16} aria-hidden="true" /> {site.business.phoneDisplay}
            </a>
            <Link
              href="/contact/"
              className="hidden min-h-11 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-700 sm:inline-flex"
            >
              {site.cta.book}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full bg-brand-dark text-white lg:hidden"
              aria-label={site.labels.menu}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[60] lg:hidden" id="mobile-menu" role="dialog" aria-modal="true" aria-label={site.labels.menu}>
            <m.div
              className="absolute inset-0 bg-brand-dark/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <m.aside
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-white p-5 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="flex items-center justify-between">
                <Logo onClick={() => setOpen(false)} />
                <button type="button" onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full bg-brand-50 text-brand-dark" aria-label={site.labels.close}>
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-8">
                <m.ul initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}>
                  {site.nav.map((item) => {
                    const active = isActive(pathname, item.href);
                    return (
                      <m.li key={item.href} variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } } }}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={`flex items-center justify-between border-b border-brand-100 py-4 font-display text-2xl font-semibold ${active ? "text-brand" : "text-brand-dark"}`}
                        >
                          {item.label}
                          <ArrowUpRight size={20} className="text-brand-300" aria-hidden="true" />
                        </Link>
                      </m.li>
                    );
                  })}
                </m.ul>
              </nav>

              <div className="mt-auto space-y-3 pt-8">
                <div className="space-y-2 rounded-2xl bg-brand-50 p-4 text-sm text-muted">
                  <p className="flex gap-2"><Clock size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{site.business.hoursSummary}</p>
                  <p className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{site.business.address.line1}, {site.business.address.city}</p>
                </div>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0E7F45] font-semibold text-white">
                  <WhatsAppIcon /> {site.cta.whatsapp}
                </a>
                <a href={telLink} className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-dark font-semibold text-white">
                  <Phone size={18} aria-hidden="true" /> {site.cta.call}
                </a>
              </div>
            </m.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
